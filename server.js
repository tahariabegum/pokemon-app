const express = require ('express')

const app = express()

const pokemon = require ('./models/pokemon.js')

const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.urlencoded({extended:false}))

app.get('/' ,  (req, res) => {
    res.send('<h1> Welcome to the Pokemon App! </h1>')
})

app.get('/pokemon' , (req, res) => { 
    res.render( 'Index' , {pokemon:pokemon} )
})

app.post('/pokemon', (req,res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.get('/pokemon/new', (req,res) => {
    res.render('New')
})

app.get('/pokemon/:id', (req,res) => {
    res.render( 'Show' , {pokemon:pokemon[req.params.id]})
})




app.listen(3000, function () {
    console.log("Listening on port 3000")
})
