var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <header className="header">
                <ul>
                    <li>
                        <Link to="welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="comments">Comments</Link>
                    </li>
                </ul>
            </header>
        );
    }
});

module.exports = Header;