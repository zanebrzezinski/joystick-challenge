var React = require('react');

var taxExempt = require('../util/tax_exempt');

var Receipt = React.createClass({

  roundToPenny: function(price) {
    return (Math.round(price * 100)) / 100;
  },

  roundUpToNickel: function(price) {
    var arr = price.toString().split(".");
    
  },

  render: function(){
    var total = 0;
    var totalTax = 0;

    items = this.props.cart.items.map(function(item){
      itemArray = item.split(" ");
      var price = parseFloat(itemArray[itemArray.length - 1]);
      var quantity = parseInt(itemArray[0]);
      var tax = price * 0.1;

      itemArray.forEach(function(word){
        if (taxExempt[word]) {
          tax -= price * 0.1;
        } else if (word === "imported") {
          tax += price * 0.05;
        }
      });

      tax = this.roundToPenny((Math.round(tax * 20)/20));

      total += this.roundToPenny(price + tax);
      totalTax += this.roundToPenny(tax);

      var itemPrice = price + tax;

      itemArray[itemArray.length - 1] = (Math.round(itemPrice * 100))/100;

      return(<li key={item}>{itemArray.join(" ")}</li>);
    }.bind(this));

    return(
      <li>
        <ul>
        {items}
        <li>Sales Tax: {this.roundToPenny(totalTax)}</li>
        <li>Total: {this.roundToPenny(total)}</li>
        </ul>
      </li>
    );
  }
});

module.exports = Receipt;
