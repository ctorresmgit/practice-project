module.exports = function(grunt) {
  grunt.initConfig({
    //Concatenar archivos
    concat: {
      vendor: { //Librerias
        options: {
          separator: ''
        },
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-aria/angular-aria.min.js',
          'bower_components/angular-animate/angular-animate.min.js',
          'bower_components/angular-sanitize/angular-sanitize.min.js',
          'bower_components/ngstorage/ngStorage.min.js',
          'bower_components/angular-messages/angular-messages.min.js',
          'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/parsleyjs/dist/parsley.min.js',
          'bower_components/parsleyjs/dist/i18n/es.js',
          'bower_components/angular-ui-notification/dist/angular-ui-notification.min.js',
          'bower_components/cropper/dist/cropper.min.js',
          'bower_components/select2/dist/js/select2.min.js',
          'bower_components/angular-ui-select2/src/select2.js',
          'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
          'bower_components/cropper/dist/cropper.min.js',
          'bower_components/push.js/push.min.js',
          'bower_components/owl.carousel/dist/owl.carousel.min.js',
          'bower_components/medium-editor/dist/js/medium-editor.min.js',
          'bower_components/angular-medium-editor/dist/angular-medium-editor.min.js',
          'bower_components/ngprogress/build/ngprogress.min.js',
          'bower_components/sweetalert/dist/sweetalert.min.js',
          'bower_components/ngSweetAlert/SweetAlert.min.js',
          'node_modules/socket.io-client/dist/socket.io.js',
          'app/script/vendor/parsley/parsley.es.js',
          'app/script/vendor/parsley/parsley-extra-validators/parsley-fields-comparison-validators.js',
        ],
        dest: "dist/app/js/vendor.js"
      },
      app: { //App
        options: {
          separator: ''
        },
        src: [
          'app/script/app.min.js',
          'app/script/routes.min.js',
          'app/script/services.min.js',
          'app/script/directives.min.js',
          'app/script/controllers/nav.directive.min.js',
          'app/script/controllers/headerCtrl.min.js',
          'app/script/controllers/loginCtrl.min.js',
          'app/script/controllers/supportCtrl.min.js',
          'app/script/controllers/usersCtrl.min.js',
          'app/script/controllers/profileCtrl.min.js',
          'app/script/controllers/clientCtrl.min.js',
          'app/script/controllers/cpanelCtrl.min.js',
        ],
        dest: "dist/app/js/app.js"
      },
      css: { //Styles
        options: {
          separator: ''
        },
        src: [
          'bower_components/font-awesome/css/font-awesome.min.css',
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
          'bower_components/angular-ui-notification/dist/angular-ui-notification.min.css',
          'bower_components/cropper/dist/cropper.min.css',
          'bower_components/select2/dist/css/select2.min.css',
          'bower_components/parsleyjs/src/parsley.css',
          'bower_components/ngprogress/ngProgress.css',
          'bower_components/cropper/dist/cropper.min.css',
          'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
          'bower_components/medium-editor/dist/css/medium-editor.min.css',
          'bower_components/medium-editor/dist/css/themes/beagle.min.css',
          'bower_components/sweetalert/dist/sweetalert.css',
          'app/template/main.css',
          'app/template/ui.min.css',
          'app/css/reset.css',
          'app/css/zonasafe/login.css',
          'app/css/main.css',
        ],
        dest: "dist/app/css/style.css"
      }
    },
    //MInificar html
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'index.html',

          'dist/app/views/error/403.html': 'app/views/error/403.html',
          'dist/app/views/error/404.html': 'app/views/error/404.html',
          'dist/app/views/error/500.html': 'app/views/error/500.html',
          'dist/app/views/layout/header.html': 'app/views/layout/header.html',
          'dist/app/views/layout/menu.html': 'app/views/layout/menu.html',
          'dist/app/views/clientes.html': 'app/views/clientes.html',
          'dist/app/views/cpanel.html': 'app/views/cpanel.html',
          'dist/app/views/login.html': 'app/views/login.html',
          'dist/app/views/profile.html': 'app/views/profile.html',
          'dist/app/views/responder.html': 'app/views/responder.html',
          'dist/app/views/support.html': 'app/views/support.html',
          'dist/app/views/users.html': 'app/views/users.html',
        }
      },
    },
    //Copiar archivos
    copy: {
      main: {
        files: [{
            expand: true,
            src: ['app/icons/**'],
            dest: 'dist/',
          },
          {
            expand: true,
            src: ['app/imagen/**'],
            dest: 'dist/',
          },
          {
            expand: true,
            src: ['app/uploads/**'],
            dest: 'dist/',
          },
          {
            expand: true,
            flatten: true,
            src: ['favicon.ico'],
            dest: 'dist'
          },
          {
            expand: false,
            flatten: true,
            src: ['.htaccess'],
            dest: 'dist/.htaccess',
            filter: 'isFile' //Solo archivos
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/font-awesome/fonts/**'],
            dest: 'dist/app/fonts/',
            filter: 'isFile' //Solo archivos
          },
          {
            expand: true,
            src: ['server/**'],
            dest: 'dist/',
          },
          {
            expand: false,
            flatten: true,
            src: ['server.js'],
            dest: 'dist/server.js',
            filter: 'isFile' //Solo archivos
          },
        ],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['concat', 'htmlmin', 'copy']);
};
