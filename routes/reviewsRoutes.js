const express = require ('express')
const router = express.Router()

router.get('/', function(req, res){
    res.json({
        success:true,
        msg: "aqui se traeran todos los reviews"
    })
})

router.get('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se traera el review cuyo id es : ${req.params.id}`
    })
})

router.post('/', function(req, res){
    res.json({
        success:true,
        msg: `aqui se creara un review`
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editará un review`
    })
})

router.delete('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se eliminara un review`
    })
})

module.exports = router