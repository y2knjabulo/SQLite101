

// import * as sqlite from "sqlite";
// import sqlite3 from "sqlite3";
import express from 'express'
import {addGreeting, deleteGreeting, getGreetings, updateGreeting} from './db.js'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4001;


// http://localhost:4001/api/greetings
//get all the greetings 

app.get('/api/greetings', async (req, res) => {
    const greetings = await getGreetings();
    console.log(greetings);
    res.json({
        greetings
    })

});

// create a route to add a greeting 
app.post('/api/greeting', async (req, res) => {
    const greetings = req.body.greeting;
    const language = req.body.language;
    
    req.json({
        greetings,
        language
    })

});

app.listen(PORT, () => console.log`started on port: ${PORT}`)