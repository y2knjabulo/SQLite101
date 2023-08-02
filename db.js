import * as sqlite from "sqlite";
import sqlite3 from "sqlite3";


console.log("start")

const db = await sqlite.open({
    filename: "./101.db",
    driver: sqlite3.Database,
});

await db.migrate()
console.log('...')

// call the query using avail
// create a function that returns all the greetings from the db
async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
}

const result = await getGreetings();

// console.log(result)

// create a function that delete a specific string
async function deleteGreeting(language) {
    const sql = `delete from greetings where language = ?`
    await db.run(sql, [language])
}

// create a function that adds a new greeting
async function addGreeting(language, greeting) {
    // sql statement type - insert
    const sql = `insert into greetings (language, greeting) values (?,?)`;
    await db.run(sql, [language, greeting]);
}


// create a function that updates a given greeting
async function updateGreeting(language, greeting, id) {
    const sql = `update greetings set language = ?, greeting = ? where id = ?`;
    await db.run(sql, [language, greeting, id])
}

export {
        addGreeting, deleteGreeting, getGreetings, updateGreeting
}
