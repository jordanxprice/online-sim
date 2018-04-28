const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const recentSearches = []

app.use(bodyParser.json());

app.post('/api/places', (req, res) => {
    if (recentSearch.length > 2 ){
        recentSearch.shift()
    }
    recentSearch.push(req.body)
    res.sendStatus(200)
})

app.get('/api/places', (req, res)=> {
    res.send(recentSearch)
})

const port = 3000
app.listen(port, ()=>{console.log('server is running on port 3000')})