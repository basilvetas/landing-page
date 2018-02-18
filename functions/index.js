const functions = require('firebase-functions');

const {email1:email1, email2:email2, email3:email3} = require('./emails.json');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
  	
  const snapshot = event.data;  
  const val = snapshot.val(); 

  const mailOptions = {
    to: email1,
    subject: 'Inquiry from ' + val.firstname + ' ' + val.lastname,
    text: 'From: ' + val.firstname + ' ' + val.lastname + '\nEmail: ' 
    + val.email + '\nCompany: ' + val.company + '\nMessage:\n\n' + val.message
  };

  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Mail sent to: ' + email1);
  });
});
