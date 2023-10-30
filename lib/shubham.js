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
