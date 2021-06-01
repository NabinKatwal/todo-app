const mongoose = require('mongoose');
const Schema = mongoose.Schema

let taskSchema = new Schema({
    taskName: {
        type: String
    },
    category: {
        type: String
    },
    priority:{
        type: Number
    }
},{
    collection: 'tasks'
})

module.exports = mongoose.model('Task', taskSchema)