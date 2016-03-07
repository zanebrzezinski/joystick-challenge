var ApiActions = require('../actions/api_actions');
var shoppingCarts = require('../../assets/shoppingCarts');

var receiptsUtil = {
  fetchReceipts: function() {
    ApiActions.receiveReceipts(shoppingCarts.shoppingCarts);
  }
};

module.exports = receiptsUtil;
