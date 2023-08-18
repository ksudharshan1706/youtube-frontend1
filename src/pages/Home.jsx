import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useDispatch, useSelector } from "react-redux";
import { colors } from "@mui/material";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;


const Home = ({type}) => {
  const { currentUser } = useSelector((state) => state.user);
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    const fetchData = async() =>{
      const video = await axios.get(`/videos/${type}`,{currentUser})
      setVideos(video.data)
    }
    fetchData()
  },[type])
  // console.log(videos)
  return (
    
    <Container>
      {/* {videos.map(video=> (
        <Card key={video._id} video={video}/>))
<<<<<<< HEAD
=======
      } */}
      {currentUser?
      (videos.map(video=> (
        <Card key={video._id} video={video}/>
      )))
      :(
        <Login>
        Sign in to like videos, comment, and subscribe.
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Login>
      //<div style={{color:"white",display:"flex",alignContent:"center",justifyContent:"center"}}>Login</div>
      )
>>>>>>> e7fc0cccc655591f2ad21215f08fcddcf8056a9c
      }
    </Container>
  );
};

export default Home;
