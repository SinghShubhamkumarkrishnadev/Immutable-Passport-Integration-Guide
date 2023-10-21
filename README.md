# Immutable-Passport-Integration-Guide

Here is a guide which will walk you through the process of integrating Immutable Passport into your application. 
Immutable Passport is a powerful tool for managing user authentication and enabling blockchain transactions.

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Step 1: Creating or Cloning Your Application](#step-1-creating-or-cloning-your-application)
4. [Step 2: Registering Your Application on Immutable Developer Hub](#step-2-registering-your-application-on-immutable-developer-hub)
5. [Step 3: Installing and Initializing the Passport Client](#step-3-installing-and-initializing-the-passport-client)
6. [Step 4: Logging In a User with Passport](#step-4-logging-in-a-user-with-passport)
7. [Step 5: Displaying User Information](#step-5-displaying-user-information)
8. [Step 6: Logging Out a User](#step-6-logging-out-a-user)
9. [Step 7: Initiating a Transaction with Passport](#step-7-initiating-a-transaction-with-passport)
10. [conclusion](#conclusion)

## Introduction
This guide will walk you through the process of integrating Immutable Passport into your application. The guide will cover the following topics:

1. Creating or Cloning Your Application
2. Registering Your Application on Immutable Developer Hub
3. Installing and Initializing the Passport Client
4. Logging In a User with Passport
5. Displaying User Information
6. Logging Out a User
7. Initiating a Transaction with Passport


## Prerequisites

Before you begin, make sure you have the following:

- Node.js and npm installed on your machine.
- An Immutable Developer Hub account.
- Your application's repository or a new application project.

## Step 1: Creating or Cloning Your Application

You can start by creating a new application from scratch or by cloning an existing repository that has a basic application structure.

**Creating a New Simple Application:**

### Create a new directory for your project 
```bash
mkdir shubham-passport-integration-app
cd shubham-passport-integration-app
```

### Initialize a new Node.js project 
```bash
npm init -y
```

### Install express.js to your project 
```bash
npm install express --save
```

### Create the Main Application File 
```bash
touch Shubham.js
```
# Clone your existing application from a Git repository
```bash
git clone <repository-url>
cd your-existing-app
```

### Initialize Express.js in Your Application 
 In your Shubham.js  file, you need to require and initialize Express.js. You can do this by adding the following lines of code:

```bash
   const express = require('express');
     const app = express();
     const session = require('express-session');
     const passport = require('immutable-passport-client');
     const port = process.env.PORT || 3000; 

          app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
            });
```
## Step 2: Registering Your Application on Immutable Developer Hub

1. Visit the [Immutable-Developer-Hub](https://docs.immutable.com//).
2. Goto Home->products->Passport->setuop->Register your application.
3. Now Register your application as an OAuth 2.0 client in the Immutable  Developer Hub by following the "Add Client" button in the Passport page.
4. create new passport or log in if you have already.
5. create a project and navigate to it.
6. now goto passport and add client by providing necessary details. 
3. Upon registration, you'll receive your client ID and client secret.

## Step 3: Installing and Initializing the Passport Client

Install the Passport client library and initialize it in your application.

**Install the Passport client**

```bash
npm install immutable-passport-client --save
```

 In your application code(Shubham.js) file, initialize the Passport client with the client ID and client secret which you have saved earlier in passport client creation. copy the below code and paste it into shubham.js file 

```bash
      const passport = require('immutable-passport-client');

       passport.init({
          clientId: 'your-client-id',
          clientSecret: 'your-client-secret',
                    });
```
## Step 4: Logging In a User with Passport

  Implement user login functionality in your Shubham.js file. This typically involves creating a login route, handling user credentials, and using the Passport client to initiate the login process. copy the below code and paste it into your Shubham.js file:
       
   ```bash
        app.post('/login', async (req, res) => {
           const { username, password } = req.body;
              try {
                const user = await passport.login(username, password);
               res.json(user);
                   } catch (error) {
                res.status(401).json({ error: 'Login failed' });
                   }
                   });
```
## Step 5: Displaying User Information

  After a successful login, you can display user information, including the ID token, access token, and user's nickname.for that copy the below code and paste it into shubham.js file:

  ```bash
        app.get('/profile', (req, res) => {
           const user = req.user; 
           res.json({
             id: user.id,
             accessToken: user.accessToken,
             nickname: user.nickname,
           });
         });
```
## Step 6: Logging Out a User

  Implement a user logout feature in your Express.js application(Shubham.js). This route can clear the user's session or token:
```bash
       app.get('/logout', (req, res) => {
            req.session.user = null;
            res.redirect('/');
           });
```
## Step 7: Initiating a Transaction with Passport

 Use Passport to initiate a blockchain transaction from your Express.js application(Shubham.js):
```bash
          app.post('/transaction', async (req, res) => {
            const { data } = req.body;

            try {
              const transactionHash = await passport.initiateTransaction(data);
              res.json({ transactionHash });
            } catch (error) {
              res.status(500).json({ error: 'Transaction initiation failed' });
            }
          });
```


## Conclusion 
 By following these steps, you've successfully integrated Immutable Passport into your Express.js application, providing a robust and secure user authentication and transaction system for your blockchain-based project. This integration enhances the functionality and security of your application, ensuring a smooth user experience.          

  
