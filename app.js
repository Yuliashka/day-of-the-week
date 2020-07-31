

//requiring two packages that we installed in node:
const express = require("express");
const bodyParser = require("body-parser");

//creating our app
const app = express();

app.set('view engine', 'ejs'); //tells our app to use EJS as its view engine. It needs to be placed below const app =express();

//creating the first get route on the home route that sends the browser info when a user tries to access the home route:
app.get("/", function (req, res) {
    //res.send("Hello!"); //sending response "Hello" from our server using method send()

    var today = new Date();
    var currentDay = today.getDay();//javascript method getDay() gets the day of the week as a number 1,2 etc.
    var day = "";

    /*
        if (currentDay===1 ) {
            day="Monday";
           
        }
        else if (currentDay===2 ) {
            day="Tuesday";
           
        }
    
        else if (currentDay===3 ) {
            day="Wednesday";
           
        }
    
        else if (currentDay===4 ) {
            day="Thursday";
           
        }
    
        else if (currentDay===5 ) {
            day="Friday";
           
        }
    
        else if (currentDay===6 || currentDay===0 ) {
            day="Weekend!";
           
        }
        */

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Thuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
            default:console.log("Error: current day is equal to: " + currentDay);
    }

    res.render("list", { kindofDay: day }); //when we write this line the express is going to check for the folder views and for the file "list".
    //we render our list.ejs file and then we are passing a js object - a single variable that has the name of kindofDay,
    //and the value that we are giving to it is the value of the var day. 

});

app.listen(3000, function () {
    console.log("Server is working on port 3000");
});



//EMBEDED JAVASCRIPT TEMPLATES: https://ejs.co/
//All information about ejs is here:https://ejs.co/.
//1. Install ejs - $npm install ejs.
//2. We need to set our apps view engine to ejs. We need to tell our app to use ejs: https://github.com/mde/ejs/wiki/Using-EJS-with-Express.
//app.set('view engine', 'ejs');
//3. In order to use EJS or pretty much any of the engines - we need to create a new folder called views. And this is where
//the view engine by default will go and look for the files that we are trying to render. 
//5. Inside the folder we create the ejs file. It's going to be the base template.Inside this ejs file we using HTML code.
//6. So our goal is to change some information (words) in ejs file so that it will display the current day of the week (in our case).
//So we need to pass some information from our app.js file to ejs file. 
//7. Inside our ejs we are going to add a marker thats foing to tell the file that this is where you should place the particular
//variable. The marker for EJS looks like this <%= EJS %> - this is a marker, that tells the file to replace whatever is inside here
//with the value of the variable from app.js.
//We are going to send our variable day to ejs file.
//8. Now instead of res.send file we are going to use the brand new method called res.render(). And the page that we are going
//to render is our list.ejs. And the variable that we pass in is going to be a javascript object: https://github.com/mde/ejs/wiki/Using-EJS-with-Express
//res.render('index', {foo: 'FOO'}); - {foo: 'FOO'} - is the js object. We need to have a key and a value. 

