const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

// use express.json to get data into json format
app.use(express.json());

// PORT
const PORT = process.env.PORT || 5050;

// import routes
const TodoItemRoute = require('./routes/todoItems');

// Connect mongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

// Add port
app.listen(PORT, () => console.log("Server connected"));