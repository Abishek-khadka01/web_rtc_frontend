import  {  useEffect, useState } from "react";
import useUserStore from "../contexts/zustand";

function Dashboard() {
  const [Username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [Email, setEmail] = useState("");
  const { username, profilePicture, email, _id } = useUserStore.getState();
//   const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    console.log(_id);
    setUsername(username);
    setProfile(profilePicture);
    setEmail(email);
  }, [_id, username, profilePicture, email]);

  return (
    <>
    <div>
      <h1>Dashboard</h1>
      <p>Email: {Email}</p>
      <p>Username: {Username}</p>
      <p>
        Profile Picture: <img src={profile} alt={username} />
      </p>
    </div>


    </>
  );
}

export default Dashboard;
