// появление footer когда доскроливаем до низа страницы//

const body = document.body;


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

    
    //открытие / закрытие попапа nav-display при адаптивном экране//

    const burgerButton = document.querySelector('.burger-btn');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-button');
    

    burgerButton.addEventListener('click', () => {
      popup.classList.toggle('open');
      document.body.style.overflow = 'hidden'; 
    });


    closeButton.addEventListener('click', () => {
      popup.classList.remove('open');
      document.body.style.overflow = 'auto';
    });



// открытие / закрытие попапа form-message//

    const messageBtn = document.querySelector('.message-btn');
    const popupMessage = document.querySelector('.message-popup');
    const closeMessageBtn = document.querySelector('.close-message-btn');
    const overlay = document.querySelector('.message-popup-overlay');

    messageBtn.addEventListener('click', () => {
      popupMessage.classList.toggle('open');
      popupMessage.style.display = 'block';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });


    closeMessageBtn.addEventListener('click', () => {
      closePopup(); // Используем функцию для закрытия попапа
    });

    overlay.addEventListener('click', () => {
      closePopup(); // Используем функцию для закрытия попапа
    });

    function closePopup() {
      popupMessage.style.display = 'none';
      overlay.style.display = 'none';
      body.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    // появление клавиши для поднятия (области видимости) страницы вверх//

    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block'; 
      } else {
        backToTopButton.style.display = 'none'; 
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });

// изменение значения (bottom) для кнопок чтобы не заезжали на footer//
    window.addEventListener('scroll', () => {
      const remainingHeight = document.body.scrollHeight - window.pageYOffset - window.innerHeight;
    
      if (remainingHeight <= 20) {
        messageBtn.style.bottom = '135px',
        messageBtn.style.transition = 'bottom 300ms ease-in-out'; 
      } else {
        messageBtn.style.bottom = '20px',
        messageBtn.style.transition = 'bottom 300ms ease-in-out';
      }

      if (remainingHeight <= 20) {
        backToTopButton.style.bottom = '135px',
        backToTopButton.style.transition = 'bottom 300ms ease-in-out'; 
      } else {
        backToTopButton.style.bottom = '20px',
        backToTopButton.style.transition = 'bottom 300ms ease-in-out';
      }

  });


  // swipe popup burger left //
  

  const burgerBtn = document.querySelector('.burger-btn');
  const menuContent = document.querySelector('.menu-content');
  //const popup = document.querySelector('.popup');
  //const closeButton = document.querySelector('.close-button');

  let startX = 0;
  let isDragging = false;

  // Открытие попапа при клике на кнопку "бургер"
  burgerBtn.addEventListener('click', () => {
    popup.classList.add('open');
    menuContent.style.transform = 'translateX(0)'; // Сбрасываем transform 
    document.body.style.overflow = 'hidden';
  });

  // Закрытие попапа по клику на кнопку "Закрыть"
  closeButton.addEventListener('click', () => {
    popup.classList.remove('open'); 
    menuContent.style.transform = 'translateX(0)'; 
  });

  // Свайп для закрытия попапа
  menuContent.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
    document.body.style.overflow = 'auto';
  });

  menuContent.addEventListener('touchmove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;

    if (deltaX < 0) {
      menuContent.style.transform = `translateX(${deltaX}px)`;
    }
  });

  menuContent.addEventListener('touchend', (event) => {
    isDragging = false;
    const currentX = event.changedTouches[0].clientX;
    const deltaX = currentX - startX;

    if (deltaX < -100) {
      menuContent.style.transform = 'translateX(-100%)';
      popup.classList.remove('open'); 
    } else {
      menuContent.style.transform = 'translateX(0)'; 
      startX = 0; 
    }
  });