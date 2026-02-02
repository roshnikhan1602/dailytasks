const express=require('express');
const app=express();
const port=process.env.PORT||5000;

app.use(express.json());

let tasks=[
    {id:1,title:'task 1',description:'Preparation for lab exam'},
    {id:2,title:'task 2',description:'Paper Correction'},
    {id:3,title:'task 3',description:'Academic council meeting'},
];

app.get('/tasks',(req,res)=>{
    res.json(tasks);
});

app.get('/tasks/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const task=tasks.find((t)=>t.id===id);

    if(!task){
        res.status(404).json({message:'Task not found'});
    }else{
        res.json(task);
    }
});


app.post('/tasks',(req,res)=>{
    const {title,description}=req.body;
    const id=tasks.length+1;
    const newTask={id,title,description};
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const{title,description} = req.body;
    const task=tasks.find((t)=>t.id===id);

      if(!task){
        res.status(404).json({message:'Task not found'});
    }else{
        task.title=title;
        task.description=description;
        res.json(task);
    }
});

app.delete('/tasks/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=tasks.findIndex((t)=>t.id===id);

    if(index=== -1){
        res.status(404).json({message:'Task not found'});
    }else{
        task.splice(index, 1);
        res.json({message:'Task deleted'});
    }
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});