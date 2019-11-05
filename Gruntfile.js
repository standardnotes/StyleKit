module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      haml: {
        files: ['**/*.haml'],
        tasks: ['newer:haml'],
        options: {
          spawn: false,
        },
      }
    },

    haml: {
      dist: {
        expand: true,
        ext: '.html',
        extDot: 'last',
        src: ['**/*.haml'],
        dest: './',
        rename: function (dest, src) {
          return dest + src.replace(".html", "");
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-haml2html');

  grunt.registerTask('default', ['haml']);
};
