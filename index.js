

import * as sqlite from "sqlite";
import sqlite3 from "sqlite3";
import express from 'express'
import {getGreetings, addGreetingS} from './db.js'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4001;


// http://localhost:4001/api/greetings
//get all the greetings 

app.get('/api/greetings', async (reg, res) => {
    console.log('start')
    res.json({
        greetings : []
    })

});

// create a route to add a greeting 
// app.post('/api/greeting', async (req, res) => {
//     const greetings = req.body.greeting;
//     const language = req.body.language;
    
//     req.json({
//         greetings,
//         language
//     })

// });

app.listen(PORT, () => console.log`started on port: ${PORT}`)
const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});
// create a function that returns all the greetings from db
async function getGreetings() {

    const result = await db.all('select * from greetings');
    return result;
}

console.log("===============")

await addGreeting('Venda', 'Ndaa');
const result = await getGreetings()
console.log(result)