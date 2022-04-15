const { Router } = require('express')
const { Contato } = require('../models')

const router = Router()

// Rota de novo contato
router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body
    const contato = await Contato.findOne({where: {email}})
    if(contato !== null){
        res.send(null)
    }
    const novoContato = await Contato.create({ nome, email, telefone })
    if(!novoContato){
        throw new Error('Usurário não criado')
    }
    res.send(novoContato)
})

// Rota para achar todos os contatos
router.get('/', async (req, res) => {
    const contatos = await Contato.findAll()
    if(!contatos){
        res.send(null)
    }
    res.send(contatos)
})

// Rota para achar contato por nome
router.get('/:nome', async (req, res) => {
    const nome = req.params.nome
    const contato = await Contato.findOne({where: {nome}})
    if(!contato){
        res.send(null)
    }
    res.send(contato)
})

// Roda para deletar contato
router.delete('/:id', async (req, res) => {
    await Contato.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso"})
})

// Rota para atualizar contato
router.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body
    await Contato.update({ nome, email, telefone },{
        where: { id: req.params.id}
    })
    res.status(200).json({message: "Contato atualizado com sucesso"})
})

module.exports = router
