# Rick-and-Morty-Cards
REACT Node.js &amp; MySQL - Project

I'm still new to REACT and therefore I'm using class components.
This is a basic beginner project to learn more about REACT.
The main focus about, what to understand and learn form this project was the following:

React Components, how they render, how they rerender and the basic composition patterns one needs for REACT.

Setting up a webserver and routing system with Node.js in order to create and implement a database in React 
and fetch data from that db, instead of fetching data from a simple url.


**Getting started:**

In order to check this project out you need to do the following:

** Database**
I'm using  a MySQL DB with XAMPP.
Just install XAMPP.
To import all the userinformation etc check ou the file in:
server/database/MySQL-dbTable-Users-to-import/crudapp.sql
This file contains all the necessary tables I created for this project.
Don't forget to create a normal DB user with limited access to the db, so you won't need to use root.

After the download put the project in the htdocs Folder.
Under Windows C:\xampp\htdocs\

After you've done that, go and find the folder server/database and then the file dbConnection.js
Here you need to put the name of the DB and your DB username and password into the function conToMySQL1.
Normally the pw and username would NOT be in plain text but since it's a local installation for testing that's no problem.

** Node.js **
You will need a Node.js installation 
I'm using version 16.17.0 LTS
check out the package.json file for all the dependencies needed for this project.
The webserver is used on localhost:3001 and added as a proxy to REACT
start the webserver first
npm start

** REACT **
localhost:3001 
npm start

