const modals = () => {
  let scrollWidth;
  let modalTimer;
  let giftBtn = document.querySelector('.fixed-gift');
  const up = document.querySelector('.pageup');

  let counterOpenModal = false;

  function openModal(btnClass, modalPopupClass, closeBtnClass, overlayClose, destroy) {
    let btn = document.querySelectorAll(btnClass);
    let modalPopup = document.querySelector(modalPopupClass);
    let closeBtn = document.querySelector(closeBtnClass);
    let allModalWindows = document.querySelectorAll(`[data-modal]`);

    btn.forEach(element => {
      element.addEventListener('click', (e) => {

        counterOpenModal = true;
        if (destroy) {
          giftBtn.remove();
        }

        if (e.target) {
          e.preventDefault();
        }

        allModalWindows.forEach(item => {
          item.style.display = 'none';
        });

        modalPopup.style.display = 'block';
        modalPopup.classList.add('animated', 'fadeIn');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
        giftBtn.style.marginRight = `${scrollWidth}px`;
        up.style.marginRight = `${scrollWidth}px`;
        clearTimeout(modalTimer);
      });
    });

    closeBtn.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }
      modalPopup.style.display = 'none';
      document.body.style.overflow = '';
      giftBtn.style.marginRight = ``;
      up.style.marginRight = ``;
      document.body.style.marginRight = ``;
    });

    modalPopup.addEventListener('click', (e) => {
      if (e.target === modalPopup && !overlayClose) {
        modalPopup.style.display = 'none';
        document.body.style.overflow = '';
        giftBtn.style.marginRight = ``;
        up.style.marginRight = ``;
        document.body.style.marginRight = ``;
      }
    });
  }

  function modalMR() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
  }

  function callModalTimer(modalPopupClass, time) {
    modalTimer = setTimeout(() => {
      document.querySelector(modalPopupClass).classList.add('animated', 'fadeIn');
      document.querySelector(modalPopupClass).style.display = 'block';
      document.body.style.marginRight = `${scrollWidth}px`;
      giftBtn.style.marginRight = `${scrollWidth}px`;
      document.body.style.overflow = 'hidden';
      counterOpenModal = true;
    }, time);
  }


  function scrollModal(params) {
    window.addEventListener('scroll', () => {
      if (!counterOpenModal && document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight <= 100) {
        console.log('ddddd');
        document.querySelector(params).click();
      }
    });
  }



  modalMR();
  openModal('.button-design', '.popup-design', '.popup-design .popup-close');
  openModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  openModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', false, true);
  scrollModal('.fixed-gift');
  callModalTimer('.popup-consultation', 300000);

};

export default modals;