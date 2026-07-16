document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.nav-dropdown-wrap');
  dropdowns.forEach((wrap) => {
    const button = wrap.querySelector('.nav-dropdown');
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.contains('open');
      dropdowns.forEach((w) => {
        w.classList.remove('open');
        w.querySelector('.nav-dropdown').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        wrap.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', () => {
    dropdowns.forEach((w) => {
      w.classList.remove('open');
      w.querySelector('.nav-dropdown').setAttribute('aria-expanded', 'false');
    });
  });

  const playButton = document.querySelector('.play-video');
  if (playButton) {
    playButton.addEventListener('click', () => {
      console.log('Play video');
    });
  }

  const newsletter = document.querySelector('.newsletter');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletter.querySelector('input[type="email"]').value;
      console.log('Newsletter signup:', email);
      newsletter.reset();
    });
  }
});
