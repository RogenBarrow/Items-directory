const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'items_directory',
    password: 'Nathifa',
    port: 8033,
});

//Connect database
const connect = async () => {
    try {
        await client.connect()
    } catch (error) {
        console.log("PG-DB ERROR: ", error);
    }
};

// Disconnect from Database
const disconnect = async () => {
    try {
        await client.end()
    } catch (error) {
        console.error("PG-DB ERROR: ", error);
    }
};

//database calls
const getAllItems = () => (
    client
        .query("select * from itemdirectory")
        .then((allItemsfromDatabase) => {
            return allItemsfromDatabase
        })
        .catch((error) => {
            throw error;
        })
);

const database = {
    connect,
    disconnect,
    getAllItems,
};




module.exports = database;