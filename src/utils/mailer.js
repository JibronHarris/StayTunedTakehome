const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'JibronTest@gmail.com',
    pass: 'JibronTestAccount',
  },
});

function sendEmailReminders(reminders, currentPrice) {
  reminders.forEach((reminder) => {
    let mailDetails = {
      from: 'JibronTest@gmail.com',
      to: 'JibronTest@gmail.com',
      subject: `${reminder.id} is cheaper!`,
      text: 'Node.js testing mail for GeeksforGeeks',
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log('Error Occurs');
      } else {
        console.log('Email sent successfully');
      }
    });
  });
}

module.exports = { sendEmailReminders };
