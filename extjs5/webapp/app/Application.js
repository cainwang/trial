/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('extjs5.Application', {
    extend: 'Ext.app.Application',

    name: 'extjs5',

    defaultToken: 'main',

    views: [ 'content.ContentPane' ],

    controllers: [ 'Root' ],

    stores: [ 'Users' ],

    launch: function() {
    }
});
