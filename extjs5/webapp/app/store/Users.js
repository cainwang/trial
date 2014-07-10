Ext.define('extjs5.store.Users', {
    extend: 'Ext.data.Store',

    model: 'extjs5.model.User',
    storeId: 'users',

    proxy: {
        type: 'ajax',
        url: 'api/users'
    }
});
