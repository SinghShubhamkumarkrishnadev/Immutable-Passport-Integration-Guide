// components/UserProfile.js
import { passportInstance } from "../lib/immutable";
import { useEffect } from "react"; 
import { useEffectClient } from "next/client"; 


const UserProfile = () => {
  const [user, setUser] = React.useState(null);

  useEffectClient(() => {
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
