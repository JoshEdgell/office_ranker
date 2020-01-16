const express         = require('express');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
const app             = express();
const router          = express.Router();

//Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Routers
const episodeController = require('./controllers/episodes');
app.use('/episodes', episodeController);

app.get('/', (req,res)=>{
  res.render(index.html);
});

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/officeranker'
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.once('open', ()=>{
	console.log("That's what she said.");
});

const PORT = 3000;
const port = process.env.PORT || PORT;

app.listen(port, ()=>{
  console.log("Dunder Mifflin, this is Pam.")
  console.log("PORT ==========" + PORT + "==========")
});
