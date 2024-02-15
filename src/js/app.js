import barba from '@barba/core';
import barbaCss from '@barba/css';
import './line1.js'
import './line2.js'
import './line3.js'
import loader from './line1.js'
import loader2 from './line1.js'
import loader3 from './line1.js'

// tell Barba to use the css plugin
barba.use(barbaCss);

// set background before everything to mantain a coherent bg color during transitions

/* barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', 'background');
}); */

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
    afterEnter() {
      barba.hooks.after(() => {
        loader();
        loader2();
        loader3();
      });
    }
  }]
});
