module.exports = function(grunt) {

grunt.initConfig({
    bower: {
        install: {
            options: {
                targetDir: './public/vendor',
                layout: 'byComponent',
                install: true,
                verbose: true,
                cleanBowerDir: true
            }
        }
    }
});

grunt.loadNpmTasks('grunt-bower-task');

grunt.registerTask("bower-install", [ "bower-install-simple" ]);
};
