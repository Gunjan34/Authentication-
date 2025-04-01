import { pool } from "../db.js";

// Fixed SQL syntax issues
const userTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Fixed 'INT_INCREMENT'
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;


// Function to create a single table
const createTable = async (tableName, query) => {
    try {
        await pool.query(query);
        console.log(`${tableName} table created`);
    } catch (error) {
        console.error(`Error creating ${tableName} table:`, error);
    }
};

// Corrected function to create all tables
const createAllTables = async () => {
    try {
        await createTable('Users', userTableQuery); // Fixed function call
        console.log("All tables created successfully");
    } catch (error) {
        console.error("Error creating tables:", error);
        throw error;
    }
};

export default createAllTables;
