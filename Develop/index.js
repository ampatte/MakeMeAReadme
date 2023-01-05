// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = //inquirer.prompt
  [
    {//Title of program
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
    }, 
    {//description section
      type: 'input',
      message: 'Please enter a description of this project.',
      name: 'description',
    },
    {//installation section
      type: 'input',
      message: 'Provide instructions on how to install requirements to run this project.',
      name: 'installation',
    },
    {//usage section
      type: 'input',
      message: 'Why did you create this project? How will it be used? What real world problem does it solve?',
      name: 'usage',
    },
    {//contribution section
      type: 'input',
      message: 'Who contributed to this project? How can others contribute?',
      name: 'contribution',
    },
    {//test section
      type: 'input',
      message: 'How can this project be tested?',
      name: 'test',
    }, 
    {//username to input into the Github url
      type: 'input',
      message: 'What is your github username?',
      name: 'github',
    },
    {//email address
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'list',
      message: 'What license would you like to add to this project?',
      name: 'license',
      choices:['Apache','Boost', 'GNUGPLv3', 'ISC', 'MIT', 'Mozilla', 'Unlicense', 'None']
    }
  ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//return fs.writerFileSync(path.join(process.cwd().fileName))
    fs.writeFile(fileName ,(data),(err)=>{
       err ?console.log(err) : console.log('README Completed!')
   })
}
// TODO: Create a function to initialize app
function init() {
   return inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput)) 
    })
}

// Function call to initialize app
init();
