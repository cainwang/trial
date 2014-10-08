/** @jsx React.DOM */

var CommentBox = React.createClass({
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
    render: function() {
        return (
            <div className="CommentBox">
                <h1>Comments</h1>

                <CommentList comments={this.state.comments}/>
                <CommentForm onPostComment={this.updateComments}/>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var comments = this.props.comments;

        var commentNodes = comments.map(function(comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
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

        console.log('comment: ' + text + ' from ' + author);

        this.props.onPostComment({
            author: author,
            text: text
        });

        authorNode.value = '';
        textNode.value = '';
    },

    render: function() {
        return (
            <div className="commentForm">
                <input placeholder="Your name" ref="author" />
                <input placeholder="Say something ..." ref="text" />
                <button onClick={this.postComment}>Post</button>
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

React.renderComponent(
    <CommentBox url="data/comments.json"/>,
    document.getElementById('content')
);