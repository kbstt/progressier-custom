window.playingNow = {};

function getArtworkData(src){
	try {
		if (!src.includes('http')){src = "https:"+src;}
		let url = new URL(src);
		let width = url.searchParams.get('w');
		let height = url.searchParams.get('h');
		let sizes = width && height ? (width+'x'+height) : null;
		let type = src.includes('.png') ? 'image/png' : 'image/jpeg';
		let obj = {src: src, type: type};
		if (sizes){obj.sizes = sizes;}
		return [obj];
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
	let artwork = getArtworkData(trackSplit[2]);
	if (!artwork){return null;}
	return {title: trackSplit[0], artist: trackSplit[1], artwork: artwork};
}

function stopBroadcast(){
	window.playingNow = {};
	if (!navigator.mediaSession) {return;}
	navigator.mediaSession.playbackState = "paused";
}

function startBroadcast(track){
	if (!navigator.mediaSession) {return;}
	window.playingNow = track;
	navigator.mediaSession.metadata = new MediaMetadata({title: track.title, artist: track.artist, artwork: track.artwork});
	navigator.mediaSession.playbackState = "playing";
	
	//can't currently set action handlers because I can't find a reference to the audio element in the code	
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

function setPlaybackPosition(){
	if (!navigator.mediaSession) {return;}	
	
	//can't currently set the playback position because I can't find a reference to the audio element in the code
	//let duration = 1;
	//let position = 10;
	//navigator.mediaSession.setPositionState({duration: duration, playbackRate: 1, position: position});
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
