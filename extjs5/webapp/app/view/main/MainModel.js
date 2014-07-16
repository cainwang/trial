/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('extjs5.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        firstName: 'Cain',
        lastName: 'Templar'
    },

    formulas: {
        fullName: function(get) {
            return get('firstName') + ' ' + get('lastName');
        }
    },

    stores: {
        users: {
           source: 'Users'
        }
    }
});