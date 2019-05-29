module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        banner: '/* EFP Unofficial discount calculator */\n'
      },
      dist: {
        files: {
          'js/app.js' : 'js/calculator.js'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);

};
