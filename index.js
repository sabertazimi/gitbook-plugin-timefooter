// var path = require('path');

var nodegit = require('nodegit');
// var moment = require('moment');

module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function (page) {
      // var _label = 'File Modify: ';
      // var _format = 'YYYY-MM-DD HH:mm';
      // var _copy = 'powered by Gitbook';

      // if (this.options.pluginsConfig['timefooter']) {
      //   _label = this.options.pluginsConfig['timefooter']['modify_label'] || _label;
      //   _format = this.options.pluginsConfig['timefooter']['modify_format'] || _format;

      //   var _c = this.options.pluginsConfig['timefooter']['copyright'];
      //   _copy = _c ? _c + ' all right reserved，' + _copy : _copy;
      // }

      // var historyFile = this.book.config.get('root', '') + page.path;
      // var repo;
      // console.log(historyFile);
      return page;

      // return nodegit.Repository.open(path.resolve('./.git'))
      //   .then(function (r) {
      //     repo = r;
      //     return repo.getMasterCommit();
      //   })
      //   .then(function (firstCommitOnMaster) {
      //     var walker = repo.createRevWalk();
      //     walker.push(firstCommitOnMaster.sha());
      //     walker.sorting(nodegit.Revwalk.SORT.Time);

      //     return walker.fileHistoryWalk(historyFile, 2);
      //   })
      //   .then((resultingArrayOfCommits) => {
      //     moment.locale();
      //     var dateStr = moment().format(_format);

      //     if (resultingArrayOfCommits.length > 0) {
      //       var commit = resultingArrayOfCommits[0].commit;
      //       var date = commit.date();
      //       dateStr = moment(date).format(_format);
      //     }

      //     _copy = '<span class="copyright">' + _copy + '</span>';
      //     var str = ' \n\n<footer class="page-footer">' + _copy +
      //       '<span class="footer-modification">' + _label +
      //       '\n' + dateStr + '\n</span></footer>';
      //     page.content = page.content + str;
      //     return page;
      //   });
    }
  }
};
