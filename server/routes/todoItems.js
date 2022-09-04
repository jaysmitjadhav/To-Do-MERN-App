const router = require('express').Router();

//import todo model
const todoItemsModel = require('../models/todoItems');

// add todo items to database
router.post('/api/item', async (req, res) => {
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        // save new item in DB
        const saveItem = await newItem.save()
        res.status(200).json('Item added successfully');
    }catch(err){
        res.json(err);
    }
})

// get data from database
router.get('/api/items', async (req, res) =>{ 
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})

// update todo item from database using id
router.put('/api/item/:id', async (req, res) => {
    try{
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item updated');
    }catch(err){
        res.json(err);
    }
})

// delete todo item from database using id
router.delete('/api/item/:id', async (req, res) => {
    try{
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item deleted');
    }catch(err){
        res.json(err);
    }
})


// export router 
module.exports = router;