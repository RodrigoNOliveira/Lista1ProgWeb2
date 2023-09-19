const express = require('express');  //metodo que requere um modulo http que serve para criar um servidor 
const app = express()
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname,'./htmls/index.html'));
;})

app.get('/about', (req, res) =>{
  res.sendFile(path.join(__dirname,'./htmls/about.html'));
;})
app.get('/user', (req, res) =>{
  res.sendFile(path.join(__dirname,'./htmls/user.html'));
;})
app.get('/login', (req, res) =>{
  res.sendFile(path.join(__dirname,'./htmls/login.html'));
;})




app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname, 'erro404/index.html'))
})

app.use((req,res)=>{
  res.status(500).sendFile(path.join(__dirname, '500.html'))
})

app.listen(port, () => {
  console.log(`O Servidor esta rodando na porta ${port}`);
})