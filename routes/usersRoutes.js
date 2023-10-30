const express = require ('express')
const router = express.Router()

router.get('/', function(req, res){
    res.json({
        success:true,
        msg: "aqui se traeran todos los users"
    })
})

router.get('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se traera el user cuyo id es : ${req.params.id}`
    })
})

router.post('/', function(req, res){
    res.json({
        success:true,
        msg: `aqui se creara un user`
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editará un user ${req.params.id}`
    })
})

router.delete('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se eliminara un user ${req.params.id}`
    })
})

module.exports = router