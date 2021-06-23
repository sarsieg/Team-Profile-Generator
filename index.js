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

    return inquirer
        .prompt(promptArray);
}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school did you go to?",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your GitHub?",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerManager() {
    const promptArrayn = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];

    return inquirer
        .prompt(promptArray);

}

async function run() {
    let EmployeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function({ name, id, email, title }) {

                    if (title === "Manager") {
                        runInquirerManager().then(function({ officeNumber }) {
                            this.Employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            EmployeeArray.push(Employee);
                            resolve("done");
                        });

                    } else if (title === "Intern") {
                        runInquirerIntern().then(function({ school }) {
                            this.Employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            EmployeeArray.push(Employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        runInquirerEngineer().then(function({ github }) {
                            this.Employee = new Intern(name, id, email, github, title);
                            console.log(github);
                            EmployeeArray.push(Employee);
                            resolve("done");
                        });

                    }

                }).catch(function(err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

    function displayTitle(Employee) {
        if (Employee.title === "Manager") {
            console.log(Employee.officeNumber;
                return `office number: ${Employee.officeNumber}`;
            }

            if (Employee.title === "Engineer") {
                return `github: ${Employee.github}`;
            }

            if (Employee.title === "Intern") {
                return `school: ${Employee.school}`;

            }