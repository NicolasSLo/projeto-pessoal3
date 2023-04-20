const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const handlebars = require('express-handlebars')
const { engine } = require ('express-handlebars')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session')
const flash = require('connect-flash')

// sessão
app.use(session({
    secret: 's',
    resave: true, 
    saveUninitialized: true
}))
app.use(flash())
// Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Config Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// conexão com o mongodb
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/cadastro').then(() => {
    console.log('Mongodb conectado!')
}).catch((err) => {
    console.log(`erro ao se conectar ao mongodb || ${err}`)
})

// arquivo estatico: css, js
app.use(express.static(path.join(__dirname, 'public')))

// Rotas
app.use('/', routes)
// app.use('/login', routes)


// Servidor
const port = 3000
app.listen(port, () => {
    console.log('Servidor Rodadando na porta '+port)
})