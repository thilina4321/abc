const User = require('../model/user')

exports.getUser = async(req,res)=>{
    
    const users = await User.find()

    res.send(users)
}

exports.postUser = async(req,res)=>{

    const userData = req.body
    const user = await User.create(userData)
    

    res.send({user})
}



exports.updateUser = async(req,res)=>{
    const upUser = req.body
    const id = req.params.id

    const user = await User.findByIdAndUpdate(id,
         {...upUser}, {new:true})


    res.send(user)
}


exports.deleteOne = async(req,res)=>{

    const id = req.params.id
    const user = await User.findByIdAndDelete(id)

    res.send(user)
}












