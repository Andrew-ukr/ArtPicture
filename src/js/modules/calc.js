const calc = () => {
  const sizeSelector = document.querySelector('#size');
  const materialSelector = document.querySelector('#material');
  const optionsSelector = document.querySelector('#options');
  const promocodeSelector = document.querySelector('.promocode');
  const calcPrice = document.querySelector('.calc-price');

  function calcSum() {
    let result;
    if (sizeSelector.value === '0' || materialSelector.value === '0') {
      calcPrice.textContent = 'Для розрахунку обовязково необхідно вибрати розмір та матеріал';
    } else if (promocodeSelector.value === "IWANTPOPART") {
      result = (+sizeSelector.value * (+materialSelector.value + (+optionsSelector.value)) * 0.7);
      calcPrice.textContent = `Вартість картини ${Math.floor(result)} грн.`;
    } else {
      result = +sizeSelector.value * (+materialSelector.value + (+optionsSelector.value));
      calcPrice.textContent = `Вартість картини ${Math.floor(result)} грн.`;
    }
  }

  sizeSelector.addEventListener('change', calcSum);
  materialSelector.addEventListener('change', calcSum);
  optionsSelector.addEventListener('change', calcSum);
  promocodeSelector.addEventListener('change', calcSum);
};
export default calc;