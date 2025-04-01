import mysql2 from  "mysql2/promise";

import dotenv from "dotenv";

dotenv.config();
//createPool is a method provided by mysql2 to create a pool of connection(many user can send a request)
const pool = mysql2.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    connectionLimit:10,//10 user can send request simultaneously
    queueLimit:0,
    waitForConnections:true
});

const checkConnection=async()=>{
    try {
        const connection = await pool.getConnection();
        console.log("Database connection successfully");
        connection.release();//close the connection
    } catch (error) {
        console.log("Error connecting to database");
        throw error;

    }
}

export {pool,checkConnection};