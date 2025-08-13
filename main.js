onload = () => {
    document.body.classList.remove("container");
};
document.body.addEventListener("click", () => {
  audio.play().catch(err => {
    console.warn("Playback failed:", err);
  });
}, { once: true });
