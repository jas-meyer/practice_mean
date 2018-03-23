// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

//We are retrieving this Schema from our Models, named 'User'
app.use(bodyParser.json());
app.use(express.static( __dirname + '/productAng/dist' ));
// Require path
mongoose.Promise = global.Promise;
var path = require('path');
// Setting our Static Folder Directory
// Routes
// Root Request
// define Schema variablecopy
var Schema = mongoose.Schema;
// define Post Schema
var ProductSchema = new mongoose.Schema({
 title : {type: String, required:true, minlength: 4},
 price: {type: String, required: true},
iurl: {type:String},
}, {timestamps:true});
// define Comment Schema
// set our models by passing them their respective Schemas
mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product')
// store our models in variables

// route for getting a particular post and comments

app.get('/product', function(req, res) {
 Product.find({}, function(err, products) {
  if(err) {
      console.log('something went wrong');
      res.json({message: "Error", err});
    }
    else { // else console.log that we did well and then redirect to the root route
     console.log('look at the products!');
    console.log(products)
    res.json(products);
    }
  })
})
app.post('/product', function(req, res) {
 console.log(req.body.name)
 var product = new Product({title: req.body.title, price: req.body.price, iurl: req.body.iurl});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  product.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
      console.log(err)
      res.json({message:"Error", err});
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a author!');
      res.redirect('/product');
    }
  })
})
app.put('/product/:id', function(req,res){
  console.log(req.body.title)
  Product.findOne({_id: req.params.id}, function(err, product){
    product.title = req.body.title
    product.price = req.body.price
    product.iurl = req.body.iurl


    product.save(function(err){
      if(err) {
      console.log('something went wrong');
      res.json({message:"Error", err});
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully updated an author!');
      res.json(err);
    }
    })
  })
})
app.delete('/product/:id', function(req, res) {
    console.log(req.params.id)
    Product.remove({_id: req.params.id}, function(err){
    if(err) {
      console.log('something went wrong');
      console.log(err)
      res.json({message:"Error", err});
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully removed a product!');
      res.json(err);
    }
  })
})
app.get('/product/:id', function(req, res) {
    console.log(req.params.id)
    Product.findOne({_id: req.params.id}, function(err,ones){
    if(err) {
      console.log('something went wrong');
      res.json({message:"Error", error});
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully found an product!');
      res.json(ones);
    }
  })
})
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./productAng/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
