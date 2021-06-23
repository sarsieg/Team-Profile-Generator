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
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
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
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];

    return inquirer
        .prompt(promptArray);

}

async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function({ name, id, email, title }) {

                    if (title === "Manager") {
                        runInquirerManager().then(function({ officeNumber }) {
                            this.employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Intern") {
                        runInquirerIntern().then(function({ school }) {
                            this.employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        runInquirerEngineer().then(function({ github }) {
                            this.employee = new Engineer(name, id, email, github, title);
                            console.log(github);
                            employeeArray.push(employee);
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

    function displayTitle(employee) {
        if (employee.title === "Manager") {
            console.log(employee.officeNumber);
            return `office number: ${employee.officeNumber}`;
        }

        if (employee.title === "Engineer") {
            return `github: ${employee.github}`;
        }

        if (employee.title === "Intern") {
            return `school: ${employee.school}`;

        }

    }

    function getCardHtml() {
        let html = "";
        for (j = 0; j < maxTimes; j++) {
            console.log(employeeArray[j])
            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
            <h4>${employeeArray[j].name}</h4>
            </div>

            <div class="col card-header">
            <h4>${employeeArray[j].title}</h4>
            </div>
            
            <ul class="list-group list-group-flush text">
            <li class="list-group-item">Email: ${employeeArray[j].email}</li>
            <li class="list-group-item">ID: ${employeeArray[j].id}</li>
            <li class="list-group-item">Email: ${displayTitle(employeeArray[j])}</li>
            </ul>

            </div> `;

        }
        return html;
    }

    let html = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <title>Document</title>

            <style>
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;

            }

            .card {
                margin: 15px;
                color: lightskyblue;
                background-color: white;
                padding: 15px;
                border-radius: 6px;
            }

            .col {
                flex: 1;
                text-align: center;
            }

            .text {
                margin: 15px;
                color: lightskyblue;
                background-color: black;
                padding: 15px;
                border-radius: 6px;
            }
            </style>
        </head>
        
        <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1">
        <h1>My Team</h1>
        </span>
        </nav>
        <div class="row">

        ${getCardHtml()}

        </div>

        
        </body>
        
        </html>
        `;

    console.log(html);
    const fs = require("fs");
    fs.writeFile('newFile.html', html, function(err) {
        if (err) throw err;
        console.log('File is created successfully!');

    });

}
run()