
// TODO: import fs, path and inquirer modules

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
    }]


// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api.js")
const markdown = require("./utils/generateMarkdown.js")


inquirer.prompt(questions)


.then((answers) => {
    
    console.log(answers.username)
    return api.getUser(answers.username)
    // return axios.get(url)
    
}).then(response => {
    console.log(response.data)
    
})
.catch(() => { })




// TODO: Write function to synchronously write data in the
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
