const mysql = require('mysql');
const express = require("express");
const Router = express.Router();

var connectionAbsen = mysql.createPool({
    connectionLimit : 10000000,
    host     : 'den1.mysql4.gear.host',
    user     : 'testkeluargapil',
    password : 'Eh7f60c__BsO',
    database : 'testkeluargapil',
    multipleStatements  :   true
    });

connectionAbsen.getConnection((err, koneksi)=>{
    if (err) throw err; // not connected!
    koneksi.query('SELECT id_Kontrasepsi FROM list_kontrasepsi', function (error, results, fields) {
        // When done with the connection, release it.
        koneksi.release();
    
        // Handle error after the release.
        if (error) throw error;
    
        // Don't use the connection here, it has been returned to the pool.
        });
});

exports.connectionAbsen = connectionAbsen;
