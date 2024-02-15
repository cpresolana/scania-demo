import barba from '@barba/core';
import barbaCss from '@barba/css';
import loader from './line1.js'

loader();

// tell Barba to use the css plugin
barba.use(barbaCss);

// set background before everything to mantain a coherent bg color during transitions

/* barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', 'background');
}); */

barba.hooks.after(() => {
  loader();
});

barba.init({
  debug: true,
  transitions: [
    {
      sync: false,
      name: 'home',
      to: { namespace: ['home'] },
      once() { },
      leave() { },
      enter() { },
    }, {
      sync: false,
      name: 'with-cover',
      from: { namespace: ['with-cover'] },
      to: { namespace: ['with-cover'] },
      once() { },
      leave() { },
      enter() { },
    },
  ],
  views: [{
    namespace: 'with-cover',
    beforeEnter() {
      if (document.querySelector("#panorama") !== null) {
        pannellum.viewer('panorama', {
          "type": "equirectangular",
          "panorama": "images/line1_1.jpg",
          "autoLoad": true
        });
      }
    },
  }]
});
