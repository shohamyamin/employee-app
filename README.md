# employee-app

An Server-Client application that allows the HR department to search for employees and view their details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- git
- Node.js

### Installing

Clone the project

```
git clone https://github.com/shohamyamin/employee-app.git
cd employee-app

```

Install dependencies

```
cd client && npm install && cd ..
cd server && npm install && cd ..

```

## Deployment

Run server:
cd into server directory and run

```
npm start
```

Run client:
cd into client directory and run

```
npm start
```

Go to [localhost:4200](http://localhost:4200) and login with:

- username - `shoham`
- password - `password`

Search for any one of the Employees information from this table:

| ID  | Name  | Email           | Role                |
| --- | ----- | --------------- | ------------------- |
| 1   | David | david@gmail.com | Software Developer  |
| 2   | Yossi | yossi@gmail.com | Software Developer  |
| 3   | Haim  | haim@gmail.com  | Electrical Engineer |
| 4   | Orit  | orit@gmail.com  | Director of R&D     |
| 5   | Yuval | yuval@gmail.com | Software Developer  |
| 6   | Roi   | roi@gmail.com   | Software Developer  |

For Example:
Search `Software Developer`

Click on one of the Employees in the table to get more information about this Employee

## Built With

- [angular](https://angular.io) - Angular 9
- [nodejs](https://nodejs.org) - Node.js framework

## Additional libraries

- [bycrpt](https://www.npmjs.com/package/bcrypt) - it used for hashing the passwords
- [lowdb](https://github.com/typicode/lowdb) - it used for Database management

## Sources of information

- [AngularDoc](https://angular.io/docs) - Angular Documentation and tutorials
- [w3schools](https://www.w3schools.com/html/) - HTML tutorials
- [stackoverflow](https://stackoverflow.com/questions)
- [Google](https://www.google.com/)
- [GoodREADME](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - how to write a good README

## Authors

- **Shoham Yamin** - [shohamyamin](https://github.com/shohamyamin)
