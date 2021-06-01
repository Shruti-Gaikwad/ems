const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "2612",
    host: "localhost",
    port: 5432,
    database: "shrutidb"

})


//client.connect()
//.then(() => console.log('Connected Successfully'))
//.then(()=> client.query('select * from employee where name = $1',["PRADIP SHINDE"]))
//.then(results => console.table(results.rows))
//.catch(e => console.log(e))
//.finally(()=> client.end())

const express = require('express');
const bodyParser = require('body-parser');

const business = require('./libs/business/business.route');
const { request } = require('express');

const app = express();
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials','true');
    res.header('Access-Control-Allow-Methods','GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Length');
    res.header('Access-Control-Allow-Origin','Accept,Authorization,Content-type,X-Requested-With,Range');
    if (req.method == 'OPTIONS'){
        return res.send(200);
    }else{
        return next();
    }
});

app.use(bodyParser.json());
business.businessRoutes(app);

app.listen(3000,function (){
    console.log('App listening on port %s',3000)
});