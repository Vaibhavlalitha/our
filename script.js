/*
  PERSONALISE THIS FILE:
  1) Put your cover photo at assets/photos/cover.jpg
  2) Put gallery photos in assets/photos/ and list their filenames below.
  3) Put your music file at assets/music/our-song.mp3
  4) Edit the letter text in index.html.
  No upload/insert controls are used on the website.
*/

const photoMemories = [
  { file: "memory-1.jpg", caption: "US TRADITIONAL", number: "01" },
  { file: "memory-2.jpg", caption: "WITH MY KOLANDHAAA", number: "02" },
  { file: "memory-3.jpg", caption: "OFFICIAL", number: "03" },
  { file: "memory-4.jpg", caption: "LITTLE ADVENTURES", number: "04" },
  { file: "memory-5.jpg", caption: "REMEMBERING MOMENTS", number: "05" },
  { file: "memory-6.jpg", caption: "MY FAVOURITE PICTURE WITH YOU", number: "06" },
];

const gallery = document.getElementById("gallery");

photoMemories.forEach((memory) => {
  const card = document.createElement("article");
  card.className = "memory-card";

  const img = document.createElement("img");
  img.src = `assets/photos/${memory.file}`;
  img.alt = memory.caption;
  img.loading = "lazy";

  // Show a graceful placeholder until you add the matching photo file.
  img.onerror = () => {
    const placeholder = document.createElement("div");
    placeholder.className = "memory-placeholder";
    placeholder.textContent = "Your memory goes here";
    img.replaceWith(placeholder);
  };

  const label = document.createElement("div");
  label.className = "memory-label";
  label.innerHTML = `<span>${memory.caption}</span><span>${memory.number}</span>`;
  card.append(img, label);
  gallery.append(card);
});

const audio = document.getElementById("anniversaryAudio");
const playButton = document.getElementById("playButton");
const trackName = document.getElementById("trackName");

// Change this path if you use a different filename or audio format.
audio.src = "assets/music/our-song.mp3";
audio.addEventListener("error", () => {
  trackName.textContent = "Add your song in assets/music";
});
playButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      playButton.textContent = "Ⅱ";
      playButton.setAttribute("aria-label", "Pause music");
      trackName.textContent = "Our anniversary soundtrack";
    } catch {
      trackName.textContent = "Check that your music file is in assets/music";
    }
  } else {
    audio.pause();
    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "Play music");
  }
});
audio.addEventListener("ended", () => {
  playButton.textContent = "▶";
  playButton.setAttribute("aria-label", "Play music");
});
