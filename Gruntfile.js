
module.exports = function(grunt){

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        // uglify : {
        //     options : {
        //         banner : ''
        //     },
        //     build : {
        //         src : '',
        //         dest : ''
        //     }
        // },
        concat: {
            basic: {
              src: ['js/*.js'],
              dest: 'app/script/todolist.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //default tasks
    grunt.registerTask('default', ['concat']);
}