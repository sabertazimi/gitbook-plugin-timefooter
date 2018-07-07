var path = require('path');

var Git = require('nodegit');
var moment = require('moment');

module.exports = function (book, page) {
        var _copy = 'powered by Gitbook';
        var _label = 'File Modify: ';
        var _format = 'YYYY-MM-DD HH:mm';
        var config = book.config.get('pluginsConfig')['timefooter'];

        if (config) {
            var _c = config.copyright;

            _copy = _c ? _c + ' all right reserved，' + _copy : _copy;
            _label = config.modify_label || _label;
            _format = config.modify_format || _format;
        }

        var historyFile = book.config.get('root', '') + page.path;
        var repo;
        console.log(historyFile);

        return Git.Repository.open(path.resolve('./.git'))
            .then(function (r) {
                repo = r;
                return repo.getMasterCommit();
            })
            .then(function (firstCommitOnMaster) {
                var walker = repo.createRevWalk();
                walker.push(firstCommitOnMaster.sha());
                walker.sorting(Git.Revwalk.SORT.Time);

                return walker.fileHistoryWalk(historyFile, 2);
            })
            .then((resultingArrayOfCommits) => {
                moment.locale();
                var dateStr = moment().format(_format);

                if (resultingArrayOfCommits.length > 0) {
                    var commit = resultingArrayOfCommits[0].commit;
                    var date = commit.date();
                    dateStr = moment(date).format(_format);
                }

                _copy = '<span class="copyright">' + _copy + '</span>';
                var str = ' \n\n<footer class="page-footer">' + _copy +
                    '<span class="footer-modification">' + _label +
                    '\n' + dateStr + '\n</span></footer>';
                page.content = page.content + str;
                return page;
            });
}