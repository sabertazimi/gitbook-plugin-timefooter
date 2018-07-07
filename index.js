var moment = require('moment');
var path = require('path');

module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function (page) {
      var _label = 'File Modify: ';
      var _format = 'YYYY-MM-DD HH:mm';
      var _copy = 'powered by Gitbook';

      if (this.options.pluginsConfig['timefooter']) {
        _label = this.options.pluginsConfig['timefooter']['modify_label'] || _label;
        _format = this.options.pluginsConfig['timefooter']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['timefooter']['copyright'];
        _copy = _c ? _c + ' all right reserved，' + _copy : _copy;
      }

      var __page = page;
      var rootPath = this.book.config.get('root', './');
      console.log(rootPath);
      console.log(path.resolve(rootPath));
      console.log(this.book.resolve(rootPath));
      console.log(this.book.resolve(__page.path));

      var _copy = '<span class="copyright">' + _copy + '</span>';
      var str = ' \n\n<footer class="page-footer">' + _copy +
        '<span class="footer-modification">' +
        _label +
        '\n{{file.mtime | date("' + _format +
        '")}}\n</span></footer>';

      page.content = page.content + str;
      return page;
    }
  },
  filters: {
    date: function (d, format) {
      return moment(d).format(format);
    }
  }
};
