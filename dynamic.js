// setup our requires
const { response } = require("express");
const express = require("express");
const app = express();

var someData = [
    {
        author: '',
        name: "John with blank",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    },
    {
        name: "Sara",
        age: 23,
        occupation: "Java developer",
        company: "TD"
    },
    {
        author: true,
        name: "Doe",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    },
    {
        name: "Sara",
        age: 23,
        occupation: "Java developer",
        company: "TD"
    },
    {
        author: true,
        name: "Sara",
        age: 23,
        occupation: "Java developer",
        company: "TD"
    }
];

//Add express handlebar
const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs.engine({ extname: 'hbs' }))
//app.engine('.hbs', exphbs.create({ extname: 'hbs' }))
app.set('view engine', '.hbs')


//New route for handlebar
app.get('/viewhbs', (req, res) => {
    res.render('viewData', {
        data: someData,
        layout: false
    })
})




const path = require("path");
app.get("/viewData", function (req, res) {


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
