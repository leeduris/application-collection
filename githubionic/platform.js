module.exports = {
    id: 'browser',
    cordovaVersion: '3.4.0',

    bootstrap: function() {

        var modulemapper = require('cordova/modulemapper');
        var channel = require('cordova/channel');

        modulemapper.clobbers('cordova/exec/proxy', 'cordova.commandProxy');

        channel.onNativeReady.fire();

        // FIXME is this the right place to clobber pause/resume? I am guessing not
        // FIXME pause/resume should be deprecated IN CORDOVA for pagevisiblity api
        document.addEventListener('webkitvisibilitychange', function() {
            if (document.webkitHidden) {
                channel.onPause.fire();
            }
            else {
                channel.onResume.fire();
            }
        }, false);

    // End of bootstrap
    }
};
