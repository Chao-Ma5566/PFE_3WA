import mysql from "mysql"

export let pool = mysql.createPool({
    connectLimit: 10000,
    host: "db.3wa.io",
    user: "jianchaoma",
    password: "769240a0983403547ccdb317054fc0e7",
    database: "jianchaoma_3watrade"
})