var accoutnSid = "AC468928e2c45144195e8e58305fe04f42";
var authToken = "04e16339a10da5577c5c4af7be541e96";

var client = require("twilio")(accoutnSid, authToken);

client.calls.create(
  {
    url: "https://9f25acdf.ngrok.io",
    to: "+15197812002",
    from: "+13018613989"
  },
  function(err, call) {
    if (err) {
      console.log(err);
    } else {
      console.log(call.sid);
    }
  }
);
