const mysql = require('mysql2/promise');

const connection = async()=>{
    const db = await mysql.createConnection({
        user:'avnadmin',
        password:"AVNS_s12h8cWIrkWw_onYoPS",
        host:"mysql-kritsana-testdb.a.aivencloud.com",
        database:'library',
        port:"26881"
    })
    return db
    
};

module.exports = connection;
