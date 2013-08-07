cordova.define("cordova/plugin/emailcomposer", function(require, exports, module) {
    var exec = require('cordova/exec');
    
    var EmailComposer = function() {
        this.resultCallback = null; // Function
    };
    
    EmailComposer.ComposeResultType = {
        Cancelled:0,
        Saved:1,
        Sent:2,
        Failed:3,
        NotSent:4
    }


    // showEmailComposer : all args optional
    EmailComposer.prototype.showEmailComposer = function(successCallback,failureCallback,subject,body,toRecipients,ccRecipients,bccRecipients,bIsHTML,attachments) {
    console.log("showEmailComposer()");
    var args = {};
    if(toRecipients)
        args.toRecipients = toRecipients;
    if(ccRecipients)
        args.ccRecipients = ccRecipients;
    if(bccRecipients)
        args.bccRecipients = bccRecipients;
    if(subject)
        args.subject = subject;
    if(body)
        args.body = body;
    if(bIsHTML)
        args.bIsHTML = bIsHTML;
    if(attachments)
        args.attachments = attachments;

    cordova.exec(successCallback, failureCallback, "EmailComposer", "showEmailComposer", [args]);
}
    
    
    var emailcomposer = new EmailComposer();
    module.exports = emailcomposer;
});



