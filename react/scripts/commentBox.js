/** @jsx React.DOM */
var React = require('react');

var CommentBox = React.createClass({
    getDefaultProps: function() {
        return {
            url: 'data/comments.json'
        };
    },

    propTypes: {
        url: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            comments: []
        };
    },

    loadComments: function() {
        var me = this;

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                me.setState({
                    comments: data
                });
            },
            error: function(xhr, status, err) {
                console.log(me.props.url, status, err.toString());
            }
        });
    },

    componentDidMount: function() {
        this.loadComments();
    },

    updateComments: function(comment) {
        var comments = this.state.comments;
        comments.push(comment);

        this.setState({
            comments: comments
        });
    },

    deleteComment: function(comment) {
        var comments = this.state.comments;

        var index = comments.indexOf(comment);
        if (index != -1) {
            comments.splice(index, 1);
            this.setState({
                comments: comments
            });
        }
    },

    render: function() {
        return (
            <div className="comment-box">
                <h1>Comments</h1>

                <CommentList comments={this.state.comments} onDeleteComment={this.deleteComment} />
                <CommentForm onPostComment={this.updateComments} />
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
                <Comment comment={comment} onDeleteComment={me.props.onDeleteComment}/>
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

        var comment = this.props.comment;
        comment.liked = !comment.liked;

        this.setState({liked: comment.liked});
    },

    deleteComment: function(e) {
        e.preventDefault();

        this.props.onDeleteComment(this.props.comment);
    },

    render: function() {
        var like = this.state.liked ? 'Like' : 'Unlike'

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