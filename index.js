var footer = require('./assets/plugin.js');

module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function (page) {
      return footer(this, page);
    }
  }
};
