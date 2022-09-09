
/*  Reminder: We work with the modul express as webserver
    and esm Ecmascript to be able to use import and export etc...... */
import express from "express";

export let hardCodedRoutes = express.Router();

/* We have set a prefix in the app.js to http://localhost:3001/hardcoded */
hardCodedRoutes.get("/", (req, res)=>{
    console.log(req.query);
    res.send("GET Profile");
    
});

/*  here we have chained all routes for get post delete put that
    get requested for /usersHardCoded */
hardCodedRoutes.route("/userInfo").get((req,res)=>{
    res.json(
        
        [
            {  
                id: 1,
                name: "Morty Smith",
                message: "jeeeez",
            },
            {  
                id: 2,
                name: "Summer Smith",
                message: "Biaaatch" 
            },
        ]
);
    }).post((req, res)=>{
        res.json("post userdata wurde geschickt");
    }).put((req, res)=>{
        res.json("PUT userdata wurde geupdated");
    }).delete((req, res)=>{
        res.json("delete userdata wurde gelöscht");
    })


/*  Query route */
hardCodedRoutes.get("/profil", (req, res)=>{

    console.log(req.query); // shows the whole query that was put in the url
    /* let's say the query was /profil?name=Rick&age=35 */
    console.log(req.query); // shows the whole query that was put in the url
    console.log(req.query.name); // shows the whole query that was put in the url
    // To work with this we could put that in a variable etc.....
    const userdata = req.query.name;
    if (userdata === "Rick") {
        res.send("your are a drunk scientist!");
    } 
    res.send("test to return query parameter");
});


/*  dynamic route
    the parameter :userid is dynamic. It will take everything you put behind
    user/  and rout to it. 
    Therefor this function has to be put on the end of the code. */
    hardCodedRoutes.get("/:userid", (req, res)=>{

    console.log(req.params.userid);
    res.send("GET Profil Userid");

});

