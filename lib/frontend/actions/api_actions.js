var AppDispatcher = require('../dispatcher/dispatcher');
var ReceiptsStore = require('../stores/receipts_store');

var ApiActions = {
  receiveReceipts: function(receipts){
    AppDispatcher.dispatch({
        actionType: "RECEIPTS RECEIVED",
        receipts: receipts
    });
  }
};

module.exports = ApiActions;
