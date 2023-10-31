# Immutable Passport Integration Guide

This comprehensive guide will explain how to seamlessly integrate Immutable Passport into your application. Immutable Passport is a blockchain-based authentication and authorization service tailored for gaming applications. 


## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [1. Creating a Simple Application](#1-creating-a-simple-application)
- [2. Registering the Application on Immutable Developer Hub](#2-registering-the-application-on-immutable-developer-hub)
- [3. Installing and Initializing the Passport Client](#3-installing-and-initializing-the-passport-client)
- [4. Logging in a User with Passport](#4-logging-in-a-user-with-passport)
- [5. Displaying User Information](#5-displaying-user-information)
- [6. Logging Out a User](#6-logging-out-a-user)
- [7. Initiating a Transaction from Passport](#7-initiating-a-transaction-from-passport)
- [Conclusion](#conclusion)

  ## Introduction
This guide provides a detailed, step-by-step process for integrating Immutable Passport into your application. The key components and functionalities covered include:

1. Creating a Simple Application: We'll walk you through the process of creating a basic Next.js application from scratch or cloning a pre-built application. This is the foundation for implementing Immutable Passport.
 
2. Registering Your Application on the Immutable Developer Hub: Before you can begin using Immutable Passport, you need to register your application on the Immutable Developer Hub and obtain a unique client ID. This client ID is a crucial element for secure communication between your application and the Passport service.
 
3. Installing and Initializing the Passport Client: This step dives into the technical details of installing the necessary dependencies and initializing the Passport client within your application. You'll gain a clear understanding of how to set up the client for secure authentication and authorization.
 
4. Logging in a User with Passport: Detailed code snippets will be provided to guide you through the process of securely logging in a user using Immutable Passport. This is a fundamental step in enhancing user security and authentication.

5.Displaying User Information: You'll learn how to retrieve and display essential user information, such as the ID token and access token, on your application. This step ensures that users have access to their data while maintaining security.   

6.Logging Out a User: Security isn't just about login; it's also about logout. You'll be provided with code examples on how to log out a user securely, ensuring that their session is terminated appropriately.   

7.Initiating a Transaction from Passport: This section guides you through initiating transactions using Passport. You'll understand how to provide the necessary transaction data and parameters, such as sending a placeholder string and obtaining the transaction hash. This functionality is essential for gaming applications that involve in-game purchases or transactions.




## Prerequisites

Before diving into the integration process, make sure you have the following prerequisites in place:

1.Node.js, Next.js, Express.js, and npm: Ensure you have these dependencies installed and up to date on your system, as they are essential for building and running your application.

2.Immutable Developer Hub Account: You'll need an account registered on the Immutable Developer Hub to access the necessary resources and APIs for integration.

## 1. Creating a Simple Application  
In this step, you have two options to choose from: You can either create a basic Next.js application from scratch, tailoring it to your specific needs, or you can clone a repository containing a pre-built application designed for use with Immutable Passport. Make sure that your application is correctly set up and running smoothly.

1.Creating a Basic Application: We'll guide you through the process of building a Next.js application from the ground up, tailoring it to your specific needs. This option provides the most flexibility for your application's design and functionality.
```cmd
npx create-next-app shubham-immutable-app
cd shubham-immutable-app
```

2.Cloning a Pre-built Application: Alternatively, you can clone a pre-built application repository, which comes with the essential components for Immutable Passport integration. This option can save you time and effort and is particularly useful if you're looking for a quick start.
```cmd
git clone <repository URL>
cd repository_name
```

Whichever option you choose, it's crucial to ensure that your application is correctly set up and running smoothly.

## 2. Registering the Application on Immutable Developer Hub

This step involves:  

1.Signing in to Your Immutable Developer Hub Account: Logging into your Immutable Developer Hub account is the first step in gaining access to the tools and resources necessary for integration.   

2.Registering Your Application: To securely interact with Immutable Passport, you'll need to register your application on the Immutable Developer Hub. This registration process results in obtaining a client ID unique to your application, which is crucial for authentication and authorization.   

3.Adding the Client ID to Your Application's .env File: To ensure secure communication, it's essential to add the obtained client ID to your application's .env file. This step facilitates easy reference and secure communication with the Passport service.
So,make a file with .env extension and paste the below code.(Make sure to replace client_id with your actual id)
   
   ```cmd
   IMMUTABLE_CLIENT_ID="Your_Client_ID"
   ```

4. add client ID to .env file `IMMUTABLE_CLIENT_ID="Client_ID"`
 
5. If you still have any doublt kindly visit [https://www.immutable.com/products/passport]

## 3. Installing and Initializing the Passport Client

Here, you'll delve into the technical aspects of integrating Immutable Passport into your application. This involves installing the required dependencies and initializing the Passport client. You'll gain a clear understanding of how to set up the client for secure authentication and authorization.   
->Firstly Install the dependencies as required for this project.   
```cmd
npm install express --save
npm install @imtbl/sdk --save  
```   
-> Now Navigate to lib directory and make a file name immutable.js if it is already then paste below code into it.   

```javascript
import { config, passport } from "@imtbl/sdk";
import { ethers } from "ethers";

const passportConfig = {
  clientId: process.env.IMMUTABLE_CLIENT_ID as string,
  callbackUri: "http://localhost:3000/callback",
  logoutUri: "http://localhost:3000/",
  }),
};
const passportInstance = new passport.Passport(passportConfig);
const passportProvider = passportInstance.connectEvm();
```

-> Now,Make a new folder ***components*** into root directory of your project.

## 4. Logging in a User with Passport  

Here , Make a file LoginButton.js into your components folder and paste the below code into it.

This step is critical for enhancing user security. You'll be provided with detailed code snippets to securely log in a user using Immutable Passport. The code example demonstrates how to establish a secure connection and authenticate a user.

```javascript
import { passportProvider, fetchAuth } from "@/lib/immutable";

const fetchAuth = async () => {
  try {
    const accounts = await passportProvider.request({
      method: "eth_requestAccounts",
    });
    console.log("Connected");
    console.log(accounts);
  } catch (error) {
    console.log(error);
 res.status(500).json({ error: 'An error occurred while Loging the  user.' });
  }
};
```

## 5. Displaying User Information

Here, Make a file UserProfile.js into your components folder and paste below code into it.     

In this section, you'll learn how to retrieve and display essential user information, including the ID token and access token, on your application. This step is crucial for providing a user-friendly experience while maintaining robust security.

```javascript
import { passportInstance } from "@/lib/immutable";

const fetchUser = async () => {
  try {
    const userProfile = await passportInstance.getUserInfo();
    const accessToken = await passportInstance.getAccessToken();
    const idToken = await passportInstance.getIdToken();

      res.json({
      userProfile,
      accessToken,
      idToken,
    });
  } catch (error) {
    console.log(error);
 res.status(500).json({ error: 'An error occurred while fetching user information.' });
  }
};
```

## 6. Logging Out a User  

 Here, Make a file LogoutButton.js into your components folder and paste below code into it.   
 
Security doesn't end with login; it's also about logout. You'll be provided with code examples demonstrating how to securely log out a user, ensuring their session is terminated appropriately.

```javascript
import { passportInstance } from "@/lib/immutable";

const handleLogout = () => {
  passportInstance.logout();
};
```

## 7. Initiating a Transaction from Passport  

Here, Make a file Transaction.js into your components folder and paste below code into it.

Gaming applications often involve in-game purchases and transactions. In this section, you'll understand how to initiate transactions using Passport. You'll learn how to provide the necessary transaction data and parameters, such as sending a placeholder string and obtaining the transaction hash.

```javascript
import { passportProvider, initiateTransaction } from "@/lib/immutable";

const handleTransaction = async (data) => {
  try {
    const transactionHash = await initiateTransaction({ data });
    res.json({ transactionHash });
} catch (error) {
    console.error(error);
res.status(500).json({ error: 'An error occurred while initiating the transaction.' });
  }
};
```

That's it! You've successfully integrated Immutable Passport into your application.
 
### Conclusion  
By successfully integrating Immutable Passport into your gaming application, you not only enhance your users' experience but also fortify the security and trustworthiness of your platform. This blockchain-based authentication and authorization service provides a robust layer of protection and streamlines the user login and transaction processes. Your users can now enjoy a more secure and reliable gaming experience, thanks to the integration of Immutable Passport.

In conclusion, Immutable Passport is a powerful tool that can elevate your gaming application to new heights of security and user experience. By following these steps, you'll be well-equipped to integrate this essential service and offer your users a gaming environment they can trust and enjoy.

