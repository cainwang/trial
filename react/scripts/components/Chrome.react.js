var React = require('react');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./Header.react');

var Chrome = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = Chrome;