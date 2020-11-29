const forms = (a) => {
  let form = document.querySelectorAll('form');
  let input = document.querySelectorAll('input[name="phone"]');

  input.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

  let massage = {
    sending: `Надсилання даних ...`,
    successfully: `Дані надіслані успішно`,
    unsuccessful: `Сталася помилка, спробуте ще раз`,
    sendingImg: 'assets/img/spinner.gif',
    successfullyImg: 'assets/img/ok.png',
    unsuccessfulImg: 'assets/img/fail.png',
  };
  let path;
  let imgInput = document.querySelectorAll('input[name="upload"]');
  let fileName;

  imgInput.forEach(elem => {
    elem.addEventListener('input', () => {
      fileName = elem.files[0].name;
      console.log(fileName);
      if (fileName.length > 10) {
        fileName = fileName.slice(0, 6) + '…';
      }
      elem.previousElementSibling.textContent = fileName;
    });
  });

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      let createMassageBlock = document.createElement('div');
      let creaateImgTag = document.createElement('img');
      let statusMassage = document.createElement('div');
      createMassageBlock.append(creaateImgTag);
      createMassageBlock.append(statusMassage);
      createMassageBlock.style.textAlign = 'center';

      statusMassage.textContent = massage.sending;
      creaateImgTag.setAttribute('src', massage.sendingImg);
      item.parentNode.append(createMassageBlock);
      item.style.display = 'none';

      function closeStatusMessage() {
        setTimeout(() => {
          createMassageBlock.remove();
          item.style.display = 'block';
        }, 5000);
      }

      const formData = new FormData(item);

      if (item.parentNode.parentNode.parentNode.classList.contains('popup-design') || item.parentNode.parentNode.classList.contains('row')) {
        path = 'assets/design.php';
      } else {
        path = 'assets/consultation.php';
      }
      
      if (item.getAttribute('data-calc') === '1') {
        for (const key in a) {
          formData.append(key, a[key]);
        }
      }

      fetch(path, {
          method: "POST",
          body: formData,
        }).then(data => data.text())
        .then(data => {
          console.log(path);
          console.log(data);
          statusMassage.textContent = massage.successfully;
          creaateImgTag.setAttribute('src', massage.successfullyImg);
        }).catch(() => {
          statusMassage.textContent = massage.unsuccessful;
          creaateImgTag.setAttribute('src', massage.unsuccessfulImg);
        }).finally(() => {
          closeStatusMessage();
          item.reset();
          imgInput.forEach(element => {
            element.previousElementSibling.textContent = 'Файл не выбран';
          });
        });
    });
  });
};
export default forms;