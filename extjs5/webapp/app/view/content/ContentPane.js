Ext.define('extjs5.view.content.ContentPane', {
    extend: 'Ext.container.Container',
    alias: 'widget.contentPane',

    controller: 'content',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'panel',
        title: 'panel1',
        height: 100
    }, {
        xtype: 'panel',
        title: 'panel2',
        flex: 1,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'panel',
            title: 'subpanel1',
            flex: 1
        }, {
            xtype: 'panel',
            title: 'subpanel2',
            flex: 1
        }]
    }]
});
