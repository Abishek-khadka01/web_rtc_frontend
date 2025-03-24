import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUserStore from "../contexts/zustand";


import { GetDetailsofUser } from "../apis/users.apis";
const CardPage = () => {
 
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<string>("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { _id } = useUserStore.getState();



  const HandleVideoCall = async () => {
    console.log(`Handle Video Call clicked `)
  };

  const HandleAudioCall = async () => {
    console.log(`Handle Audio Call clicked `)
  };

  useEffect(() => {
    (async () => {
      const response = await GetDetailsofUser(id as string);
      setProfile(response.data.data.profile_picture);
      setEmail(response.data.data.email);
      setUsername(response.data.data.username);
    })();
  }, []);

  return (
    <>
      <img src={profile} alt="user-photo" />
      <label>{username}</label>
      <label>{email}</label>
      <button type="button" onClick={HandleAudioCall}>
        Audio Call
      </button>
      <button type="button" onClick={HandleVideoCall}>
        Video Call
      </button>
    </>
  );
};

export default CardPage;
