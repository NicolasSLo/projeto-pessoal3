const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = Schema({
    nome: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    senha2: { 
        type: String, 
        require: true 
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model('users', User)


// inserindo dados
// const Usuario = mongoose.model('users')
// new Usuario({
//     nome: 'Nicolas2',
//     senha: 'abc1234',
//     senha2: 'abc1234'
// }).save().then(() => {
//     console.log('Usuário cadastrado!')
// }).catch((err) => {
//     console.log('Erro ao cadastrar usuário || '+err)
// })

