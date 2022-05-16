
const middleware = require('../middleware')
const router = require('express').Router()
const controller = require('../controllers/PostController')

router.post('/',middleware.stripToken,middleware.verifyToken,controller.CreatePost)
router.get('/feed', controller.GetDrawings)
router.get('/feed/:id', controller.GetUserDrawings)
router.post('/addDrawing',controller.addDrawing)
router.put('/changePic',controller.updateProf)
router.delete('/delete/:id',controller.DeletePost)
module.exports = router