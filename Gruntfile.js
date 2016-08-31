"use strict";

module.exports = function(grunt) {

	grunt.loadNpmTasks('devx-grunt');

	grunt.registerTask('default', [
		'devx-lint',
		'clean',
		'devx-build'
	]);

};