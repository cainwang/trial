var React = require('react');
var CommentStore = require('../store/CommentStore');
var CommentActions = require('../actions/CommentActions');

function getCommentState() {
    return {
        comments: CommentStore.getAll()
    };
}

var CommentBox = React.createClass({
    getInitialState: function() {
        return getCommentState();
    },

    componentDidMount: function() {
        CommentStore.addChangeListener(this.commentsChanged);
        CommentStore.load();
    },

    componentWillUnmount: function() {
        CommentStore.removeChangeListener(this.commentsChanged);
    },

    commentsChanged: function() {
        this.setState(getCommentState());
    },

    addComment: function(comment) {
        CommentActions.add(comment);
    },

    render: function() {
        return (
            <div className="comment-box">
                <h1>Comments</h1>

                <CommentList comments={this.state.comments} />
                <CommentForm onPostComment={this.addComment} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var me = this;
        var comments = me.props.comments;

        var commentNodes = comments.map(function(comment) {
            return (
                <Comment comment={comment} />
            );
        });

        return (
            <div className="comment-list">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    postComment: function() {
        var authorNode = this.refs.author.getDOMNode(); 
        var textNode = this.refs.text.getDOMNode();

        var author = authorNode.value.trim();
        var text = textNode.value.trim();

        this.props.onPostComment({
            author: author,
            text: text
        });

        authorNode.value = '';
        textNode.value = '';
    },

    render: function() {
        return (
            <div className="comment-form">
                <input className="comment-form-item" placeholder="Your name" ref="author" />
                <input className="comment-form-item" placeholder="Say something ..." ref="text" />
                <Button className="comment-form-item" onClick={this.postComment}>Post</Button>
            </div>
        );
    }
});

var Button = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <button className="btn btn-info btn-xs">{this.props.children}</button>
        );
    }
});

var Comment = React.createClass({
    getInitialState: function() {
        return {
            liked: this.props.comment.liked
        };
    },

    like: function(e) {
        e.preventDefault();

        CommentActions.toggleLike(this.props.comment);
    },

    deleteComment: function(e) {
        e.preventDefault();

        CommentActions.remove(this.props.comment);
    },

    render: function() {
        var like = this.props.comment.liked ? 'Unlike' : 'like'

        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.comment.author}
                </h2>
                <p>{this.props.comment.text}</p>
                <a className="comment-action-item" onClick={this.like} href="#">{like}</a>
                <a className="comment-action-item" onClick={this.deleteComment} href="#">Delete</a>
            </div>
        );
    }
});

module.exports = CommentBox;