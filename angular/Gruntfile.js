module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        appDir: 'app',
        buildDir: 'dist',
        bowerDir: '<%=appDir%>/bower_components',
        wiredep: {
            options: {
                exclude: [/jquery.js/, /bootstrap.js/]
            },
            target: {
                src: '<%=appDir%>/index.html'
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['<%=appDir%>/scripts/**/*.js']
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
                files: [{
                    src: '<%=appDir%>/index.prod.html',
                    dest: '<%=buildDir%>/index.html'
                }, {
                    expand: true,
                    cwd: '<%=appDir%>/tpl/',
                    src: '**/*.html',
                    dest: '<%=buildDir%>/tpl'
                }]
            }
        },
        concat: {
            prod: {
                files: {
                    '<%=buildDir%>/scripts/app-all.js': '<%=appDir%>/scripts/**/*.js',
                    '<%=buildDir%>/scripts/vendor-all.js': ['<%=bowerDir%>/angular/angular.min.js',
                        '<%=bowerDir%>/angular-resource/angular-resource.min.js',
                        '<%=bowerDir%>/angular-bootstrap/ui-bootstrap-tpls.min.js',
                        '<%=bowerDir%>/angular-route/angular-route.min.js'
                    ],
                    '<%=buildDir%>/resources/styles.vendor.css': '<%=bowerDir%>/bootstrap/dist/css/bootstrap.min.css'
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
                    '<%=buildDir%>/scripts/app-all.min.js': '<%=buildDir%>/scripts/app-all.js',
                    '<%=buildDir%>/scripts/vendor-all.min.js': '<%=buildDir%>/scripts/vendor-all.js'
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            target: {
                src: '<%=buildDir%>'
            }
        }
    });

    grunt.registerTask('default', ['clean', 'jshint', 'less:prod', 'copy', 'concat', 'ngAnnotate', 'uglify']);
};
