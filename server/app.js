const http = require('http')
const characters = require('./utils/data')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').at(-1)

        const character = characters.filter(el => el.id === Number(id))

        res.writeHead(200, {'Content-type':'application/json'}).end(JSON.stringify(character[0]))
    }

}).listen(3001, 'localhost')