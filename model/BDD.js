import mysql from "mysql";

class BDD {
    constructor(){
        this.pool = mysql.createPool({
            connectionLimit : 10000,
            host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
            user: "jianchaoma", // identifiant BDD
            password: "769240a0983403547ccdb317054fc0e7", // le password
            database: "jianchaoma_projetdefin", // nom de la base de donnée
        });
    }
    
    async asyncQuery(sql, params = []){
        return new Promise((resolve, reject)=>{
            this.pool.query(sql,params, (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
}

export default BDD