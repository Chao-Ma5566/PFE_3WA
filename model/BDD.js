import { config } from 'dotenv';
import mysql from "mysql";

config();

class BDD {
    constructor(){
        this.pool = mysql.createPool({
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.DATABASE_USER, 
            password: process.env.DATABASE_PASSWORD, 
            database: process.env.DATABASE_NAME,
            connectionLimit : 10,
         });
    }
    
    async asyncQuery(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err);
                }
                connection.query(sql, params, (error, elements) => {
                    connection.release(); // Libérez la connexion après usage
                    if (error) {
                        return reject(error);
                    }
                    return resolve(elements);
                });
            });
        });
    }
}

export default BDD