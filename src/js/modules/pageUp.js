const pageUp = () => {
  const up = document.querySelector('.pageup');

  window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 1000) {
      up.style.opacity = '0.8';
    } else {
      up.style.opacity = '0';
    }
  });
};

export default pageUp;