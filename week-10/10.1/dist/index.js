"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
            console.log('User table created successfully:', result);
        }
        catch (error) {
            console.error('Error creating user table:', error);
        }
    });
}
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const insertQueries = [
                "INSERT INTO users (username, email, password) VALUES ('user1', 'user1@example.com', 'password1');",
                "INSERT INTO users (username, email, password) VALUES ('user2', 'user2@example.com', 'password2');",
                "INSERT INTO users (username, email, password) VALUES ('user3', 'user3@example.com', 'password3');"
            ];
            for (const query of insertQueries) {
                const res = yield client.query(query);
                console.log('Insertion success:', res);
            }
        }
        catch (error) {
            console.error('Error during insertion:', error);
        }
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query("SELECT * FROM users;");
            console.log('All users:', result.rows);
        }
        catch (error) {
            console.error('Error getting users:', error);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createUsersTable();
        yield insertData();
        yield getUsers();
        yield client.end();
    });
}
main();
