const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    console.log("looking for user")
    const user = await User.findOne({
      where: { userName: req.body.username },
      raw: true
    })
    console.log('checking')
    if (user && (await middleware.comparePassword(user.password, req.body.password))
    ) {
      console.log('loging in')
      let payload = {
        id: user.id,
        username: user.userName,
        profile: user.profile,
      }

      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}
const Test = async (req,res) =>{
  console.log('test complete')
  return res.send({"got":"get"})
}

const Register = async (req, res) => {
  try {
    const { username, password } = req.body
    let x = password
    let c = await middleware.hashPassword(x)
    const user = await User.create({ userName:username, password:c, gamesPlayed:0 })
    res.send(user)
  } catch (error) {
    throw error
  }
}


const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  Test,
  CheckSession
}