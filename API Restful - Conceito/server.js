const express = require("express");
const app = express();
const data = require("./data.json")

app.use(express.json());


/* inicia o servidor */
app.listen(3000, function(){
    console.log("Server is running")
});

/* Retorna todos os clientes */
app.get("/clients", function(req, res){
    res.json(data);
});

/* Retorna um cliente específico através do id */
app.get("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(client => client.id == id);
    if(!client) return res.status(204).json();
    res.json(client);   
});


/* Altera um cliente específico através do id */
app.put("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(client => client.id == id);
    if(!client) return res.status(204).json();
    const {name} = req.body;
    client.name = name;
    res.json(client);   
});


/* Adiciona clientes */
app.post("/clients", function(req, res){
    const data = {name, email, telefone};
    data = req.body; 
    if(data.name || data.email || data.telefone == "") return res.status(400).json();
    res.json({ name, email, telefone});
});


/* Deleta um cliente específico */
app.delete("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.filter(client => client.id != id);
    res.json(client);
});





