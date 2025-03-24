import { useEffect, useState } from "react";
import { GetOnlineUsers } from "../apis/users.apis";
import { useNavigate } from "react-router-dom";
function Checking() {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await GetOnlineUsers();

      setDetails(response.data.data.onlineUsers);
    };
    fetchData();
  }, []);

  const HandleClick = (id : string) => {
    navigate(`/direct/user/${id}`);
  };

  return (
    <>
      {details.map(({ _id, name, profile, email }) => (
        <div id="name" key={email} onClick={() => HandleClick(_id)}>
          <img src={profile} alt={name} />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      ))}
    </>
  );
}

export default Checking;
