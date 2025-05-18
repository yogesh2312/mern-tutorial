import asyncHandler from 'express-async-handler';
import Goal from '../model/goalModel.js';
import User from '../model/userModel.js';
export const getGoals= asyncHandler( async (req,res)=>{
    const goals=await Goal.find({user:req.user.id});
    res.status(200).json(goals);
})

export const setGoals=asyncHandler( async (req,res)=>{
    console.log(req.body); 
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }
    const goal=await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.status(200).json(goal);
})



export const updateGoals=asyncHandler( async (req,res)=>{
    const user = await User.findById(req.user.id);
    const goal=await Goal.findById(req.params.id);
    if(!user){
        res.status(401);
        throw new Error('User not found');
    }
    if(!goal){
        res.status(404);
        throw new Error('Goal not found');
    }
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }
    

    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedGoal);
})

export const deleteGoals=asyncHandler( async (req,res)=>{
    const user = await User.findById(req.user.id);
    const goal= await Goal.findById(req.params.id);
    if(!user){
        res.status(401);
        throw new Error('User not found');
    }
    if(!goal){
        res.status(404);
        throw new Error('Goal not found');
    }
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }

    await goal.deleteOne();
    res.status(200).json(req.params.id);
})
