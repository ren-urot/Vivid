document.addEventListener('DOMContentLoaded', () => {
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
