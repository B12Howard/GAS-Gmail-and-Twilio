function createMessage(messageData) {  
  if(messageData.format == "E-Mail") {
    var Subject = messageData.subject; 
    var EmailBody = '<p>'+ messageData.message '</p><br />';
    
    MailApp.sendEmail(Recipient, Subject, EmailBody, {
      htmlBody:EmailBody
    });
  }
  else if(messageData.format == "TEXT") {
    var key = '';
    var YOURACCOUNTSID = ""; // Get from your Twilio account
    var YOURAUTHTOKEN = ""; // Get from your Twilio account
    var messages_url = "https://api.twilio.com/2010-04-01/Accounts/"+YOURACCOUNTSID+"/Messages.json";
    var yourTwilioNumber = "";
    
    var payload = {
      "To": "+1" + phoneNumber, // Phone number to send text to
      "Body" : messageData.message,
      "From" : "+1"+yourTwilioNumber
    };
    var options = {
      "method" : "post",
      "payload" : payload
    };
    options.headers = { 
      "Authorization" : "Basic " + Utilities.base64Encode(YOURACCOUNTSID+":"+YOURAUTHTOKEN)
    };
    
    UrlFetchApp.fetch(messages_url, options);
  }
}