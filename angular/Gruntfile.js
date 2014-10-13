module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        appDir: 'app',
        buildDir: 'dist',
        wiredep: {
            target: {
                src: '<%=appDir%>/index.html'
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ["<%=appDir%>/scripts/**/*.js"]
        },
        less: {
            options: {
                paths: ['<%=appDir%>/resources/less']
            },
            dev: {
                files: {
                    '<%=appDir%>/resources/styles.css': '**/*/styles.less'
                }
            },
            prod: {
                options: {
                    compress: true
                },
                files: {
                    '<%=buildDir%>/resources/styles.css': '**/*/styles.less'
                }
            }
        },
        copy: {
            prod: {
                files: {
                    '<%=buildDir%>/index.html': '<%=appDir%>/index.prod.html'
                }
            }
        },
        concat: {
            prod: {
                files: {
                    '<%=buildDir%>/scripts/app-all.js': '<%=appDir%>/scripts/**/*.js'
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            prod: {
                files: {
                    '<%=buildDir%>/scripts/app-all.js': '<%=buildDir%>/scripts/app-all.js'
                }
            }
        },
        uglify: {
            prod: {
                files: {
                    '<%=buildDir%>/scripts/app-all.min.js': '<%=buildDir%>/scripts/app-all.js'
                }
            }
        },
        clean: {
            target: {
                src: '<%=buildDir%>'
            }
        }
    });

    grunt.registerTask('default', ['clean', 'jshint', 'less:prod', 'copy', 'concat', 'ngAnnotate', 'uglify']);
};
