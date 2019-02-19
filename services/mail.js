const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');
class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();
        this.sgApi = sendgrid(keys.sendGried_key);
        this.from_email = new helper.Email('no_reply@survey.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }
    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }
    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }
    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }
    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        // this.sgApi.API(request, function (error, response) {
        //     if (error) {
        //         console.log(error);
        //     }
        //     console.log(response.statusCode);
        //     console.log(response.body);
        //     console.log(response.headers);
        //     console.log('done sent');
            
        // });
         const response = await this.sgApi.API(request);
         return response;

    }
}
module.exports = Mailer;