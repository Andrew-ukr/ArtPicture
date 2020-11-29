const filter = () => {
  const btnItems = document.querySelector('.portfolio-menu');
  const btnItem = document.querySelectorAll('.portfolio-menu li');
  const ImgItem = document.querySelectorAll('.portfolio-block');
  const noImgItem = document.querySelector('.portfolio-no');
  let curentBtnItem;

  btnItems.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === "LI") {
      btnItem.forEach(item => {
        item.classList.remove('active', 'animated', 'fadeIn');
      });
      curentBtnItem = `${e.target.classList.item(0)}`;
      e.target.classList.add('active', 'animated', 'fadeIn');
      console.log(curentBtnItem);
      showImgItem(curentBtnItem);
    }
  });

  function showImgItem(curentBtnItem) {
    let counter = 0;
    noImgItem.style.display = 'none';
    ImgItem.forEach(item => {
      item.classList.remove('animated', 'fadeIn');
      item.style.display = 'none';
      if (item.classList.contains(curentBtnItem)) {
        item.classList.add('animated', 'fadeIn');
        item.style.display = 'block';
        counter++;
      }
    });

    if (counter === 0) {
      noImgItem.style.display = 'block';
      noImgItem.classList.add('animated', 'fadeIn');
    }

    setTimeout(() => { // ВИДАЛЕННЯ КЛАСІВ АНІМАЦІЇ ПІСЛЯ ТОГО ЯК ВОНИ ЗАСТОСУВАЛИСЯ (БУВ БАГ ПРИ КЛІКУ, У ЕЛЕМЕНТІВ КОТРІ БУЛИ ПРИСУТНІ В ПОПЕРЕДНЬОМУ ФІЛЬТРІ НЕ ЗАСТОСОВУВАЛАСЬ АНІАЦІЯ)
      ImgItem.forEach(item => {
        item.classList.remove('animated', 'fadeIn');
      });
      noImgItem.classList.remove('animated', 'fadeIn');
    }, 700);
  }
};
export default filter;