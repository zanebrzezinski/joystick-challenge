var React = require('react');

var Receipt = React.createClass({

  getInitialState: function() {
    return({
      tax: 0, total: 0
    });
  },

  componentDidMount: function(){
    this.props.cart.items.map(function(item){
      this.calculateTax(item.split(" "));
    }.bind(this));
  },

  calculateTax: function(item) {
    this.setState({total: this.state.total += parseFloat(item[item.length - 1])});
  },


  render: function(){
    items = this.props.cart.items.map(function(item){
      return(<li key={item}>{item}</li>);
    }.bind(this));
    return(
      <li>
        <ul>
        {items}
        <li>{this.state.total}</li>
        </ul>
      </li>
    );
  }
});

module.exports = Receipt;
