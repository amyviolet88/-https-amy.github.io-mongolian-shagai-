/* =============================
   Mongolian Shagai — script.js
   ============================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Audio ── */
  const audio     = document.getElementById('bgMusic');
  const audioBtn  = document.getElementById('audioBtn');
  const playIcon  = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const audioLabel= document.getElementById('audioLabel');

  let playing = false;

  function setPlaying(state) {
    playing = state;
    playIcon.style.display  = state ? 'none'  : '';
    pauseIcon.style.display = state ? ''      : 'none';
    audioLabel.textContent  = state ? 'Зогсоох' : 'Морин хуур';
  }

  audioBtn.addEventListener('click', () => {
    if (!playing) {
      audio.play().then(() => setPlaying(true)).catch(console.warn);
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  audio.addEventListener('ended', () => setPlaying(false));

  /* ── Shagai hover tooltips & click effect ── */
  const items = document.querySelectorAll('.shagai-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      // Brief flash effect on click
      item.style.transition = 'filter 0.1s';
      item.style.filter = 'brightness(2) drop-shadow(0 0 30px gold)';
      setTimeout(() => {
        item.style.filter = '';
      }, 300);
    });
  });

  /* ── Pause orbit on hover ── */
  const ring = document.getElementById('shagaiRing');
  const orbits = document.querySelectorAll('.shagai-orbit');

  ring.addEventListener('mouseenter', () => {
    orbits.forEach(o => {
      const computed = window.getComputedStyle(o);
      const matrix = computed.transform;
      o.style.animationPlayState = 'paused';
    });
  });

  ring.addEventListener('mouseleave', () => {
    orbits.forEach(o => {
      o.style.animationPlayState = 'running';
    });
  });

  /* ── Subtle parallax on mouse move ── */
  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;  // -1 … 1
    const dy = (e.clientY - cy) / cy;
    const frame = document.querySelector('.circle-frame');
    if (frame) {
      frame.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
    }
  });

});
