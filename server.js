const express = require('express')
const app = express()
const server = require('http').createServer(app);
const path = require('path')
const port = process.env.PORT || 5000
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')


app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join (__dirname, './','client','build');
  app.use (express.static (publicPath));
  app.get ('*', (req, res) => { 
       
      res.sendFile (path.join (publicPath, 'index.html')); 
   })
  // }


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'formapi59@gmail.com',
      pass: 'virap100'
    }
  })

app.post('/mail',(req,res)=>{
    console.log(req.body)
    
    const mailOptions = {
        from: 'formapi59@gmail.com',
        to:'formapi59@gmail.com',
        subject: req.body.name,
        text:`user name is ${req.body.name} user phone ${req.body.phone}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({message:'sended succssefuly'});
        }
       });
    
})






app.use((req,res,next)=>{
  const error = new Error('Note Found');
  error.status = 404;
  next(error)
})
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  })
})

server.listen(port, function () {
  console.log('Server is running on port: ' + port)
});