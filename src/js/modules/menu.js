const menu = () => {
  const menuBtn = document.querySelector('button.burger');
  const menuBlock = document.querySelector('.burger-menu');

  menuBtn.addEventListener('click', () => {
    if (menuBlock.style.display === "none" && window.screen.availWidth < 993) {
      menuBlock.style.display = "block";
      menuBlock.classList.add('animated', 'fadeIn');
    } else {
      menuBlock.classList.remove('animated', 'fadeIn');
      menuBlock.style.display = "none";
    }

    window.addEventListener('resize', () => {
      if (window.screen.availWidth > 992) {
        menuBlock.style.display = "none";
        menuBlock.classList.remove('animated', 'fadeIn');
      }
    });
  });


};

export default menu;