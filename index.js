// Packages required for this application 
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Please input the title of your program",
        name:"title",
    },
    {
        type: "input",
        message: "Please enter a Description of your program",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter the Installation Instructions for your program",
        name: "installation",
    },
    {
        type: "input",
        message: "Please enter the Usage Information for your program",
        name: "usage",

        type: "input",
        message: "Please enter the Contribution Guidelines for your program",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter the Test Instructions for your program",
        name: "test",
    },
    {
        type: "list",
        message: "Please choose a license for your program",
        choice: [],
        name: "license",
    },
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "github",
    },
    {
        type: "input",
        message: "Please enter your email",
        name: "email",
    }

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./output/README.md', readMePageContent, (err) => 
    err ? console.log(err) : console.log('Successfully created README.md!') )



}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
        ...questions
    ])
    .then((response) => {
        const readMePageContent = generateMarkdown(response);
    });

}

// Function call to initialize app
init();
