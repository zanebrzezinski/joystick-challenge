var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Index = require('./components/index.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Index />
      </div>
    );
  }
});

var router = (
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById('root'));
});
