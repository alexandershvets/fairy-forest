gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
  });
}

const LAYERS = document.querySelectorAll('[data-prlx]');

window.addEventListener('scroll', function (e) {
  // console.log(this.scrollY);
  LAYERS.forEach((layer) => {
    const prlxSpeed = layer.dataset.prlxSpeed ?? 1;
    const coordY = this.scrollY / prlxSpeed;

    layer.style.transform = `translate3d(0, ${coordY}px, 0)`;
  });
});
