const express=require("express");
const User = require("../models/user");



const userRouter =express.Router();

//add user
userRouter.post("/add",async(req, res)=>{
    try {
        let newuser=new User(req.body);
        let result=await newuser.save();
        res.send({user:result,msj:"user is added"});

    } catch (error) {
        console.log(error);
        
    }
})

//get all users

userRouter.get("/",async(req, res)=>{
    try {
        let result=await User.find();
        res.send({user:result,msj:"user all users added"});

    } catch (error) {
        console.log(error);
        
    }
})
//get user by id
userRouter.get("/:id",async(req, res)=>{
    try {
        let result=await User.findById(req.params.id);
        res.send({user:result,msj:"one user"});

    } catch (error) {
        console.log(error);
        
    }
})




//delete iser
userRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await User.findByIdAndDelete(req.params.id);
        res.send({msj:"user is delete"});

    } catch (error) {
        console.log(error);
        
    }
})
//update user

userRouter.put("/:id",async(req, res)=>{
    try {
        let result=await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({user:"result" ,msj:"user is updated"});

    } catch (error) {
        console.log(error);
        
    }
})
module.exports=userRouter;