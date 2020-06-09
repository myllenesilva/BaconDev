const express = require('express');
const mongoose =  require ('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://bacondev:mylinha@cluster0-s9sc1.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); //VIR SEMPRE ANTES DAS ROTAS
app.use(routes);

app.listen(3333);