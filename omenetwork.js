window.playingNow = {};

function getArtworkData(src){
	try {
		let url = new URL(src);
		let width = url.searchParams.get('w');
		let height = url.searchParams.get('h');
		let sizes = width+'x'+height;
		let type = src.includes('.png') ? 'image/png' : 'image/jpeg';
		return  [{src: src, sizes: sizes, type: type }];
	}
	catch(err){
		return null;
	}
}

function getTrackData(){
	let track = document.getElementById('POC');
	if (!track){return null;}
	let trackString = track.textContent || "";
	let trackSplit = trackString.split("**");
	if (trackSplit.length !== 3){return null;}
	let artwork = that.getArtworkData(trackSplit[2]);
	if (!artwork){return null;}
	return {title: trackSplit[0], artist: trackSplit[1], artwork: artwork};
}

function stopBroadcast(){
	window.playingNow = {};
	if (!navigator.mediaSession) {return;}
	navigator.mediaSession.playbackState = "paused";
}

function startBroadcast(track){
	//some browsers may not support this
	if (!navigator.mediaSession) {return;}
	window.playingNow = track;
	navigator.mediaSession.metadata = new MediaMetadata({title: track.title, artist: track.artist, artwork: track.artwork});
	navigator.mediaSession.playbackState = "playing";
	//you also need to tie the controls of the compact player back to the controls of the <audio> element on the page
	//haven't implemented functions for seekbackward, seekforward, and seekto. See reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaSession
	/*navigator.mediaSession.setActionHandler('play', function(){});
	navigator.mediaSession.setActionHandler('pause', function(){});
	navigator.mediaSession.setActionHandler('stop', function(){});
	navigator.mediaSession.setActionHandler('previoustrack', function(){});
	navigator.mediaSession.setActionHandler('nexttrack', function(){});
	navigator.mediaSession.setActionHandler('seekbackward', function(){});
	navigator.mediaSession.setActionHandler('seekforward',  function(){});
	navigator.mediaSession.setActionHandler('seekto',  function(){});
	*/
}

function setPlaybackPositionn(){
	if (!navigator.mediaSession) {return;}
	let duration = 1;
	let position = 10;
	//navigator.mediaSession.setPositionState({duration: duration, playbackRate: 1, position: position});
}

function broadcastTrackData(){
	let track = getTrackData();
	console.log(track);
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
