import mysql from "mysql";

// import mariadb from "mariadb";

export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "localhost:3306",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "root", // identifiant BDD
    password: "1472589a", // le password
    database: "sys", // nom de la base de donnée
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