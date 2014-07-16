Ext.define('extjs5.store.Users', {
    extend: 'Ext.data.Store',

    model: 'extjs5.model.User',
    storeId: 'users',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'api/users',
        reader: {
            type: 'json',
            rootProperty: 'result'
        }
    }
});
