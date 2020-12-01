const pageUp = () => {
  const up = document.querySelector('.pageup');

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1000) {
    up.classList.add('animated', 'fadeIn');
      up.style.opacity = '0.8';
    } else {
    up.classList.remove('animated', 'fadeIn');
      up.style.opacity = '0';
    }
  });
};

export default pageUp;