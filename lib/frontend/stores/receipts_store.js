var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var ReceiptsStore = new Store(AppDispatcher);

var _receipts = [];

var resetReceipts = function(receipts) {
  _receipts = receipts;
};

ReceiptsStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIPTS RECEIVED":
    resetReceipts(payload.receipts);
    ReceiptsStore.__emitChange();
    break;
  }
};

ReceiptsStore.receipts = function() {
  return _receipts.slice(0);
};

module.exports = ReceiptsStore;
