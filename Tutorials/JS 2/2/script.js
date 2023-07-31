
document.addEventListener('DOMContentLoaded', function () {

    const videoElement = document.getElementById('myVideo');

    
    function playVideo() {
        videoElement.play();
    }

    
    function pauseVideo() {
        videoElement.pause();
    }


    videoElement.addEventListener('mouseover', playVideo);
    videoElement.addEventListener('mouseout', pauseVideo);
});
