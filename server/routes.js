import express from "express"
import mongo_conn from "./mongodb/db.js";
import Taskmodel from "./mongodb/model.js"
const router=express.Router();


router.get("/",async(req,res)=>{
    try {
        const all_tasks=await Taskmodel.find({});
        res.send(all_tasks)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/",async(req,res)=>{
    try {
        const task=req.body;
        const add_task=new Taskmodel(task);
        const saved_task=await add_task.save();
        res.send(saved_task)
    } catch (error) {
        res.send(error.message)
    }
})


router.delete("/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const deleted_task=await Taskmodel.findByIdAndDelete({_id:id});
        res.send(deleted_task)
    } catch (error) {
        res.send(error.message)
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const updated_task=await Taskmodel.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.send(updated_task)
    } catch (error) {
        res.send(error.message)
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const updated_task=await Taskmodel.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.send(updated_task)
    } catch (error) {
        res.send(error.message)
    }
})



export default router