const { Comments, Drawing, User } = require('../models')


const GetPosts = async (req, res) => {
  try {
    const posts = await Comments.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const post = await Comments.create({ ...req.body })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const post = await Comments.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(post)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.comment_id } })
    res.send({ msg: 'Comment Deleted', payload: req.params.comment_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const GetDrawings = async (req,res) =>{
  try {
    const posts = await Drawing.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}



const addDrawing = async (req,res) =>{
  try {
    const post = await Drawing.create({ ...req.body })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const updateProf = async (req,res) =>{
  try {
    let newPic = req.body.profile
    console.log("TRYING TO CHANGE IM IN CONTROLLER to " + req.body.profile)
    const post = await User.update(
      { profile:newPic },
      { where: { id: req.body.userId }, returning: true }
    )
    res.send(post)
  } catch (error) {
    throw error
  }

}

module.exports = {
  GetPosts,
  CreatePost,
  UpdatePost,
  DeletePost,
  GetDrawings,
  addDrawing,
  updateProf
}