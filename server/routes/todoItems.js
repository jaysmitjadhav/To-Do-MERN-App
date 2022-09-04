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

// export router 
module.exports = router;