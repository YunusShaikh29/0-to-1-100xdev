import { Client } from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
});

async function createUsersTable() {
    try {
        await client.connect();
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('User table created successfully:', result);
    } catch (error) {
        console.error('Error creating user table:', error);
    }
}

async function insertData() {
    try {
        const insertQueries = [
            "INSERT INTO users (username, email, password) VALUES ('user1', 'user1@example.com', 'password1');",
            "INSERT INTO users (username, email, password) VALUES ('user2', 'user2@example.com', 'password2');",
            "INSERT INTO users (username, email, password) VALUES ('user3', 'user3@example.com', 'password3');"
        ];
        for (const query of insertQueries) {
            const res = await client.query(query);
            console.log('Insertion success:', res);
        }
    } catch (error) {
        console.error('Error during insertion:', error);
    }
}

async function getUsers() {
    try {
        const result = await client.query("SELECT * FROM users;");
        console.log('All users:', result.rows);
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

async function main() {
    await createUsersTable();
    // await insertData();
    await getUsers();
    await client.end();
}

main();
