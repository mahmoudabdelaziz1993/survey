const express = require('express');
const port = process.env.PORT||5000;
const indexRouter = require('./routes/index');


const app = express();
app.use('/',indexRouter);



app.listen(port,()=> console.log(` app on port ${port}!`));