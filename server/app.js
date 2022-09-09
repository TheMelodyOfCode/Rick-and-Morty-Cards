console.log(' ./app.js - started with those dependencies: ESM , MySQL, EXPRESS');

/*  IMPORTANT - REACT INFO !!
    to use react in combination with the server you need to add the 
    propert proxy to the react package.json file
    "proxy": "http://localhost:3001"    	                */

/* to import the startScript configuration  */
import {server, port} from "./startScript";

/* Route imports */
import {hardCodedRoutes} from "./routes/hardCodedRoutes.js";
import {dbRoutes} from "./routes/dbRoutes.js"

// use route imports with prefix
server.use("/hardcoded", hardCodedRoutes);
server.use("/dynamic", dbRoutes);


// Redirects for route from REACT
server.get("/usersHC", (req, res)=>{
        res.redirect("/hardcoded/userInfo");
});
server.get("/allDBUsers", (req, res)=>{
        res.redirect("/dynamic/allUsers");
});


// import {db} from "./database/dbConnection.js";

// // route to users in database
// server.get("/db", (req, res)=>{
//          db.query(
//             'SELECT * FROM `users`',
//             function(err, results, fields) {
//                 res.status(200).json({users: results})
//             //    console.log(results); 
//              }  
//        )     
// });


// 404 Handler
server.use((req, res) => {

    res.status(404).json(
    {
            status: "Die Seite existiert nicht! 404 Error"
    })
})



/*  get the server and listen on port 3001 as declared in server/startScript.js 
    listen ahs to be on the end of the script - always!*/
server.listen(port, () => {
    console.log(`Web-Server runs on Port: ${port} , well done!`);
})