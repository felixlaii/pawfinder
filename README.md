
<img width="1092" alt="pawfinder-static" src="https://user-images.githubusercontent.com/91552420/206569608-de512dd9-91df-4c8b-8d18-d0310ee37668.png">

for Pet Lovers

Making the process of finding your pawfect friend through adoption / rescue agencies quicker by compiling all information in one application. 


Availability of pets within organizations is dependent on the city and agency. It can become a very lengthy process to sift through multiple websites to view all options. On top of the extensive search, altogether with the requirements to adopt/rescue animals, it can be a very taxing operation. 
Why make the process longer than it should? This application makes the initial steps easier and hopefully speeds up the search in order to match the perfect pet to the perfect owner. 


You have the ability to refine your search by submitting your preferences and it will populate all available information according to your settings. Additionally, users have the ability to manually search for pets as well. 


Front-End Built with
Create-React-App
SASS - Syntactically Awesome Style Sheets

Installation
Follow these steps to run a local instance of PawFinder:
(you'll require node, npm and MySQL already installed)

1. Clone this repo

Back-end setup:
2. Create a new database in MySQL called token and users

3. Install server dependencies
    a. Run npm install from inside the server directory. 
    $ cd server
    $ npm install axios jsonwebtoken express cors

4. Run Migrations
$ npx migrate:latest

5. Run seeds
$ npx knex seed:run

6. Set up environment variables:
Rename `.env_sample` to `.env` and change placeholder values with your own.
   PORT=8080
   JWT_SECRET=<SECRET KEY>
   DB_HOST=<HOST ADDRESS>
   DB_USER=<YOUR DB USERNAME>
   DB_PSWD=<YOUR DB PASSWORD>

7. Start the server:
$ npx nodemon server.js

Set up Front-End:
8. Install client dependencies
    a. run npm install from inside the client directory.
    $ cd ../client
    $ npm install sass react-router-dom@5.3 axios jsonwebtoken

9. Start React-App
$ npm start

