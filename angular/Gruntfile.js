module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.initConfig({
        webapp: 'webapp',
        wiredep: {
            target: {
                src: '<%= webapp%>/index.html'
            }
        }
    });
};
