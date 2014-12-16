var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../Constants');

var comments = [];

var CHANGE_EVENT = 'change';

var CommentStore = Object.assign({}, EventEmitter.prototype, {
    url: 'data/comments.json',

    getAll: function() {
        return comments;
    },

    load: function() {
        var me = this;

        $.ajax({
            url: this.url,
            dataType: 'json',
            success: function(data) {
                comments = data;
                me.emitChange();
            },
            error: function(xhr, status, err) {
                console.log(me.props.url, status, err.toString());
            }
        });
    },

    add: function(comment) {
        comments.push(comment);
        this.emitChange();
    },

    remove: function(comment) {
        var len = comments.length;
        for (var i = 0; i < len; i ++) {
            var item = comments[i];
            if (item === comment) {
                comments.splice(i, 1);
                this.emitChange();

                return;
            }
        }
    },

    toggleLike: function(comment) {
        comment.liked = !comment.liked;
        this.emit(CHANGE_EVENT);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(listener) {
        this.on(CHANGE_EVENT, listener);
    },

    removeChangeListener: function(listener) {
        this.removeListener(CHANGE_EVENT, listener);
    }
});

AppDispatcher.register(function(action) {
    var actions = Constants.action.comment;
    var comment = action.data;

    var handlers = {};
    handlers[actions.ADD] = function() {
        CommentStore.add(comment);
    };
    handlers[actions.REMOVE] = function() {
        CommentStore.remove(comment);
    };
    handlers[actions.TOGGLE_LIKE] = function() {
        CommentStore.toggleLike(comment);
    }

    handlers[action.type]();
});

module.exports = CommentStore;