import "./profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import { useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import UserInfo from "../../components/UserInfo";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export default function Profile() {
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state) => state.user);

  const [user, setUser] = useState({});
  const userProfile = useParams();
  const [open, setOpen] = useState(false);
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/find/${userProfile.id}`)
      setUser(res.data)
      const video = await axios.get(`/videos/userVideos/${userProfile.id}`)
      setVideos(video.data)
      // setUser(res.data);
    };
    fetchUser();
  }, [userProfile.id]);


  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.bgimg?user.bgimg:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                 alt=""
              />
              <img
                className="profileUserImg"
                src={user.img?user.img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt=""
              />
            </div>
            <div className="profileInfo"><h4 className="profileInfoName">{user.name}{"   "}
            {currentUser._id === userProfile.id?<EditIcon onClick={() => setOpen(true)} />:null}
            </h4>
              <span className="profileInfoDesc">{user.subscribers ? user.subscribers : 0} Subscribers</span>
            </div>
          </div>

        </div>


      </div>

      <br />
      <Container>
        {videos.map(video => (
          <Card key={video._id} video={video} />
        ))}
      </Container>
      {open && <UserInfo setOpen={setOpen} />}
    </>
  );
}