//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('meditation-video');
    const audioElement = document.getElementById('meditation-audio');
    const timeDisplay = document.getElementById('time-display');

    const videoSources = {
        beach: 'video/beach.mp4',
        rain: 'video/rain.mp4'
    };

    const audioSources = {
        beach: 'Sounds/beach.mp3',
        rain: 'Sounds/rain.mp3'
    };

    function setTime(minutes) {
        const seconds = minutes * 60;
        const endTime = new Date().getTime() + (seconds * 1000);
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const remainingTime = endTime - now;
            if (remainingTime <= 0) {
                clearInterval(interval);
                timeDisplay.textContent = '00:00';
                return;
            }
            const mins = Math.floor(remainingTime / 60000);
            const secs = Math.floor((remainingTime % 60000) / 1000);
            timeDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }

    document.getElementById('smaller-mins').addEventListener('click', () => setTime(2));
    document.getElementById('medium-mins').addEventListener('click', () => setTime(5));
    document.getElementById('long-mins').addEventListener('click', () => setTime(10));

    document.getElementById('sound-beach').addEventListener('click', () => {
        videoElement.src = videoSources.beach;
        audioElement.src = audioSources.beach;
    });

    document.getElementById('sound-rain').addEventListener('click', () => {
        videoElement.src = videoSources.rain;
        audioElement.src = audioSources.rain;
    });

    document.getElementById('play-button').addEventListener('click', () => {
        audioElement.play();
    });

    document.getElementById('pause-button').addEventListener('click', () => {
        audioElement.pause();
    });
});
