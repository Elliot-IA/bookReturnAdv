const express = require("express"); 
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, ".")));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

console.log("Portal Server Initiated! Working Directory (for server js file):"+path.join(__dirname, "."));

const PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log("Server started on port 8080");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/_.html");        
});
app.get("/page927", function(req, res){     //Acsess the super secret admin page
    console.log("returning counts...");
    res.json(counts);
});

var counts = {"visits": 0,"estimations":0,"appointments":0}; 

/*
console.log("Attempting to connect to database...");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Napoleon1234:socialEntreprenuer78@activity.xleee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    console.log("connection established!");

    collection = client.db("act").collection("aSub");

    collection.findOne({timesOpened:0}).then(data=>{
        console.log("All Collection Data:");
        console.log(JSON.stringify(data));
    }).catch(err=>{
        console.log(err)
    });

    // perform actions on the collection object
    //client.close();
});
*/

app.post("/", function(req, res){
    if(req.body.command == "incrementVisits"){
        console.log("incrementVisits");
        counts.visits += 1;
    }else if(req.body.command == "incrementEstimations"){
        console.log("incrementEstimations");
        counts.estimations += 1;
    }else if(req.body.command == "incrementAppointments"){
        console.log("incrementAppointments");
        counts.appointments += 1;
    }else if(req.body.command == "decrementAppointments"){
        console.log("decrementAppointments");
        counts.appointments -= 1;
    }
    res.status(204).send();
});













