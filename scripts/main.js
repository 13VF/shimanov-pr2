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
  classes: {
    arrow : 'splide__arrow my-class-arrow',
  },
  pagination: false,
  gap: '-50px'
}).mount();