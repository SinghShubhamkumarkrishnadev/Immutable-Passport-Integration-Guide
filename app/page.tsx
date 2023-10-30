import LoginButton from '../components/LoginButton';
import UserProfile from '../components/UserProfile';
import LogoutButton from '../components/LogoutButton';
import Transaction from '../components/Transaction';


export default function Home() {
  return (
    <div>
      <h1>Immutable Developer Hub Integration</h1>
      <LoginButton /> {/* Render the Login Button component */}
      <UserProfile /> {/* Render the User Profile component */}
      <LogoutButton /> {/* Render the Logout Button component */}
      <Transaction /> {/* Render the Transaction component */}
    </div>
  );
}
