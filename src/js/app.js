import barba from '@barba/core';
import barbaCss from '@barba/css';
import './line1.js'
import './line2.js'
import './line3.js'

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

// set background before everything to mantain a coherent bg color during transitions

/* barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', 'background');
}); */

barba.init({
  preventRunning: true,
  transitions: [
    {
      sync: false,
      name: 'home',
      to: { namespace: ['home'] },
      once() {
      },
      leave() {
      },
      enter() {
      },
    }, {
      sync: false,
      name: 'with-cover',
      to: { namespace: ['with-cover'] },
      leave() { },
      enter() { },
    },
  ],
});
