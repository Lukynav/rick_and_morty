const axios = require("axios")

const getCharacterById = (res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(data => {
        console.log(data.data)
        return res.writeHead(200, {'Content-type':'application/json'}).end(JSON.stringify(data.data))
    })
}
module.exports = getCharacterById