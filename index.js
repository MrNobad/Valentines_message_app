const cron = require('node-cron');

const accountSid = accountSid;
const authToken = authToken;
const client = require('twilio')(accountSid, authToken);

const messages = require('./messages');

const currentMessage = 0;

function sendMessage() {

    client.messages
        .create({
            body: messages[currentMessage],
            from: numberFrom,
            to: numberTo
        })
        .then(message => {
            currentMessage++;
            console.log(message)
        });
}

cron.schedule('1 * * * *', () => {
    console.log('Message Sent!');
    sendMessage();
});