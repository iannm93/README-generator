
// TODO: import fs, path and inquirer modules
const api = require("./utils/api.js")
const markdownFile = require("./utils/generateMarkdown.js")
const fs = require("fs")
const util = require("util")
const fsWriteFile = util.promisify(fs.writeFile)

const inquirer = require("inquirer")
const questions = [
    {
    type: "input",
    
    message: "What is your GitHub username?",
    
    name: "username"
    },
    {
     type: "input",
        
     message: "What is the title of your project?",
        
    name: "title"
    },
    {
    type: "input",
        
    message: "Describe your project",
        
    name: "description"
    },
    {
    type: "input",

    message: "Briefly describe how to use this application",

    name: "usage"
    },
    {
    type : "list",

    messsage: "What is your project liscensed under?",

    choices: ["APACHE" , "GITHUB" , "MIT" , "none"],

    name: "license"
    },
    {
    type: "input",

    message: "Type any commands that need to be run in order to run your program",

    name: "installation"
    },
    {
    type : "input",

    message: "Type any commands you need to run to test your code",

    name: "tests"

    },
    {
    type: "input",

    message: "Who contributed to this project?",

    name: "contribute"
    },
    {
    type: "input",

    message: "What's your email?",

    name: "email"
    }
]


// TODO: import api and generateMarkdown modules from ./utils/


inquirer.prompt(questions)


.then((answers) => {
    // const markdown = `#Profile
    // ![${answers.login} avatar]${answers.avatar_url}
    // Project name: ${title}
    // Project description: ${description} `
   
    const title = answers.title
    const description = answers.description
    console.log(title, description)
    api.getUser(answers.username).then((response)=>{
        
        // console.log(response.data.avatar_url)
        // console.log(response.data.login)
        //const markdown;  = #Profile
        // console.log("title: ", title);
        // console.log("description: ", description)
        const login = response.data.login
        const avatar_url = response.data.avatar_url
        const markdown  = 
    `## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)
## Installation
To install necessary dependencies, run the following command:
\`${answers.installation}\`
## Usage
${answers.usage}
## License
[![License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=blue)](https://opensource.org/licenses/Apache-2.0)
## Contributing
${answers.contribute}
## Tests
To run tests, run the following command:
\`${answers.tests}\`
## Questions
<img src="${avatar_url}" alt="avatar" style="border-radius: 16px" width="50" />
## Contact
Created by [@${login}](${response.data.html_url}) - feel free to contact me! Directly at ${answers.email} `
        console.log(markdown)
        // write the file to a ReadMe
       fsWriteFile("output/README.md", markdown)
        // action(filename, markdown)
    }).then(()=> {
        console.log("worked")
    })
    .catch(error => {
        console.log("could not create file.")
    })
})

// .catch(() => { })




// TODO: Write function to synchronously write data in the
// return writeFile("README.md", markdown)
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
// function writeToFile(fileName, data) {
// }

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
// function init() {

// }

// init();
