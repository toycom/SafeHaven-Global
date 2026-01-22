const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Region router (secrets loaded via Firebase config)
exports.connectBank = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new Error('Unauthorized');
  
  const region = data.region;
  // Route to Plaid, Mono, TrueLayer, etc. using functions.config()
  // Actual implementation uses: functions.config().mono.client_id
  return { message: `Connecting to ${region}` };
});
