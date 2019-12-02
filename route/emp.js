var express = require('express');
var emp = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : "172.18.4.115 ",
    database : "devops",
    user : "root",
    password : "root",
    port : 9099
});

connection.connect();
emp.use(express.json());

function executeQuery(query,res){
    connection.query(query,(err,result)=>{
        if(err == null) res.send(JSON.stringify(result));
        else res.send(JSON.stringify(err));
    })
}

emp.get("/",(req,res)=>{
    var query = `select * from Emp`;
    executeQuery(query,res);
})

emp.get("/:id",(req,res)=>{
    var query = `select * from Emp where id=${req.params.id}`;
    executeQuery(query,res);
})
emp.delete("/:id",(req,res)=>{
    var query = `delete from Emp where id=${req.params.id}`;
    executeQuery(query,res);
})
emp.put("/:id",(req,res)=>{
    var query = `update Emp set name='${req.body.name}', email='${req.body.email}', age=${req.body.age} where id=${req.params.id}`;
    executeQuery(query,res);
})
emp.post("/",(req,res)=>{
    var query = `insert into Emp (name, email,age) values('${req.body.name}','${req.body.email}',${req.body.age})`;
    executeQuery(query,res);
})

module.exports = emp
