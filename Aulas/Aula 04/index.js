const express = require('Express');

const app = express();

// middleware integrado
app.use(express.json());

// middleware de app
app.use(function(req, res, next){
    console.log("Data: ", new Date());
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.body);
    next();
});

//middleware de rota
app.get("/", function(req, res){
res.send('Olá'); //status 200
});
app.post("/", function(req, res) {
    console.log(req.body);
    res.status(201).send("Criado com sucesso"); //status 201
});
app.put("/", function(req, res) {
    res.json({status: "200", message: "Sucesso"}) //status 200
});
app.delete("/", function(req, res){
    //res.status(204). end(); //status 204
    throw new Exception()
})

app.use(function(error, req, res, next) {
    res.status(400). send("Deu ruim!")
    })
app.listen(3000, function(){
    console.log('API está on!')
});

module.exports = app