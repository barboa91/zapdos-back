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
    const { id } = req.params;
    console.log(`this is deleting  ${id}`)
    const draw = await Drawing.destroy({ where: { id: id }, returning: true })
    console.log(draw)
    if (draw) {
        return res.status(200).json({ draw });
    }
    return res.status(404).send('Drawing with the specified ID does not exists');
} catch (error) {
    return res.status(500).send(error.message);
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