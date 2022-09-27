const express = require('express');
const app = express();

app.use(express.json())

const items = [];

//create items data
app.post('/items',(req,res) => {
    try {
        const item = req.body;
        items.push(item);
        res.send(items);
    }catch(error){
    res.send(error)
    }
})

// read item record
app.get('/items',(req, res) => {
    try {
        res.send(items);
    }catch(error){
        res.send(error)
    }
})
//read item with id
app.get('/items/:id', (req,res) =>{
    try {
    const item = items.find((item) => 
    item.id == req.params.id);
    res.send(item);
    }catch (error) {
        res.send(error);
    }
})
//Update item record
app.put('/items/:id',(req,res) => {
    try {
    const id = req.params.id;
    const index=items.findIndex((item) => item.id == id);
    items[index] = req.body;
    res.send(items);
    }catch(error) {
    res.send(error);
    }

})
//delete a items
app.delete('/items/:id',(req,res) => {
    try{
        const id = req.params.id;
        const index = items.findIndex((item) => item.id == req.params.id);
        items.splice(index, 1);
        res.send("Deleted");
    }catch(error) {
        res.send(error);
    }
})

app.listen(9000, () => {
    console.log("server is running on port 3000")
});
