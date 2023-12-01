const express=require('express');
const app = express();

const host = 8000;
app.use(express.json());

const cors= require('cors');
app.use(cors());

let MTV=[];
let ind=0;

// Create post
app.post('/createMTV',(req, res)=>{
    const post={
        id : ind +1,
        title : req.body.title,
        category : req.body.category,
        image: req.body.image,
        genre: req.body.genre,
        status : req.body.status
    }
    ind++;
    MTV.push(post)
    res.status(201).json(post)
})

// read all posts

app.get('/getAllMTV',(req, res)=>{
    res.json(MTV);
    
})

app.get('/getMTV/:id',(req, res)=>{
    for(index=0;index<MTV.length;index++){
        const element= MTV[index];
        if(element.id==req.params.id){
            res.json(element);
            return;
        }
    }
    res.json({"msg": "no MTV with id found"});
})

app.patch('/editMTV/:id',(req, res)=>{
    for(index=0;index<MTV.length;index++){
        const element= MTV[index];
        if(element.id==req.params.id){
            res.json(element);

            element.title=req.body.title;
            element.category=req.body.category;
            element.image=req.body.image;
            element.genre=req.body.genre;
            element.status=req.body.status;
            return;
        }
    }
    res.json({"msg": "no MTV with id found"});
    
})

app.delete('/deleteMTV/:id',(req, res) => {
    for(index=0;index<MTV.length;index++){
        const element= MTV[index];
        if(element.id==req.params.id){
            MTV.splice(index, 1);
            res.json({"msg": "Delete  with id"})
            return;
        }
    }
})

app.listen(host,()=>{
    console.log('server started...');
})
