// setup our requires
const express = require("express");
const app = express();
const path = require("path");
app.get("/viewData", function(req,res){
    var someData = {    
    name: "John",    
    age: 23,    
    occupation: "developer",    
    company: "Scotiabank"    
    };   
    
    var htmlString = "<!doctype html>" +    
    "<html>" +    
    "<head>" +    
    "<title>" + "View Data" + "</title>" +    
    "</head>" +    
    "<body>" +    
    "<table border='1'>" +    
    "<tr>" +    
    "<th>" + "Name" + "</th>" +    
    "<th>" + "Age" + "</th>" +    
    "<th>" + "Occupation" + "</th>" +    
    "<th>" + "Company" + "</th>" +    
    "</tr>" +    
    "<tr>" +    
    "<td>" + someData.name + "</td>" +    
    "<td>" + someData.age + "</td>" +    
    "<td>" + someData.occupation + "</td>" +    
    "<td>" + someData.company + "</td>" +    
    "</tr>" +    
    "</table>" +    
    "</body>" +    
    "</html>";    
    
    
    res.send(htmlString);
    
    });
app.listen(3000);
