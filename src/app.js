const https = require('https');
const httpsOptionsAsync = require('rec.la').httpsOptionsAsync;
const express = require('express');
const util = require('util');
const app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.20.42.150',
  user     : 'sv',
  password : '12345',
  database : '19004180',
  port: 3306
});

const query = util.promisify(connection.query).bind(connection);

console.log(query);



app.get("/add",async (req,res)=>{
    try {
        const {n,d} = req.query;
    const data = await query(`insert into dht(nhietdo,doam) values(${n},${d})`);
    return res.status(200).json({message:"them thanh cong"})       
    } catch (error) {
        
    }
})

app.set("/get", async (req,res) =>{
    try {
        const data = await query("SELECT * FROM dht LIMIT 10");
    return res.status(200).json({data})       

    } catch (error) {
        
    }
})

app.listen(5000,()=>{
    console.log("start server with port 5000");
})