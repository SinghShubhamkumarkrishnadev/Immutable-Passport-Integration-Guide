import { passport } from "@imtbl/sdk";
import { ethers } from "ethers";

const passportConfig = {
  clientId: process.env.IMMUTABLE_CLIENT_ID,
  callbackUri: "http://localhost:3000/callback",
  logoutUri: "http://localhost:3000/",
};

const passportInstance = new passport.Passport(passportConfig);
const passportProvider = passportInstance.connectEvm();

export { passportInstance, passportProvider };
