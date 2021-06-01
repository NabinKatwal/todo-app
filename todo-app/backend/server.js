let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let dbConfig = require('./database/db')
const createError = require('http-errors')

const taskRoute = require('../backend/routes/task.route')

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(()=>{
    console.log('Database connected')
},
    error => {
        console.log('Database connection failed '+error)
    }    
)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use('/todo-app', taskRoute)

const port = process.env.PORT || 4000
const server = app.listen(port, ()=>{
    console.log('Connected to:'+port) 
})

app.use((req, res, next)=>{
    next(createError(404))
})

app.use(function(err, req, res, next){
    console.error(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})