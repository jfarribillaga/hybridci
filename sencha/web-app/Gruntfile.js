//https://github.com/gruntjs/grunt-contrib-jasmine
module.exports = function(grunt) {
  grunt.initConfig({
      jasmine: {
        pivotal: {
          src: 'app/app/**/*.js',
          options: {
            keepRunner: true, //Prevents the auto-generated specfile used to run your tests from being automatically deleted.
            vendor: [
              'app/touch/sencha-touch-all-debug.js'
            ],
            specs: [
              'tests/unit/spec/view/*Spec.js',
              'tests/unit/spec/controller/*Spec.js',
              'tests/unit/spec/model/*Spec.js'
            ],
            helpers: 'tests/unit/spec/**/*Helper.js'
          }
        }
      }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', ['jasmine']);
};
