window.playingNow = {};
window.defaultSkipTime = 10;

function getAudioElement(){
	let els = document.querySelectorAll('audio');
	if (els.length < 1){return null;}
	if (els.length > 1){console.log("There is more than one audio element on the page. The compact player doesn't know which to control");return null;}
	return els[0];
}

function getArtworkData(src){
	if (!src){return null;}
	if (!src.includes('http')){src = "https:"+src;}
	let type = src.includes('.png') ? 'image/png' : 'image/jpeg';
	return [{src: src, type: type}];
}

function getTrackData(){
	let track = document.getElementById('POC');
	if (!track){return null;}
	let trackString = track.textContent || "";
	let trackSplit = trackString.split("**");
	if (trackSplit.length !== 3){return null;}
	let artwork = getArtworkData(trackSplit[2]);
	if (!artwork){return null;}
	return {title: trackSplit[0], artist: trackSplit[1], artwork: artwork};
}

function stopBroadcast(){
	window.playingNow = {};
	if (!navigator.mediaSession) {return;}
	navigator.mediaSession.metadata = null;
	navigator.mediaSession.playbackState = "paused";
}

function _playTrack_(){
	let audio = getAudioElement();
	if (!audio){return;}
	audio.play();
	navigator.mediaSession.playbackState = "playing";
}

function _pauseTrack_(){
	let audio = getAudioElement();
	if (!audio){return;}
	audio.pause();
	navigator.mediaSession.playbackState = "paused";
}

function _stopTrack_(){
	let audio = getAudioElement();
	if (!audio){return;}
	audio.currentTime = 0;
	audio.pause();
	navigator.mediaSession.playbackState = "paused";
}

function _seekBackward_(){
	let audio = getAudioElement();
	if (!audio){return;}
	audio.currentTime = Math.max(audio.currentTime - window.defaultSkipTime, 0);
}

function _seekForward_(){
	let audio = getAudioElement();
	if (!audio){return;}
	audio.currentTime = Math.min(audio.currentTime + window.defaultSkipTime, audio.duration);
}

function _seekTo_(details){
	let audio = getAudioElement();
	if (!audio){return;}
	audio.currentTime = details.seekTime;
}

function startBroadcast(track){
	//some browsers may not support this
	if (!navigator.mediaSession) {return;}
	window.playingNow = track;
	navigator.mediaSession.metadata = new MediaMetadata({title: track.title, artist: track.artist, artwork: track.artwork});
	navigator.mediaSession.playbackState = "playing";
	
	//we need to tie the controls of the compact player back to the controls of the <audio> element on the page	
	navigator.mediaSession.setActionHandler('play', _playTrack_);
	navigator.mediaSession.setActionHandler('pause', _pauseTrack_);
	navigator.mediaSession.setActionHandler('stop', _stopTrack_);
	navigator.mediaSession.setActionHandler('seekbackward', _seekBackward_);
	navigator.mediaSession.setActionHandler('seekforward', _seekForward_);
	navigator.mediaSession.setActionHandler('seekto', _seekTo_);
	navigator.mediaSession.setActionHandler('previoustrack', null);
	navigator.mediaSession.setActionHandler('nexttrack', null);
}

function setPlaybackPosition(){
	if (!navigator.mediaSession) {return;}
	let audio = getAudioElement();
	if (!audio){return;}
	let duration = audio.duration;
	let position = audio.currentTime;
	let rate = audio.playbackRate;
	navigator.mediaSession.setPositionState({duration: duration, playbackRate: rate, position: position});
}

function broadcastTrackData(){
	let track = getTrackData();
	if (track){
		let isNew = track.title !== window.playingNow.title || track.artist !== window.playingNow.artist;
		if (isNew){ startBroadcast(track); }
		setPlaybackPosition();
	}
	else{
		stopBroadcast();
	}
}

setInterval(broadcastTrackData, 500);
