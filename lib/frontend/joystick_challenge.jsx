var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');

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

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
