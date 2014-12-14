/** @jsx React.DOM */

var React = require('react');
window.React = React;

var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var Chrome = require('./components/Chrome.react');
var Welcome = require('./components/Welcome.react');
var CommentBox = require('./components/CommentBox.react');

var routes = (
    <Route path="/" handler={Chrome}>
        <Route name="welcome" handler={Welcome} />
        <DefaultRoute handler={Welcome} />
        <Route name="comments" handler={CommentBox} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.querySelector('.chrome'));
});