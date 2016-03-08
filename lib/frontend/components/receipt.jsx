var React = require('react');

var taxExempt = require('../util/tax_exempt');

var Receipt = React.createClass({


  calculateTax: function(price) {
    var tax = price * 0.1;

    itemArray.forEach(function(word){
      if (taxExempt[word]) {
        tax -= price * 0.1;
      } else if (word === "imported") {
        tax += price * 0.05;
      }
    });

    return this.roundUpToNickel(tax);
  },

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
      var tax = this.calculateTax(price);

      total += this.roundToPenny(price + tax);
      totalTax += this.roundToPenny(tax);

      var itemPrice = price + tax;
      itemPrice = (((Math.round(itemPrice * 100)) / 100) * quantity).toFixed(2);

      itemArray[itemArray.length - 1] = itemPrice;
      itemArray[itemArray.length - 2] = ":";

      return(
      <li key={item}>
        <div className="item">
          {itemArray.splice(0, itemArray.length - 2).join(" ")}
        </div>
        <div className="price">{itemPrice}</div>
      </li>);
    }.bind(this));

    var date = new Date();
    date = date.toLocaleString();

    return(
      <li className="receipt">
        <div className="receipt-header">
          <div className="thanks"> *** THANK YOU FOR SHOPPING AT JOY STICK ***</div>
          <div className="date"> {date} </div>
        </div>
        <ul className="items">
          {items}
        <div className="tax">Sales Tax: {this.roundToPenny(totalTax).toFixed(2)}</div>
        <div className="total">Total: {this.roundToPenny(total).toFixed(2)}</div>
        </ul>
      </li>
    );
  }
});

module.exports = Receipt;
