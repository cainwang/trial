/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var CommentBox = require('./commentBox');

var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <Link href="/comments">Comments</Link>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <Locations hash>
                <Location path="/comments" handler={CommentBox}></Location>
                <NotFound handler={Home} />
            </Locations>
        );
    }
});

React.renderComponent(App(), document.body);