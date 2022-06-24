
export default function handler(req, res) {
    require('dotenv').config()

    const password = process.env.emailPassword
    res.status(500)

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: 'rbiwebsitecontactform@gmail.com',
          pass: process.env.emailPassword,
        },
      })

      console.log('rbicontactform@gmail.com' + ',' + password)



      const mailData = {
        from: 'rbiwebsitecontactform@gmail.com',
        // to: 'hello@runbyinfluencers.com',
        to: 'gregorc96@gmail.com',
        subject: `Website message from ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>RBI client message: ${req.body.message}</div><p>RBI client name:
        ${req.body.name}</p><p>RBI client email:
        ${req.body.email}</p>`
      }

      transporter.sendMail(mailData, function (err, info) {
        if(err){
          console.log(err)
          res.status(500).send()
          console.log('there has been an error')
        }
        else{
          console.log(info)
          console.log('no error')
          res.status(200).send()
        }
      })


      

  }