// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {//Title of program
        type: 'input',
        message: 'What is the title of this program?',
        name: 'title',
      }, 
      {//description section
        type: 'input',
        message: 'Please enter a description of this program.',
        name: 'description',
      },
      {//installation section
        type: 'input',
        message: 'What are the installation instructions to run this program?',
        name: 'installation',
      },
      {//usage section
        type: 'input',
        message: 'Why did you create this program? How will it be used? What real world problem does it solve?',
        name: 'usage',
      },
      {//contribution section
        type: 'input',
        message: 'How can others contribute to this program?',
        name: 'contribution',
      },
      {//test section
        type: 'input',
        message: 'How can this program be tested?',
        name: 'test',
      }, 
      {//username to input into the Github url
        type: 'input',
        message: 'What is your Github username?',
        name: 'GitHub',
      },
      {//email address
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename , JSON.stringify(data, null, '\t'),(err)=>{
        err ?console.log(err) : console.log('Completed writing to file')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then((userInput) => {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
        
    })
}

// Function call to initialize app
init();
