# Project Name
> README-generator

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Status](#status)
* [Contact](#contact)

## General info
This is a program that runs in node that allows a user to generate a readme based on their responses from the inquirer package. 

## Screenshots
![program screenshot](code-quiz.PNG)


## Setup
This program requires the inquirer package and the axios package, to install them, run the following commands:
`npm install --save inquirer`
`npm install -- save axios`

## Code Examples
Show examples of usage:
`const api = {
  // TODO: Return promise for GitHub api response to get user data.
  // (Hint: Use axios to send a get request and return the promise created by calling axios.get())
  getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    return axios.get(url)
    // .then((response) => {
    //   console.log(response.data)
      
      // const avatar_url = response.data.avatar_url
      // const login = response.data.login
 
    // })
    
  }
};
`
The above is an axios get request that uses the user's prompt, their github username, to return a response from the gitHub developer API.


## Status
Project is in progress. Feel free to email me with any suggestions or to report any bugs: ianmharris93@gmail.com



## Contact
Created by Ian Harris(https://github.com/iannm93) - ianmharris93@gmail.com - feel free to contact me!

