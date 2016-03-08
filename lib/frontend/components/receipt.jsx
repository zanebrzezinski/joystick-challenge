var React = require('react');

var taxExempt = require('../util/tax_exempt');

var Receipt = React.createClass({

  roundToPenny: function(price) {
    return (Math.round(price * 100)) / 100;
  },

  roundUpToNickel: function(price) {
    var arr = price.toString().split(".");
    var newPrice = price;
    if (arr[1] && arr[1][1] && arr[1][1] !== 5) {
      newPrice = Math.round((price + 0.025) * 20) / 20;
    }
    return newPrice;
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

      tax = this.roundUpToNickel(tax);


      total += this.roundToPenny(price + tax);
      totalTax += this.roundToPenny(tax);

      var itemPrice = price + tax;
      itemPrice = ((Math.round(itemPrice * 100)) / 100).toFixed(2);

      itemArray[itemArray.length - 1] = itemPrice;

      return(<li key={item}>{itemArray.join(" ")}</li>);
    }.bind(this));

    return(
      <li>
        <ul>
        {items}
        <li>Sales Tax: {this.roundToPenny(totalTax).toFixed(2)}</li>
        <li>Total: {this.roundToPenny(total).toFixed(2)}</li>
        </ul>
      </li>
    );
  }
});

module.exports = Receipt;
