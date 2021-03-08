const windowWidth = window.innerWidth;

const splide1 = new Splide('#image-slider', {
  type: 'loop',
  pagination: false,
  classes: {
    arrow : 'splide__arrow my-class-arrow',
    prev  : 'splide__arrow--prev my-class-arrow-prev-1',
		next  : 'splide__arrow--next my-class-arrow-next-1',
  }
});

splide1.mount();

const splide2 = new Splide('#image-slider-2', {
  type: 'loop',
  pagination: false,
  perPage: windowWidth > 1200 ? 2 : 1,
  perMove: 1,
  classes: {
    arrow : 'splide__arrow my-class-arrow',
    prev  : 'splide__arrow--prev my-class-arrow-prev-2',
		next  : 'splide__arrow--next my-class-arrow-next-2',
  }
});

splide2.mount();

(function() {
  var throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
          if (running) { return; }
          running = true;
           requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
          });
      };
      obj.addEventListener(type, func);
  };

  throttle("resize", "optimizedResize");
})();

window.addEventListener("optimizedResize", function(event) {
  const windowWidth = event.target.innerWidth;

  splide2.options = { perPage: windowWidth > 1200 ? 2 : 1 };
});