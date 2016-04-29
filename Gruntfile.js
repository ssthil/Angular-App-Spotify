module.exports = function(grunt) {

	grunt.initConfig({

		pkg:grunt.file.readJSON('package.json'),
		connect: {
	      prototype: {
	        port: 5700
	      }
	    }

	});
	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', ['connect']);

};