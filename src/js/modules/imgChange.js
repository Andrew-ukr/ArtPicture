const imgChange = () => {
  const item = document.querySelectorAll('.sizes-block');

  item.forEach(elem => {
    elem.addEventListener('mouseover', () => {
      const itemElem = elem.querySelectorAll('p:not(.sizes-hit)').forEach(element => {
        element.style.display = 'none';
        element.classList.remove('animated', 'fadeIn');
      });

      const itemImg = elem.querySelector('img');
      itemImg.classList.add('animated', 'fadeIn');
      itemImg.src = itemImg.src.slice(0, -4) + "-1.png";
    });
    
    elem.addEventListener('mouseout', () => {
      const itemElem = elem.querySelectorAll('p:not(.sizes-hit)').forEach(element => {
        element.style.display = 'block';
        element.classList.add('animated', 'fadeIn');
      });

      const itemImg = elem.querySelector('img');
      itemImg.classList.remove('animated', 'fadeIn');
      itemImg.src = itemImg.src.slice(0, -6) + ".png";
    });
  });
};

export default imgChange;