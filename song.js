document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Your Song Data ---
    const playlist = [
        { title: "Ako'y Sayo", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/Akoy_sayo.mp3" },
        { title: "Best Part", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/bestpart.mp3" },
        { title: "Tibok", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/tibok.mp3" },
        { title: "Miss Miss", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/missmiss.mp3" },
        { title: "Magkabilang Mundo", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/magkabilangmundo.mp3" },
        { title: "Mundo", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/mundo.mp3" },
        { title: "Bawat Piyesa", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/bawatpiyesa.mp3" },
        { title: "Ipagpatawad Mo", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/ipagpatawad.wav" },
        { title: "Akap", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/akap.mp3" },
        { title: "Alipin", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/alipin.mp3" },
        { title: "Araw araw", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/arawaraw.mp3" },
        { title: "Ikaw at Ako", artist: "Yowie", cover: "assets/images/song/album cover.jfif", src: "assets/audio/ikawatako.mp3" },
    ];

    // --- 2. Build the UI ---
    const featuredScroll = document.getElementById('featured-scroll');
    const playlistContainer = document.getElementById('playlist-container');

    playlist.slice(0, 2).forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'featured-card';
        card.onclick = () => loadAndPlaySong(index);
        card.innerHTML = `
            <img src="${song.cover}" alt="Cover">
            <div class="card-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        featuredScroll.appendChild(card);
    });

    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        item.id = `song-item-${index}`;
        item.onclick = () => loadAndPlaySong(index);
        item.innerHTML = `
            <img src="${song.cover}" alt="Cover">
            <div class="list-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        playlistContainer.appendChild(item);
    });

    // --- 3. Audio Player Logic ---
    const audio = document.getElementById('audio-element');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // New Elements
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');
    const volumeBar = document.getElementById('volume-bar');
    
    const titleEl = document.getElementById('player-title');
    const artistEl = document.getElementById('player-artist');
    const coverEl = document.getElementById('player-cover');

    let currentSongIndex = 0;
    let isPlaying = false;

    // Format time function (converts seconds to M:SS)
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    loadSongData(currentSongIndex);

    function loadSongData(index) {
        currentSongIndex = index;
        const song = playlist[currentSongIndex];
        
        audio.src = song.src;
        titleEl.textContent = song.title;
        artistEl.textContent = song.artist;
        coverEl.src = song.cover;

        document.querySelectorAll('.playlist-item').forEach(el => el.classList.remove('playing'));
        document.getElementById(`song-item-${index}`).classList.add('playing');
        
        // Reset progress bar on new song load
        progressBar.value = 0;
        currentTimeEl.textContent = "0:00";
    }

    function loadAndPlaySong(index) {
        loadSongData(index);
        playMusic();
    }

    function playMusic() {
        isPlaying = true;
        playBtn.innerHTML = '&#10074;&#10074;'; 
        audio.play();
    }

    function pauseMusic() {
        isPlaying = false;
        playBtn.innerHTML = '&#9654;'; 
        audio.pause();
    }

    // --- Button Controls ---
    playBtn.addEventListener('click', () => { isPlaying ? pauseMusic() : playMusic(); });

    nextBtn.addEventListener('click', () => {
        let nextIndex = currentSongIndex + 1;
        if (nextIndex >= playlist.length) nextIndex = 0; 
        loadAndPlaySong(nextIndex);
    });

    prevBtn.addEventListener('click', () => {
        let prevIndex = currentSongIndex - 1;
        if (prevIndex < 0) prevIndex = playlist.length - 1; 
        loadAndPlaySong(prevIndex);
    });

    audio.addEventListener('ended', () => { nextBtn.click(); });

    // --- NEW: Progress & Volume Controls ---
    
    // Update total time when audio loads
    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    // Update progress bar & current time as song plays
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progressPercent;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    });

    // Seek song when dragging the progress bar
    progressBar.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
    });

    // Change volume
    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value;
    });
});