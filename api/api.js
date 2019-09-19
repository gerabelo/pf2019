var cors = require("cors");
var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var database = "mongodb://localhost:27017/pf2019";
var mongoose = require("mongoose");
var fs = require('fs');
const util = require('util');

mongoose.Promise = global.Promise;
mongoose.connect(database);

var QuestionarioSchema = new mongoose.Schema
({
    operador: String,
    perguntas: [String],
    respostas: [String]
},{versionKey: false});

var Questionarios = mongoose.model("Questionarios", QuestionarioSchema);

app.use(cors());
app.use(bodyParser.json());
app.listen(port, () => {
	console.log("PF2019 Receiver is listening on port " + port);
});


app.get("/", (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.send("Welcome to PF2019 Receiver");
});

app.post("/questionarios/", urlencodedParser, (req, res) => {
    var date = String(Date.now());    
    arquivo = date.replace(":"," ").replace("."," ")+'.txt';
    var data = JSON.stringify(req.body.data)
    // console.log("recebendo questionarios por HTTP POST:\n");	
    // console.log(data)
    fs.writeFile(arquivo,data,function (err) { });

    ps = [String];
    rs = [String];

    questionarioOld = "1";
    linha = [String]
    op = "";
    req.body.data.forEach(element => {
        linha = [];
        linha = element.split('_');
        if (linha.length == 4) {
            // console.log(linha)
            // pesquisador = linha[0];
            // questionario = linha[1];
            // pergunta = linha[2];
            // resposta = linha[3];
            if (linha[1] != questionarioOld) {
                Questionarios.create({operador: op,perguntas: ps,respostas: rs})
                ps = []
                rs = []
                questionarioOld = linha[1];
            }
            ps.push(linha[2])
            rs.push(linha[3])
            op = linha[0];
        }
    });
    Questionarios.create({pequisador: op,perguntas: ps,respostas: rs});

    res.send("OK")
    console.log(date)
    
});

app.get("/questionarios", (req, res) => {
	// console.log("recebendo questionarios por HTTP GET:\n");	
    // console.log(req.query.data)
    res.send("OK")
    // res.sendStatus(200)
});
