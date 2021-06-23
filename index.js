const inquirer = require("inquirer");

const Engineer = require("./Lib/Engineer");
const Employee = require("./Lib/Employee");
const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");

const fs = require("fs");

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "list",
        message: "What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];


}