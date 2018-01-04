module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      haml: {
        files: ['**/*.haml'],
        tasks: ['newer:haml'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['src/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      }
    },

    sass: {
      dist: {
        options: {
         style: 'expanded'
       },
        files: {
          'dist/stylekit.css': 'src/main.scss'
        }
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml2html');

  grunt.registerTask('default', ['sass', 'haml']);
};
