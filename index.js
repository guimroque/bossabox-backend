const bodyParser = require("body-parser");
const cors = require("cors");
const app = require("express")();
const router = require("express").Router();

const dbConnect = require("./Utils/dbConnect");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const corsOptions = {
  origin: "http://localhost:3001",
  methods: "GET,POST,DELETE",
};

// connect to cardaps mongodb instance
(async function (){
  try {
    await dbConnect();
  }catch(err){
    console.log('erro: ', err);
  }
});

app.use(cors(corsOptions));

// Set access headers
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:3001");   
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use("/api", require('./router/Tools/router'));

app.get("/", (req, res) => {
  res.status(200).send({message:'funcionando :)'})
});

module.exports = app;