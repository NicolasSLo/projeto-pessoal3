const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/user')
const User = mongoose.model('users')

router.get('/', (req, res) => {
    res.render('cadastro', {
        alert: ''
    })
})
router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {

    

})

router.post('/welcome', (req, res) => {
    if (req.body.nomeLogin == '' || req.body.senhaLogin == '') {
        req.flash('error_msg', 'Preencha os campos!')
        res.redirect('/login')
    } else {
        User.find().then((users) => {
            const usuarios = users

            const getUser = usuarios.find(
                (a) => a.nome == req.body.nomeLogin
            )

console.log(getUser)

            if (getUser == undefined) {
                req.flash('error_msg', 'Usuário inexistente')
                res.redirect('/login')
            } else {
                if (req.body.nomeLogin == getUser.nome && req.body.senhaLogin == getUser.senha) {
                    res.render('welcome', { nome: getUser.nome, data: getUser.date })
                } else {
                    req.flash('error_msg', 'Dados incorretos!')
                    res.redirect('/login')
                }
            }

        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro no login.')
            res.redirect('/login')
        })
    }

})

module.exports = router;