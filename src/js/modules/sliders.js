const sliders = (sliderContainer, sliderItems, nextBtn, prevBtn, interval) => {
  let sliderIndex = 1;
  let sliderItem = document.querySelectorAll(sliderItems);
  let sliderArea = document.querySelector(sliderContainer);
  let autoPlay;

  function startAutoPlay() {
    autoPlay = setInterval(() => {
      sliderIndex++;
      if (sliderIndex > sliderItem.length) {
        sliderIndex = 1;
      }
      showSlider(sliderIndex);
    }, interval);
  }

  function showSlider(i) {
    sliderItem.forEach((element) => {
      element.style.display = 'none';
    });
    sliderItem[i - 1].style.display = 'block';
    sliderItem[i - 1].classList.add('animated', 'fadeIn');
  }

  function changeSliderItem() {
    sliderArea.addEventListener('click', (e) => {
      if (e.target && e.target.parentNode.classList.contains(nextBtn)) {
        sliderIndex++;
        if (sliderIndex > sliderItem.length) {
          sliderIndex = 1;
        }
        showSlider(sliderIndex);
      }
      if (e.target && e.target.parentNode.classList.contains(prevBtn)) {
        sliderIndex--;
        if (sliderIndex < 1) {
          sliderIndex = sliderItem.length;
        }
        showSlider(sliderIndex);
      }
    });
  }

  function stopAutoPlay() {
    sliderArea.addEventListener('mouseover', () => {
      clearInterval(autoPlay);
    });
    sliderArea.addEventListener('mouseout', () => {
      startAutoPlay();
    });
  }

  showSlider(sliderIndex);
  changeSliderItem();
  startAutoPlay();
  stopAutoPlay();
};
export default sliders;