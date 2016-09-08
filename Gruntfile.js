"use strict";

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-sapui5-bestpractice-build');

	grunt.registerTask('default', [
		'lint',
		'clean',
		'build'
	]);

};