# Employee Tracker

## Description

This application is meant to help employers manage a simple and effective database of the employees, roles, and departments in their company. This project gave me an opportunity to practice working with Node.js, MySQL, and several packages from NPM to help manage, retrieve, and display that data.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application requires [Node.js](https://nodejs.org/en/) and several NPM packages. Once Node has been installed on the user's machine, they can run "npm i" from their command terminal to install the necessary packages. There is a schema file that the user must input into their MySQL database in order to create and structure the database. Upon completion, the user may run "node server.js" to initiate the application.

## Usage

A video demonstration can be seen [here](https://user-images.githubusercontent.com/91210267/141321059-f346505c-5ca6-41a1-af0c-81752d38c3af.mp4).

Once the user has completed the installation steps, the user would run "node server" to initiate the application. Once they have started the program, they will be presented with a series of options.

![Beginning Application](https://user-images.githubusercontent.com/91210267/141320922-6a851f3f-1ebf-48dc-a40a-45cc56212261.png)

The user may select any of the options and the option will either be immediately performed or the user may be prompted with clarifying questions for their request. Once a request has been finished, the user will see a message confirming the action was completed.

![Application Function](https://user-images.githubusercontent.com/91210267/141320954-d1cfd5db-8511-464f-a5c0-c3a21e7ca7a4.png)


## Credits

I completed this project by myself, however I did watch [this](https://www.youtube.com/watch?v=9yeOJ0ZMUYw&t=559s) tutorial from Socratica to learn more about MySQL joins.

For more information about the NPM packages used, please visit:

- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [console.table](https://www.npmjs.com/package/console.table)

## License

MIT License

Copyright (c) [2021] [Kenzie Cottrell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
