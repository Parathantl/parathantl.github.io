---
title: Send SMS in NodeJS using Nexmo
date: "2018-10-04T13:00:37.121Z"
tags: ["JavaScript"]
---
Hi, As I’m JS enthusiast; I love doing JavaScript developing due to its easiness & lot of people there to help.

Today, I have came up to show you how to implement, message sending facility using NodeJS using Nexmo service provider.

Lot of people are interested in Start-up & need to grow their business using SMS promotions.

Lets move to the coding portion.

First of all you have to create Nexmo account : [Click Here](https://dashboard.nexmo.com/sign-up)

Now, create a new folder with a name you want

Create **package.json** using

> npm init

Now,

We have to install express & body-parser to the application to use.

> npm install express body-parser — save

Then, create a **index.js** file in the root folder
```
const express = require('express');
//importing express to useconst 

bodyParser = require('body-parser');
//importing body parser to get the body input const 

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

require('./controller.js')(app);   

//requiring app Which is an express instance to use in controller file

const server = app.listen(3000);
//configure the server to run on port 3000

console.log("Server working on 3000")
```
Now, create **controller.js** file in the root folder.
```
module.exports = function (app) {
	const Nexmo = require('nexmo');       
	const nexmo = new Nexmo({          
	        apiKey: Your_API_KEY,          
	        apiSecret: Your_API_SECRET_KEY      
	});

	const config = {          
		number: YOUR_REGISTERED_MOBILE_NUMBER      
	}
	
	app.post('/send', (req, res) => {   
	//Setting endpoint of /send  
	// Send SMS          
	     nexmo.message.sendSms(              
	     config.number,              
	     req.body.toNumber,              
	     req.body.message, { type: 'unicode'},              
     (err, responseData) => { if (responseData)
     {          	
	     console.log(responseData) 
     }   
	});      
}); 
}
```
Here we are using the app instance which we declared in the **index.js**.

Then, we are importing Nexmo module & creating an instance of Nexmo module;

for **apiKey** & **apiSecret** you have to give your Nexmo account’s details.

In the **config object** you have to put the **registered mobile number** for your Nexmo account as value for the number attribute.

And, after that , a POST request with “**/send**” endpoint.

Wrapping the **nexmo.message.sendSms()** method which is predefined in the Nexmo to send message inside the POST request.

Finally, we are console the message details in the terminal/command line.

Now, Start the server using

> node index.js

And test it with Postman.

![](/images/1.png)

If you get **Non White-listed Destination — rejected** error.

You have to register it in your Nexmo Account.

To do that [Click Here](https://dashboard.nexmo.com/test-numbers)

Yes, you have done it.

Happy Coding Folks..!!

