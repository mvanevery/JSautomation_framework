const project = process.argv.filter((argument) => {
  return argument.match(/--archon/);
});

const test = process.argv.filter((argument) => {
  return argument.match(/--test/);
});

const client = process.argv.filter((argument) => {
  return argument.match(/--client/);
});

const projectIndex = process.argv.indexOf(project[0]);
const testIndex = process.argv.indexOf(test[0]);
const clientIndex = process.argv.indexOf(client[0]);

module.exports = {
  project: !!project[0] ? process.argv[projectIndex].replace(/--archon:/, '') : 'rutt roh',
  test: !!test[0] ? process.argv[testIndex].replace(/--test:/, '') : 'no test defined',
  client: !!client[0] ? process.argv[clientIndex].replace(/--client:/, '') : 'appium'
};
