const acardion = () => {
  const header = document.querySelectorAll('.accordion-heading');
  const block = document.querySelectorAll('.accordion-block');

  function hideBlock() {
    block.forEach(item => {
      item.style.display = 'none';
    });
  }
  hideBlock();

  header.forEach(item => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('ui-accordion-header-active')) {
        header.forEach(element => {
          element.classList.remove('ui-accordion-header-active');
        });
      }

      hideBlock();
      
      item.classList.toggle('ui-accordion-header-active');
      if (item.classList.contains('ui-accordion-header-active')) {
        item.nextElementSibling.style.display = 'block';
        item.nextElementSibling.classList.add('animated', 'fadeIn');
      } else {
        item.nextElementSibling.style.display = 'none';
        item.nextElementSibling.classList.remove('animated', 'fadeIn');
      }
    });
  });
};
export default acardion;