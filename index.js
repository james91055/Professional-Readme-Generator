// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your E-mail address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "discription",
    message: "What is the discription of your project?",
  },
  {
    type: "input",
    name: "contents",
    message: "What is the contents of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install your application?",
  },

  {
    type: "input",
    name: "Usage",
    message: "What does the usage of this project?",
  },
  {
    type: "input",
    name: "license",
    message: "What license does your project have?",
    choices: ["Eclipse", "IBM", "MIT", "Mozilla", "Zlib"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributor in this project?",
  },
  {
    type: "input",
    name: "test",
    message: "How to test your project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName, data));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerAnswer) => {
    console.log("Working on your ReadMe, please wait:)");
    writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswer }));
  });
}

// Function call to initialize app
init();
