// Extract video ID from YouTube URL
function extractVideoId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

// Handle video URL form submission
document.getElementById('videoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const url = document.getElementById('videoUrl').value;
  const videoId = extractVideoId(url);
  if (videoId) {
    document.getElementById('videoPlayer').classList.remove('hidden');
    document.getElementById('videoIframe').src = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('error').classList.add('hidden');
  } else {
    document.getElementById('error').classList.remove('hidden');
  }
});

// Handle language change
document.getElementById('languageSelect').addEventListener('change', function (e) {
  const selectedLanguage = e.target.value;
  console.log(`Language changed to: ${selectedLanguage}`);
});

// Feather icons initialization
feather.replace();

// Add click event to the character
document.getElementById('characterDisplay').addEventListener('click', function() {
  const messageElement = document.getElementById('characterMessage');
  messageElement.textContent = "Let's learn together!";
  setTimeout(() => {
    messageElement.textContent = "Hey there! Ready to learn?";
  }, 2000);
});

// Initialize YouTube player
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoIframe', {
    height: '390',
    width: '640',
    videoId: '', // You can set a default video ID here
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}