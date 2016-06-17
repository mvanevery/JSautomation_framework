const project = process.argv.filter((argument) => {
  return argument.match(/--archon/);
});

const index = process.argv.indexOf(project[0]);

module.exports = {
  project: !!project[0] ? process.argv[index].replace(/--archon:/, '') : 'rutt roh'
};
