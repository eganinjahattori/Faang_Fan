const { ResponseHandler } = require('../utils/RequestResponseHandler')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(
  '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'
)

module.exports.handler = async event => {
  const msg = {
    to: 'rajat.upadhyay@live.com', // Change to your recipient
    from: 'rajatis1999@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }
  return sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      return ResponseHandler.returnResponse(200, 'Email Sent')
    })
    .catch(error => {
      console.error(error)
      return ResponseHandler.returnResponse(500, 'Some Error', error)
    })
}
