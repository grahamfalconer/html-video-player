console.log("Javascript is enabled")

document.addEventListener('keydown', playVideo);
document.addEventListener('keyup', stopVideo)

function playVideo(e) {
  if(e.code == 'Space'){
    console.log("successful play")
    turtleVideo.play();
    barleyVideo.play();
  }
}

function stopVideo(e) {
  if(e.code == 'Space'){
    console.log("successful pause")
    turtleVideo.pause();
    barleyVideo.pause();
  }
}

var turtleVideo = document.getElementById ("turtle-video");
var barleyVideo = document.getElementById ("barley-video")
var playBtn = document.getElementById ("playBtn");
var pauseBtn = document.getElementById ("pauseBtn");
var stopBtn = document.getElementById ("stopBtn");

// start play with play ()
playBtn.onclick = function () {
 turtleVideo.play ();
 barleyVideo.play ();
}

// pause playback
pauseBtn.onclick = function () {
 turtleVideo.pause ();
 barleyVideo.pause ();
}

// The stop () function does not exist, so we combine pause with currentTime = 0;
stopBtn.onclick = function () {
 turtleVideo.pause ();
 barleyVideo.pause ();
 turtleVideo.currentTime = 0;
 barleyVideo.currentTime = 0;
}