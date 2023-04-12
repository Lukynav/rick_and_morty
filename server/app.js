const express = require('express');
const server = express();
const getCharacterById = require('./controller/getCharacterById')
const PORT = 3001;

server.get('/rickandmorty/character/:id',(req, res)=>{
    const id = req.url.split('/').at(-1)
    getCharacterById(res, id)
})

server.get('*',(req, res)=>{
    res
      .status(404)
      .send('No existe la ruta :(')
    console.log(URL+'/:id')
})

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});