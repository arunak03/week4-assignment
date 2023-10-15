const express = require('express');
const app = express();
const fs = require('fs');
const config = require('./config.json');

app.use(express.urlencoded({ extended : true }));


let avengers = [];
if (fs.existsSync('data.json')) {
  try {
    const dataJson = fs.readFileSync('data.json', 'utf-8');
    const jsonData = JSON.parse(dataJson);
    avengers = jsonData.avengers || [];
  } catch (error) {
    console.error('Error parsing data.json:', error);
  }
}

app.get('/', (req, res) => {
  res.render('home.pug', { avengers });
});

app.post('/', (req, res) => {
  const newHero = {
    title: req.body.title,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    power: req.body.power,
    city: req.body.city,
  };

  avengers.push(newHero);

  const jsonData = { avengers };
  fs.writeFileSync('data.json', JSON.stringify(jsonData), 'utf-8');
  res.redirect('/');
});

app.listen(config.port, config.host, (error) => {
  if (error) {
    console.log('Error ', error);
  } else {
    console.log(`Server is now live on ${config.host}:${config.port}`);
  }
});
