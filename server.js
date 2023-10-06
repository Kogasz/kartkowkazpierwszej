const cors = require("cors")
const express = require("express")
const mysql = require("mysql")
const app = express()
app.use(cors())


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kartp"
})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("ok")
})

app.get("/odczyt", function(req,res){
    const sql = `SELECT * FROM tabela`

    con.query(sql, function(err,result,fields){
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})
app.get("/dodaj/:przedmiot/:ilosc", function(req,res){
    const przedmiot = req.params.przedmiot
    const ilosc = req.params.ilosc
    
    const sql = `INSERT INTO tabela (Nazwa, Ilosc_lekcji) VALUES ('${przedmiot}','${ilosc}')`

    con.query(sql, function(err,result,fields){
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})
app.get("/filtracja/:min/:max", function(req,res){
    const min = req.params.min
    const max = req.params.max
    
    const sql = `SELECT * FROM tabela WHERE Ilosc_lekcji BETWEEN '${min}' AND '${max}' ORDER BY Ilosc_lekcji ASC`

    con.query(sql, function(err,result,fields){
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})




app.listen(3000)