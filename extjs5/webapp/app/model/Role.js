Ext.define('extjs5.model.Role', {
    extend: 'extjs5.model.Base',

    fields: [ {
        name: 'name',
        type: 'string'
    }, {
        name: 'userId',
        reference: 'User'
    } ]
});