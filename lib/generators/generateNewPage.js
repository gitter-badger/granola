var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var print = require('../utils/print');
var packageInfo = require('../../package.json');
var renderFileTemplate = require('../utils/renderFileTemplate');


module.exports = function(args){

		var name = args[0];
		var outputPath = path.resolve(process.cwd(), 'views/pages');
		var outputFile = path.resolve(outputPath, name + 'View.jsx');

		if(!name){
				print('red', 'You need to give a page a name this should be the first arguments');
				process.exit();
		}

		//if theres no services folder
		if(!fs.existsSync(outputPath)){
				print();
				print('red', 'Lamesource:');
				print('red', '- Derp, Looks like you dont have a views/pages folder.');
				print('red', '- Have you generated a new application?');
				print('red', '- Try %s -g -a { app-name } { folder-path }', packageInfo.name);
				print();
				process.exit();
		}

		//render template
		renderFileTemplate(
			path.resolve(__dirname, '../templates/page.js.tmpl'),//src
			outputFile,
			{ name: name }
		);

};