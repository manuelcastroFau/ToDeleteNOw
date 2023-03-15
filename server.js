const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));


app.get('/', (req, res) => {
    // const timeElapsed = Date.now();
    // const today = new Date(timeElapsed);
    // res.send(`
    // <h1> Manuel Local Server</h1>\
    //   <h2> StudentServer API<h2>
    //   <h3>Hostname: <i>${hostname}</i></h3>
  
    //   <p>Working in <a href="http://localhost:${listener.address().port}"> https://localhost:${listener.address().port} </a> </p>
    //   <p><b>File: </b>${__filename}<p>
    //   <p><b>Date: </b>${today.toDateString()}</p>
    // `);
    res.sendFile('index.html');
  });


port = process.env.PORT || 5678
var listener = app.listen(port); //start the server
console.log('Server is running...');

