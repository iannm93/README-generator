
// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer")

// TODO: import api and generateMarkdown modules from ./utils/
inquirer.prompt([
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

]).then((answers) => {
    console.log(answers.username)
    const url = `https://api.github.com/users${answers.username}`
 })
.catch(() => { })

// TODO: import api and generateMarkdown modules from ./utils/

// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }
// const questions = [];

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
