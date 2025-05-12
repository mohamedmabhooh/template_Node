//npm i dotenv
//npm i morgan
const express= require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'config.env'});
mongoose.connect(process.env.db_conect).then((conn)=>{
    console.log(`db connected ${conn.connection.host}`);
}).catch((err)=>{
    console.error(`error db = ${err}`)
    process.exit(1);
});
const app = express();
//npm i dotenv
//npm i morgan
if(process.env.NODE_ENV=='DEVELOPMENT'){
    app.use(morgan('dev'));
}
app.get('/',(req,res)=>{
    res.send('hallo on node.js');
});
app.listen(process.env.PORT,()=>{
    console.log('hallo worled');
});