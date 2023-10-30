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
