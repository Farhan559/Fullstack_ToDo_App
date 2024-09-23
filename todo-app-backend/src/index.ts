import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const prisma = new  PrismaClient();

app.use(express.json());

// Get All Todo Items

app.get('/todos',async(req,res)=>{
    const todos = await prisma.toDo.findMany();
    res.json(todos);
});

// Creat a Todo
app.post('/todos',async (req,res)=>{
    const {title} = req.body;
    const newTodo = await prisma.toDo.create({data:{title}});
    res.status(201).json(newTodo);
});


// Updata a Todo
app.put('/todos/:id',async(req,res)=>{
    const {id} = req.params;
    const {title , completed} = req.body;
    const updataTodo = await prisma.toDo.update({
        where:{id:Number(id)},
        data:{title, completed},
    });
        res.json(updataTodo);
});

// Delete a Todo
app.delete('/todos/:id',async(req,res)=>{
    const {id} = req.params;
    await prisma.toDo.delete({where:{id:Number(id)}});
    res.status(204).json({message:'Delete successfully'});
});


// Start a Sarver
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
