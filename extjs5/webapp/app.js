/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name : 'extjs5',

    extend : 'extjs5.Application',

    autoCreateViewport : 'extjs5.view.main.Main',

    // -------------------------------------------------------------------------
    // Most customizations should be made to extjs5.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    // -------------------------------------------------------------------------

    appProperty : 'app',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    onUnmatchedRoute: function(hash) {
        console.log('Invalid route: ' + hash);
    }
});
