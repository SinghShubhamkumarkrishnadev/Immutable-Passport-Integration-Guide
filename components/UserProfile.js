// components/UserProfile.js
import { passportInstance } from "../lib/immutable";
import { useEffect } from "react"; // Keep the import of useEffect
import { useEffectClient } from "next/client"; // Import useEffectClient

/* use client */ // Mark the component as a client component

const UserProfile = () => {
  // Use React State instead of useState
  const [user, setUser] = React.useState(null);

  // Use React useEffect for client components
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
  }, []); // Empty dependency array to run this effect once.

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
