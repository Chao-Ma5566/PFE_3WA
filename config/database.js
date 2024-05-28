import mysql from "mysql";

// import mariadb from "mariadb";

export let pool  = mysql.createPool({
  connectionLimit : 10000,
  host: "localhost:3309",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "admin", // identifiant BDD
    password: "123456a", // le password
    database: "projet_three_body", // nom de la base de donnée
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

