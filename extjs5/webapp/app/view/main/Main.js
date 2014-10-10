/**
 * This class is the main view for the application. It is specified in app.js as the "autoCreateViewport" property. That
 * setting automatically applies the "viewport" plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('extjs5.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    controller: 'main',

    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        me.items = [ {
            region: 'north',
            xtype: 'component',
            cls: 'app-banner',
            html: 'My Extjs 5 App',
            padding: 10
        }, {
            xtype: 'panel',
            bind: {
                title: '{fullName}'
            },
            region: 'west',
            plugins: 'responsive',
            responsiveConfig: {
                tall: {
                    width: 100
                },
                wide: {
                    width: 250
                }
            },
            html: 'Users',
            width: 250,
            split: true,
            collapsible: true,
            tbar: [ {
                text: 'Refresh',
                reference: 'refreshkButton',
                handler: 'onRefreshButton'
            }, {
                text: 'Add',
                handler: 'addRole'
            } ],
            layout: 'fit',
            items: me.getUserGrid()
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: [ {
                title: 'Tab 1',
                html: '<h2>Content appropriate for the current navigation.</h2>'
            }, {
                title: 'Light',
                xtype: 'contentPane'
            } ]
        } ];

        me.callParent();
    },

    getUserGrid: function() {
        return {
            xtype: 'grid',
            autoScroll: true,
            bind: {
                store: '{users}'
            },
            columns: [ {
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            } ]
        };
    }
});
