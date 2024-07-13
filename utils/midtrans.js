const midtransClient = require('midtrans-client');

// Create Core API instance
let coreApi = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: '',
  clientKey: ''
});

// Create Snap API instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: '',
  clientKey: ''
});

module.exports = { coreApi, snap };
