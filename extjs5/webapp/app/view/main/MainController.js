/**
 * This class is the main view for the application. It is specified in app.js as the "autoCreateViewport" property. That
 * setting automatically applies the "viewport" plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('extjs5.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'main': 'onMain',
        'main/:content': 'onContent',
        'entry/:id': {
            before: 'beforeEntry',
            action: 'onEntry',
            conditions: {
                ':id': '([0-9]+)'
            }
        }
    },

    onContent: function(content) {
        console.log('on content: ' + content);
    },

    onRefreshButton: function() {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
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
    },

    addRole: function() {
        var role = Ext.create('extjs5.model.Role', {
            name: 'New Role'
        });
        var proxy = Ext.create('Ext.data.proxy.Ajax', {
            url: 'api/role'
        });
        var op = proxy.createOperation('create', {
            records: [ role ]
        });
        proxy.doRequest(op);
    }
});
