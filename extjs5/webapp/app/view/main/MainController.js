/**
 * This class is the main view for the application. It is specified in app.js as the "autoCreateViewport" property. That
 * setting automatically applies the "viewport" plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('extjs5.view.main.MainController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.main',

    routes: {
        'main': 'onMain',
        'entry/:id': {
            before: 'beforeEntry',
            action: 'onEntry',
            conditions: {
                ':id': '([0-9]+)'
            }
        }
    },

    onRefreshButton : function() {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm : function(choice) {
        if (choice === 'yes') {
            this.getViewModel().set('firstName', 'Sariel');
        }
    },

    onMain: function() {
    },

    beforeEntry: function(id, action) {
        console.log('Checking entry id: ' + id);
        action.resume();
    },

    onEntry: function(id) {
        console.log('Entry id: ' + id);
    }
});
