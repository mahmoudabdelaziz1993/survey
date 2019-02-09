const express = require('express');
const Router = express.Router();
//--------------- curent user -----------
Router.get('/current_user',(req,res)=>res.send(req.user));
module.exports = Router;