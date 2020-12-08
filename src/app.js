var express = require('express');
var app = express();
const path = require('path');

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index',{
      title: "Home",
      name: "Prerona"
  });
})

app.get('/about', function (req, res) {
    res.send('hello world')
  })
app.listen(3000,() =>{
    console.log("The server is running on port 3000");

})