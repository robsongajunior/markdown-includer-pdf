(function markdownIncluder() {
	'use stric';

	var fs = require('fs'),
		markdownpdf = require('markdown-pdf'),
		exp = /\@import ?(.*?) ?\@/g,
		mainTXT,
		arrayWholeMatch = [],
		arrayPath = [];


	var rl = function(file) {
		return fs.readFileSync(file).toString();
	};

	var getInclude = function(txt) {
		txt.replace(exp, function(wholeMatch, path) {
			arrayWholeMatch.push(wholeMatch);
			arrayPath.push(path);
		});
	};

	var loopReplace = function(arrWhole, arrPath) {
		var arrLen = arrWhole.length - 1;
		for (var i = 0; i <= arrLen; i++) {
			mainTXT = mainTXT.replace(arrayWholeMatch[i], rl(arrayPath[i]));
			console.log('# Included: ' + arrayPath[i]);
		};

		arrayWholeMatch = [];
		arrayPath = [];

		getInclude(mainTXT);

		arrLen = arrayWholeMatch.length - 1;
		if (arrLen >= 0) {
			loopReplace(arrayWholeMatch, arrayPath);
		}
	};

	var verifyDirectory = function(dir) {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			console.log('# CREATED DIRECTORY: ' + dir);
		}
	};

	mainTXT = rl('README.md'),
	getInclude(mainTXT);
	loopReplace(arrayWholeMatch, arrayPath);

	verifyDirectory('doc-pdf');
	markdownpdf().from.string(mainTXT).to('doc-pdf/project.pdf', function() {
		console.log('# CREATED: project.pdf');
	});
})();