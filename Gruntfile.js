'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        "bower-install-simple": {
            options: {
                color: true,
                directory: "lib"
            },
            "prod": {
                options: {
                    production: true
                }
            },
            "dev": {
                options: {
                    production: false
                }
            }
        }
    });
    grunt.registerTask("bower-install", [ "bower-install-simple" ]);
};
