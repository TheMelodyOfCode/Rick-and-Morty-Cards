
/*  Reminder: We work with the modul express as webserver
    and esm Ecmascript to be able to use import and export etc...... */
import express from "express";

export let dbRoutes = express.Router();

import {db} from "../database/dbConnection.js";


/* We have set a prefix in the app.js to http://localhost:3001/hardcoded */
dbRoutes.get("/", (req, res)=>{
    console.log(req.query);
    res.send("GET Profile");
    
});

dbRoutes.get("/allUsers", (req, res)=>{
    db.query(
       'SELECT * FROM `users`',
       function(err, results, fields) {

        res.status(200).json(results);
        //    res.set({
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Credentials" : true
        // }).json(results)
        //   console.log(results); 
        }  
  )     
});

