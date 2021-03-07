new Splide('#image-slider', {
  type: 'loop',
  pagination: false,
  classes: {
    arrow : 'splide__arrow my-class-arrow',
  }
}).mount();

new Splide('#image-slider-2', {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  classes: {
    arrow : 'splide__arrow my-class-arrow',
    prev  : 'splide__arrow--prev my-class-arrow-prev',
		next  : 'splide__arrow--next my-class-arrow-next',
  },
  pagination: false
}).mount();