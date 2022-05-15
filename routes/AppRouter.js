
const Router = require('express').Router()

const controller = require('../controllers/AuthController')

Router.get('/test',controller.Test)

// Router.post('/login', controller.Login)
// Router.post('/register', controller.Register)
// const TwertRouter = require('./TwertRouter')
// const CommentRouter = require('./CommentRouter')
// Router.use('/register', UserRouter)
// Router.use('/feed', TwertRouter)
// Router.use('/comments', CommentRouter)
module.exports = Router