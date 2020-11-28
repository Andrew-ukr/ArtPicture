const seeMore = (btn, cardItem) => {
  const showBtn = document.querySelector(btn);
  const cards = document.querySelectorAll(cardItem);

  showBtn.addEventListener('click', () => {
    cards.forEach(item => {
      if (item.parentElement.classList.contains('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2')) {
        item.parentElement.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
        item.parentElement.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
      }
      showBtn.remove();
    });
  });


};
export default seeMore;