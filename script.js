#!/usr/bin/env node

// Usage: npx create-my-template my-app

const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');
const figlet = require('figlet');

// The first argument will be the project name.
const projectName = process.argv[2];

// Create a project directory with the project name.
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

// A common approach to building a starter template is to
// create a `template` folder which will house the template
// and the files we want to create.
const templateDir = path.resolve(__dirname);
fs.cpSync(templateDir, projectDir, { recursive: true });

const projectPackageJson = require(path.join(projectDir, 'package.json'));

// Update the project's package.json with the new project name
projectPackageJson.name = projectName;

fs.writeFileSync(
    path.join(projectDir, 'package.json'),
    JSON.stringify(projectPackageJson, null, 2)
);

// remove the template's package-lock.json and script.js
fs.unlinkSync(path.join(projectDir, 'script.js'));

// remove figlet in dependencies
delete projectPackageJson.dependencies.figlet;

// Run `npm install` in the project directory to install
// the dependencies. We are using a third-party library
// called `cross-spawn` for cross-platform support.
// (Node has issues spawning child processes in Windows).
spawn.sync('npm', ['install'], { stdio: 'inherit' });

figlet.text("Hackburger!!", {
    font: "Cyberlarge",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
},
    function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
    }
);


console.log(`Created ${projectName} at ${projectDir}`);
