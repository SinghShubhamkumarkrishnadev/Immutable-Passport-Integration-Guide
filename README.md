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
```cmd
npx create-next-app your-immutable-app
cd your-immutable-app
```

### Install express.js to your project 
```cmd
npm install express --save
npm install @imtbl/sdk ethers
```

# Clone your existing application from a Git repository
```cmd
git clone <repository-url>
cd your-existing-app
```

### Initialize next.js in Your Application 

Now, create a new file in the project's lib directory called immutable.js. This file will contain the configuration and initialization code for the Passport client.

```javascript
   const express = require('express');
// lib/immutable.js
import { passport } from "@imtbl/sdk";
import { ethers } from "ethers";

const passportConfig = {
  clientId: process.env.IMMUTABLE_CLIENT_ID,
  redirectUri: "http://localhost:3000/callback",
  logoutRedirectUri: "http://localhost:3000/",
  scope: "transact openid offline_access email",
  audience: "platform_api",
};

const passportInstance = new passport.Passport(passportConfig);
const passportProvider = passportInstance.connectEvm();

export { passportInstance, passportProvider };
```

## Step 2: Registering Your Application on Immutable Developer Hub

1. Visit the [Immutable-Developer-Hub](https://docs.immutable.com//).
2. Goto Home->products->Passport->setuop->Register your application.
3. Now Register your application as an OAuth 2.0 client in the Immutable  Developer Hub by following the "Add Client" button in the Passport page.
4. create new passport or log in if you have already.
5. create a project and navigate to it.
6. now goto passport and add client by providing necessary details. 
3. Upon registration, you'll receive your client ID .

## Step 3: Installing and Initializing the Passport Client

Install the Passport client library and initialize it in your application.

**Install the Passport client**

```bash
npm install @imtbl/sdk ethers
```

## Step 4: Logging In a User with Passport

 Create a component for login in the components directory:
       
   ```javascript
// components/LoginButton.js
import { passportProvider } from "../lib/immutable";

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      const accounts = await passportProvider.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected");
      console.log(accounts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogin}>Log In</button>
  );
};

export default LoginButton;
```
## Step 5: Displaying User Information

Create a component for displaying user information:

  ```javascript
// components/UserProfile.js
import { passportInstance } from "../lib/immutable";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userProfile = await passportInstance.getUserInfo();
        setUser(userProfile);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;

```
## Step 6: Logging Out a User

  Create a component for logging out: This route can clear the user's session or token:
```javascript
    // components/LogoutButton.js
import { passportInstance } from "../lib/immutable";

const LogoutButton = () => {
  const handleLogout = () => {
    passportInstance.logout();
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default LogoutButton;

```
## Step 7: Initiating a Transaction with Passport

Create a component for initiating a transaction:
```javascript
// components/Transaction.js
import { passportProvider, initiateTransaction } from "../lib/immutable";

const Transaction = () => {
  const handleTransaction = async (data) => {
    try {
      const transactionHash = await initiateTransaction({ data });
      console.log("Transaction Hash:", transactionHash);
      // Handle the transaction response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={() => handleTransaction({ /* Transaction data */ })}>
      Initiate Transaction
    </button>
  );
};

export default Transaction;
```
### Adding Components to Pages
Now, you can add these components to your Next.js pages or any other components as needed. For example, you might create a pages/index.js file that includes the login, user profile, logout, and transaction components.

You can now run your Next.js application using the following command:
``` bash
npm run dev
```


## Conclusion 
 By following these steps, you've successfully integrated Immutable Passport into your Express.js application, providing a robust and secure user authentication and transaction system for your blockchain-based project. This integration enhances the functionality and security of your application, ensuring a smooth user experience.          

  
