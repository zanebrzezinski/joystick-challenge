var React = require('react');

var receiptsUtil = require('../util/receiptsUtil');
var ReceiptsStore = require('../stores/receipts_store');

var Receipt = require('./receipt');

var Index = React.createClass({

  getInitialState: function() {
    return(
      {carts: []}
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

    var i = 0;
    var receipts = this.state.carts.map(function(cart){
      return(
        <Receipt key={i+=1} cart={cart} />
      );
    });

    return(
      <ul>{receipts}</ul>
    );
  }
});

module.exports = Index;
