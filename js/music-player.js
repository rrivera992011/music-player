// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let controlIcon = document.getElementById("controlIcon");

// song.onloadedmetadata = function () {
//   progress.max = song.duration;
//   progress.value = song.currentTime;
// };

// function playPause() {
//   if (controlIcon.classList.contains("fa-pause")) {
//     song.pause();
//     controlIcon.classList.remove("fa-pause");
//     controlIcon.classList.add("fa-play");
//   } else {
//     song.play();
//     controlIcon.classList.add("fa-pause");
//     controlIcon.classList.remove("fa-play");
//   }
// }

// function rewind() {
//   song.currentTime -= 5;
// }

// function fastForward() {
//   song.currentTime += 5;
// }

// if (song.play()) {
//   setInterval(() => {
//     progress.value = song.currentTime;
//   }, 500);
// }

// progress.onchange = function () {
//   song.play();
//   song.currentTime = progress.value;
//   controlIcon.classList.add("fa-pause");
//   controlIcon.classList.remove("fa-play");
// };

$(document).ready(function () {
  var controlIcon = $("#controlIcon");
  var song = $("#song");
  var progress = $("#progress");
  var rewindIcon = $("#rewindIcon");
  var forwardIcon = $("#forwardIcon");

  song.on("loadedmetadata", function () {
    progress.max = song[0].duration;
    progress.value = song[0].currentTime;
  });

  controlIcon.click(function () {
    if (controlIcon.hasClass("fa-pause")) {
      song[0].pause();
      controlIcon.removeClass("fa-pause").addClass("fa-play");
    } else {
      song[0].play();
      controlIcon.removeClass("fa-play").addClass("fa-pause");
    }
  });

  rewindIcon.click(function () {
    song[0].currentTime -= 5;
  });

  forwardIcon.click(function () {
    song[0].currentTime += 5;
  });

  // if (song[0].play()) {
  //   setInterval(() => {
  //     progress.value = song[0].currentTime;
  //   }, 500);
  // }

  // progress.onchange = function () {
  //   song.play();
  //   song.currentTime = progress.value;
  //   controlIcon.classList.add("fa-pause");
  //   controlIcon.classList.remove("fa-play");
  // };
});
