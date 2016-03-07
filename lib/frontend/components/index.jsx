var React = require('react');

var receiptsUtil = require('../util/receiptsUtil');
var ReceiptsStore = require('../stores/receipts_store');

var Index = React.createClass({

  getInitialState: function() {
    return(
      {carts: {}}
    );
  },

  componentDidMount: function() {
      this.token = ReceiptsStore.addListener(this._onChange);
      receiptsUtil.fetchReceipts();
  },

  _onChange: function() {
    this.setState({carts: ReceiptsStore.receipts()});
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  render: function() {
    return(
      <div></div>
    );
  }
});

module.exports = Index;
