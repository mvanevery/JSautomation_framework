var selenium = require('selenium-standalone');

// Think about using environment variables to differentiate bamboo from local so bamboo points to that global install
// Weird that selenium.start will run but one inside the child process is undefined

selenium.start(function(err, child) {
	console.log(err);
	child.stderr.on('data', function(data){
		console.log(data.toString());
	});
});
