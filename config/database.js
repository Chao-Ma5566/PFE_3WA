import { config } from 'dotenv';
import mysql from "mysql";

config();

// import mariadb from "mariadb";

export let pool  = mysql.createPool({
            connectionLimit : 10000,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.DATABASE_USER, 
            password: process.env.DATABASE_PASSWORD, 
            database: process.env.DATABASE_NAME,
});

export const asyncQuery = async (sql, params = []) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params, (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}

