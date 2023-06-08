gsap.registerPlugin(ScrollTrigger, ScrollSmoother); // регистрация плагинов в gsap

// является ли устройство НЕ мобильным
if (ScrollTrigger.isTouch !== 1) {
  // Плавный скролл
  ScrollSmoother.create({
    wrapper: '.wrapper', // оболочка для скролла
    content: '.content', // плавающая оболочка
    smooth: 1.5, // скорость скроллинга
    effects: true, // эффекты (включает возможность указывать эффекты скролла любому блоку)
    // data-speed - скорость скроллинга
    // data-lag - скорость отставания от скроллинга
  });

  // Анимация блока header (opacity)
  gsap.fromTo(
    '.header',
    {
      opacity: 1,
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.header', // элемент триггера
        start: 'center', // начинать анимацию, когда элемент наход. в центре
        end: '820',
        scrub: true, // включает возвращение предыдущего значения
      },
    }
  );

  // Анимация для множества элементов
  const GALLERY_LEFT_ITEMS = gsap.utils.toArray('.gallery__left .gallery__item');
  GALLERY_LEFT_ITEMS.forEach((item) => {
    gsap.fromTo(
      item,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: '-850',
          end: '-100',
          scrub: true,
        },
      }
    );
  });

  const GALLERY_RIGHT_ITEMS = gsap.utils.toArray('.gallery__right .gallery__item');
  GALLERY_RIGHT_ITEMS.forEach((item) => {
    gsap.fromTo(
      item,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: '-750',
          end: 'top',
          scrub: true,
        },
      }
    );
  });
}
