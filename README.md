[![Heroku App Status](http://heroku-shields.herokuapp.com/ticketing-system-api)](https://ticketing-system-api.herokuapp.com)
<img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fticketing-system-api.herokuapp.com%2F">

# Ticketing-system
Ticketing System is a movie theater based ticket management system created for Zomentum placement hiering assignment.

### Hosting link
https://ticketing-system-api.herokuapp.com

### Features
- [X] Signup user with phone number.
- [X] Login with phone number and password in body.
- [X] Login with token if saved in cache and passed in header along with phone number in body.
- [X] Login with refresh token by assigning new token if refresh token is passed successfully in header along with phone number in body.
- [X] Unauthorize login if non of the token,refresh token and password is provided along with phone number for authentication.
- [X] Bycrypting password for secure storage of login credentials.
- [X] Forbidding login in case of unregistered phone number.
- [X] Bad request in case of input field validation are incorrect.
- [X] Create a ticket using name and phone number and timing.
- [X] Update a ticket using name and phone number and timing.
- [X] Delete a ticket using name and phone number and timing.
- [X] Display all ticket using name and phone number and timing.
- [X] Expire a ticket after 8 hours.
- [X] Create a theater hall authenticting admin rights.
- [X] Get Vacant seats in all halls.


### How to Setup?
**Step 1:- Install nodejs**
* Download and follow the steps in the given [link](https://nodejs.org/en/download/) to install nodejs.

**Step 2:- Install mongodb**
* Download and follow the steps in the given [link](https://docs.mongodb.com/manual/administration/install-community/) to install mongodb.

**Step 3:- Cloning project**
* Fork the repository on github.
* Clone the repository by ```git clone https://github.com/<username>/ticketing-system.git``` replace the username with yours.

**Step 4:- Installling modules**
* To install the nodejs modules which are required to run the project by running command ```npm install``` to install project dependencies and ```npm i -D``` to run dev dependencies.

**Step 5:- Create environment variables file**
* Create a **.env** file in the root folder of your project and add you can refer **.env.development** file to refer its structure. Please change the port of the Database URL if not 27017 for mongodb.

**Step 6:- Test the project**
* To test the project, you need to run the command ```npm run test```

**Step 7:- Run the project**
* To run the project, you need to run the command ```nodemon test```

### Package Description
* **express :-** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* **mongoose :-** Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
* **morgan :-** HTTP request logger middleware for node.js.
* **nodemon :-** nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
* **dotenv :-** Dotenv module loads environment variables from a .env file into process.env
* **debug :-** debug exposes a function; simply pass this function the name of your module, and it will return a decorated version of console.error for you to pass debug statements to.
* **moment-timezone :-** Used in timezone based conversion.
### Directory structure
After you have setup the project successfully, you shall have similar directory structure.
```
|- app/
    |- controllers/
        - tickets.js
        - users.js
    |- models/
        - tickets.js
        - users.js
    |- routes/
        - tickets.js
        - users.js
    |- utils/
        - error_handler.js
        - response_handler.js
        - status_handler.js
|- bin/
    - www
|- config/
    - mongoose.js
|- node_modules/
- .env
- .env.development
- .gitignore
- app.js
- LICENSE
- package.json
- package.lock.json
- README.md
```

#### Project structure details
* **app :-** This **app/** directory contains the main REST application functionality.
* **app/controllers :-** These are controller files to validate the inputs from the user to control the flow of the project.
* **app/models :-** This directory contains the data schema for all the collections used in the project.
* **app/routes :-** This directory conatains all the routes and there workflow that are maintained for the project.
* **app/utils :-** This directory contains the helper files for the project. This is made to maintain the uniform error and response structure throughout the project.
* **bin :-** The **bin/** directory serves as a location where you can define your various startup scripts. The www is an example to start the express app as a web server.
* **config :-** The **config/** folder contains the middleware file which are needed to setup before the application start.
* **node_modules :-** The **node_modules/** folder will be created when you will run the package installation command for the project. This will contain the dependencies modules that are used in the project.
* **.env :-** This file is the environment variable file that is needed to be created by you by refering the **.env.development** file.
* **.env.development :-** This file is the **.env** file schema that you need to follow while creating **.env** file.
* **.gitignore :-** This file is used to ignore the files which are not to be pushed while creating commit at github.
* **app.js :-** This is the main server file which do various middleware calls as per the request sent to the server.
* **LICENSE :-** This file contains the MIT License for the project.
* **package.json :-** It holds metadata relevant to the project and it is used for managing the project's dependencies, scripts, version and a whole lot more.
* **package.lock.json :-** The package-lock.json sets your currently installed version of each package in stone, and npm will use those exact versions when running npm install.
* **README.md :-** This file contains the documentation for the project.
* **app/controllers/tickets.js :-** This is controller file to validate the inputs from the user to control the flow of the project for tickets.
* **app/controllers/users.js :-** This is controller file to validate the inputs from the user to control the flow of the project for users.
* **app/models/tickets.js :-** This is collection schema for the tickets.
* **app/models/users.js :-** This is collection schema for the users.
* **app/routes/tickets.js :-** This is route that will contain all the endpoint for **/tickets** route.
* **app/routes/users.js :-** This is route that will contain all the endpoint for **/users** route.
* **app/utils/error_handler.js :-** These is helper file that defines the schema of the response in case of any error.
* **app/utils/response_handler.js :-** These is helper file that defines the schema of the response in case of no error occurs.
* **app/utils/status_handler.js :-** These is helper file that will defines the standard status messages for the stattus codes.
* **config/mongoose.js :-** These is middleware that will run before the the server start to connect the mongodb databse to the server.

### Important Points
* Refresh token is used to get new token with which user can have access to the data once he logs in and has valid token and refresh token.
* Only Admin can create a new show.
* Tickets get expired automatically after 8 hours of show start time using cron jobs which runs in every 30 minutes.
* Users can update delete the token.
* If user does not have non of the refresh token and token the user will need to login again.
* User can see the ticket details using ticket id.
* User can see all the ticket for the show.

### Api Documentation
<table>
    <tr>
        <th>Method</th>
        <th>API</th>
        <th>Header</th>
        <th>Request</th>
        <th>Response</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>/users/signup</td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Content-type":"application/json",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*",<br/>
            }
        </td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"name":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"password":String
            <br/>}
        </td>
        <td>
        {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"status":201,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"statusMessage":"Created",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"message":"User created successfully",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"data":{<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"refreshToken":String,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br/>}
        </td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/users/login</td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Content-type":"application/json",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"refreshtoken":String<br/>
            }
        </td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"password":String
            <br/>}
        </td>
        <td>
        {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"status":200,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"statusMessage":"Ok",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"message":"Loged in successfully",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"data":{<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber":String,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":String,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"refreshToken":String,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br/>}
        </td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/shows/create</td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Content-type":"application/json",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"refreshtoken":String<br/>
            }
        </td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"date":Date,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number<br/>
            <br/>}
        </td>
        <td>
        {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"status":200,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"statusMessage":"Ok",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"message":"Loged in successfully",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"data":{[<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"showNumber":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timing":Date,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;]}
        <br/>}
        </td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/tickets/create</td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Content-type":"application/json",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"refreshtoken":String<br/>
            }
        </td>
        <td>
            {<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"name":String<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber":String<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"date":{<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"day":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"month":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"year":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hours":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"minutes":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"people":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"showNumber":Number<br/>
            <br/>}
        </td>
        <td>
        {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"status":200,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"statusMessage":"Ok",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"message":"Loged in successfully",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"data":{[<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"showNumber":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timing":Date,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"people":Number<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;]}
        <br/>}
        </td>
    </tr>
    <tr>
        <td>PATCH</td>
        <td>/tickets</td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Content-type":"application/json",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"refreshtoken":String<br/>
            }
        </td>
        <td>
            {<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"ticketId":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber":String<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"date":{<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"day":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"month":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"year":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hours":Number,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"minutes":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"people":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"showNumber":Number<br/>
            <br/>}
        </td>
        <td>
        {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"status":200,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"statusMessage":"Ok",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"message":"Loged in successfully",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"data":{[<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timing":Date,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"people":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;]}
        <br/>}
        </td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/tickets</td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Content-type":"application/json",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"refreshtoken":String<br/>
            }
        </td>
        <td>
            {<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"ticketId":Number<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber":String
            <br/>}
        </td>
        <td>
        {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"status":200,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"statusMessage":"Ok",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"message":"Loged in successfully",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"data":{[<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timing":Date,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"people":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;]}
        <br/>}
        </td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/tickets</td>
        <td>
            {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Content-type":"application/json",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"token":String,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"refreshtoken":String<br/>
            }
        </td>
        <td>
            {<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"ticketId":Number
            <br/>}
        </td>
        <td>
        {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"status":200,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"statusMessage":"Ok",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"message":"Loged in successfully",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"data":{[<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hallNumber":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timing":Date,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"people":Number,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;]}
        <br/>}
        </td>
    </tr>
</table>

