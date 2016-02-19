module.exports = function(grunt) {
require('jit-grunt')(grunt);
  // Project configuration.
  grunt.initConfig({

	less: {

		development: {
                     options: {
		// 				 compress: true,
		//  yuicompress: true,
		 optimization: 2
                     },
                     files: {
						 "css/freelancer.css": "less/freelancer.less",
						 "css/bootstrap.css": "less/mixins.less",
				 	}
                 },
	},
	watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
