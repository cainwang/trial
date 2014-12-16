var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../Constants');

var CommentActions = {
    add: function(comment) {
        AppDispatcher.dispatch({
            type: Constants.action.comment.ADD,
            data: comment
        });
    },

    remove: function(comment) {
        AppDispatcher.dispatch({
            type: Constants.action.comment.REMOVE,
            data: comment
        });
    },

    toggleLike: function(comment) {
      AppDispatcher.dispatch({
        type: Constants.action.comment.TOGGLE_LIKE,
        data: comment
      });
    }
};

module.exports = CommentActions;