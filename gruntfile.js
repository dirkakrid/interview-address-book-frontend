module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
       connect: {
           server: {
               options: {
                   livereload: true,
                   port: 8888,
                   base: './client',
                   middleware: function (connect, options) {
                       console.log(options.base);
                       var serveStatic = require('serve-static');
                       var server = require('./server/api.js');
                       var app = connect();
                       /*
                        // Proxy all requests to target the local application.
                        var proxyOptions = require('url').parse('http://localhost:3000');
                        proxyOptions.route = '/api';
                        */
                        return [
                            //require('proxy-middleware')(proxyOptions), // Include the proxy first.
                            app.use(serveStatic(options.base[0])), // Serve static files.
                            app.use("/api", function (req, res) {
                                server.server.emit('request', req, res);
                            }),
                        ];
                }
               },
        }
       },
       watch: {
            options: {
                livereload: true
            },
            dist: {
                files: ['client/**/*'],
                tasks: []
            },
        }
   });


   grunt.registerTask('default', ['connect', 'watch:dist']);
};
