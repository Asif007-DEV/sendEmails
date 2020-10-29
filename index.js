const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'myEmail@gmail.com',
        pass: 'myPassword'
    }
});
const mailOptions = {
    from: 'myEmail@gmail.com',
    to: 'myFriendEmail@gmail.com , anotherEmail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'This is a example how to send email more than one person with node js'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});
