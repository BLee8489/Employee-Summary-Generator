const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const allEmployees = [];

// Ask user questions about each employee
function getEmployeeRole() {
    inquirer.prompt([{
            type: "list",
            message: "Please select employee's role.",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role",
        }, ])
        .then((res) => {
            console.log(res);
            if (res.titleInput === "Manager") {
                addManager()
            } else if (res.titleInput === "Engineer") {
                addEngineer()
            } else {
                addIntern()
            }
        })
}

// Ask the user if they want to add an employee
function addEmployee() {
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "confirmEmployee",
        default: true
    }]).then((res) => {
        //console.log(res)

        if (res.confirmEmployee === true) {
            getEmployeeRole();
        } else {
            renderMain();
        }
    });
};

// Function to add manager 
function addManager() {
    inquirer.prompt([{
            type: "input",
            message: "What is the Manager's name?",
            name: "managername",
        }, {
            type: "input",
            message: "Please enter Manager employee ID.",
            name: "managerID",
        }, {
            type: "input",
            message: "Please enter the Manager's email.",
            name: "email"
        }, {
            type: "input",
            message: "Please provide office phone number for the Manager.",
            name: "officeNumber",
        }, ])
        .then((managerRes) => {
            console.log(res);
            const newManager = new Manager(res.managerName, res.managerID, res.email, res.officeNumber);
            allEmployees.push(newManager);
            addEmployee();
        })
}
// Function to add Engineer
function addEngineer() {
    inquirer.prompt([{
                type: "input",
                message: "What is the Engineer's name?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "Please enter Engineer employee ID.",
                name: "engineerID",
            },
            {
                type: "input",
                message: "Please enter Engineer's email.",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "Please enter Engineer's Github username.",
                name: "engineerGithub",
            },
        ])
        .then((engineerRes) => {
            console.log(res);
            const newEngineer = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerGithub);
            allEmployees.push(newEngineer);
            addEmployee();
        })
}
// Function to add new Intern
function addIntern() {
    inquirer.prompt([{
            type: "input",
            message: "What is the Intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "Please enter Intern's employee ID.",
            name: "internID"
        },
        {
            type: "input",
            message: "Please enter Intern's email.",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Please enter Intern;s school.",
            name: "internSchool"
        },
    ]).then((res) => {
        console.log(res);
        const newIntern = new Intern(res.interName, res.internID, res.internEmail, res.internSchool);
        allEmployees.push(newIntern);
        addEmployee();
    });
};





])







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```