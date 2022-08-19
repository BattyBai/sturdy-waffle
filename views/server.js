// Setting up express
const express = require ('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Fruit = require('./models/fruits.js');
const app = express();


// have server use url encoded data and turn it into an object (middleware)
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

// edit route
app.get('/fruits/:id/edit', (req, res) => {
        Fruit.findById(req.params.id, (err, FoundFruit) => {
        res.render(
            'edit.ejs',
            {
                fruit: FoundFruit
            }
        )  
    })
    
})

app.delete('/fruits/:id', (req, res) => {
        Fruit.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/fruits');
    })
    // res.send('deleting...')
})
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
});
app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, FoundFruit) => {
      res.render(
        'show.ejs',
        {
         fruit: FoundFruit   
        }
        )
    })
})
// create route - processes data that is sent in
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
      res.redirect('/fruits')
    })
    // res.send(req.body);
});

app.get ('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render(
            'index.ejs',
            {
                fruits: allFruits
            }
            )  
    })
});

app.listen(3000, () => {
    console.log("listening...");
  });

mongoose.connect('mongodb://localhost:27017/basiccrud', () => {
    console.log('The connection with mongod is established');
})