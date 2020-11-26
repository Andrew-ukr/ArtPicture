const modals = () => {
  let scrollWidth;
  let modalTimer;
  let giftBtn = document.querySelector('.fixed-gift');

  function openModal(btnClass, modalPopupClass, closeBtnClass, overlayClose, destroy) {
    let btn = document.querySelectorAll(btnClass);
    let modalPopup = document.querySelector(modalPopupClass);
    let closeBtn = document.querySelector(closeBtnClass);
    let allModalWindows = document.querySelectorAll(`[data-moadl]`);


    btn.forEach(element => {
      element.addEventListener('click', (e) => {
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
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
        giftBtn.style.marginRight = `${scrollWidth}px`;
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
      document.body.style.marginRight = ``;
    });

    modalPopup.addEventListener('click', (e) => {
      if (e.target === modalPopup && !overlayClose) {
        modalPopup.style.display = 'none';
        document.body.style.overflow = '';
        giftBtn.style.marginRight = ``;
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
      document.querySelector(modalPopupClass).style.display = 'block';
      document.body.style.marginRight = `${scrollWidth}px`;
      giftBtn.style.marginRight = `${scrollWidth}px`;
      document.body.style.overflow = 'hidden';
    }, time);
  }

  modalMR();
  openModal('.button-design', '.popup-design', '.popup-design .popup-close');
  openModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  openModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', false , true);

  callModalTimer('.popup-consultation', 3000);

};

export default modals;