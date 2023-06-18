const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ware_64:2017Mb%40yame@cluster0.wzra0l6.mongodb.net/api_node?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
 
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

const chickenRoutes = require('./routes/chicken');
app.use('/api/chicken',chickenRoutes);
 
const userRoutes = require('./routes/user');
//app.use('/api/auth',userRoutes);

module.exports = app;