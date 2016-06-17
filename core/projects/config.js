var project = process.argv.filter(function (el, i) {
  return el.match(/--archon/);
});

var index = process.argv.indexOf(project[0]);

module.exports = {
  project: !!project[0] ? process.argv[index].replace(/--archon\:/, '') : 'rutt roh'
};
