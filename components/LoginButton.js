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
