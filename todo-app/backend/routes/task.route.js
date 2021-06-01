let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let taskSchema = require('../Models/Task')

router.route('/create-todo').post((req, res, next)=>{
    taskSchema.create(req.body, (error, data)=>{
        if (error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})

router.route('/').get((req, res)=>{
    taskSchema.find((error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

router.route('/edit-task/:id').get((req, res)=>{
    taskSchema.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

router.route('/update-task/:id').put((req, res, next)=>{
    taskSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    }, (error, data)=>{
        if (error){
            return next(error)
            console.log(error)
        }else{
            res.json(data)
            console.log('Task updated successfully')
        }
    })
})

router.route('/delete-task/:id').delete((res, req, next)=>{
    taskSchema.findByIdAndRemove(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.statusCode(200).json({
                msg:data
            })
        }
    })
})

module.exports = router