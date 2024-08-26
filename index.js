const footer = document.querySelector('footer');
    let isFooterVisible = false; // Флаг для отслеживания видимости футера

    // Проверяем, когда пользователь доскроллил до конца страницы
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      if (scrollPosition >= pageHeight) {
        // Доскроллили до конца, показываем футер
        if (!isFooterVisible) {
          footer.classList.add('visible');
          isFooterVisible = true;
        }
      } else {
        // Скроллили чуть выше, скрываем футер
        if (isFooterVisible) {
          footer.classList.remove('visible');
          isFooterVisible = false;
        }
      }
    });


    const burgerButton = document.querySelector('.burger-btn');
    const popup = document.getElementById('burger-popup');
    const closeButton = document.querySelector('.close-button');

    burgerButton.addEventListener('click', () => {
      popup.classList.toggle('open');
    });

    closeButton.addEventListener('click', () => {
      popup.classList.remove('open');

    });
