Ext.define('extjs5.model.Base', {
    extend: 'Ext.data.Model',

    fields: [ {
        name: 'id',
        type: 'int'
    } ],

    schema: {
        namespace: 'extjs5.model'
    }
});