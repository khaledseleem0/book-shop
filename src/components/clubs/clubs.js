import React from "react";
import { useState, useEffect,useContext } from "react";
import {
  FaRegHeart,
} from "react-icons/fa";
import {
  Header,
  ClubContainer,
  Post,
  Footer,
  PostContent,
  ProfileImg,
  ProfileName,
  HeaderContent,
  Icon,
  Title,
  Btn,
  HeaderPost,
  Icons,
  Text,
  Content,
  Container,
  Column,
  Ul,
  ImgPreview,
  Row,
  Bg,
  Img,
  TitleInput
} from "./clubsStyle";
import {UserInfo} from './../vars'
import { AbsoluteContainer, Button, TowBtns } from "./../favs/favoritesStyle";
import { connect } from "react-redux";
import { CREATE_NEW_POST } from "./../vars";
import Loading from "../others/loading";
function Clubs(props) {
  // states  =========
  
  const [myprofile, setMyProfile] = useState({});
  // const [profile, setProfile] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // setProfile
  const user = useContext(UserInfo);
  //  console.log(profile)
    useEffect(()=>{
      if(user == null){
        return
        }else{
           setLoading(false)
           setMyProfile({
           "name": user.displayName,
           "profile_id": user.uid,
           "profile_image": user.photoURL,
         })
        }

  },[user])
    

  const [post, setPost] = useState({
    content: "",
    image: "",
    video: "",
    post_id: Math.round((Math.random() + 20) * 90000),
    profile_id: myprofile.profile_id,
    title: "",
  });

  //==================

  let x = true;
  const HandelVisible = () => {
    const CatMaker = document.querySelector(".create-new-cat");
    const CatMakerChild = document.querySelector(".create-new-cat div");
    CatMaker.classList.toggle("visible");
    if (x) {
      CatMakerChild.style.animationName = "popUp";
      x = !x;
    } else {
      CatMakerChild.style.animationName = "null";
      x = !x;
    }
  };

  const HandelText = (e) => {
    let content = e.target.value;
    setPost({
      content,
      image: post.image,
      video: "",
      post_id: post.post_id,
      title: post.title,
    });
  };
  const HandelTitle = (e) => {
    let title = e.target.value;
    setPost({
      content:post.content,
      image: post.image,
      video: "",
      post_id: post.post_id,
      title,
    });
  };

  
  const HandelImg = (e) => {
    let image = URL.createObjectURL(e.target.files[0]);
    setPost({
      content: post.content,
      image,
      video: "",
      post_id: post.post_id,
      title: post.title,
    });
  };

  const HandelPost = (e) => {
    if (post.content !== "" || post.title !== "" || post.image !== "") {
      HandelVisible();
      props.createPost(myprofile.profile_id, post);
    }
  };
  let myProf = 0;
  useEffect(() => {
    const id = 5000;
    myProf = props.data.filter((profile) => {
      return profile.profile_id === id;
    });

    // setProfile(myProf[0]);
    setData(props.data);
  }, []);

  // profile
  return (loading ? 
<Loading/> : <Bg>
      <ClubContainer>
        <Header>
          <HeaderContent>
            <ProfileImg background={myprofile.profile_image}></ProfileImg>
            <ProfileName>{myprofile.name}</ProfileName>
          </HeaderContent>
          <Btn onClick={() => HandelVisible()}>Ask</Btn>
        </Header>


          {/* TODO thid is the time line  */}

        {data.map((profile) => {
          return profile.posts.map((post,i) => {
            return (
              <Post key={i}>
                <HeaderPost>
                  <HeaderContent>
                    <ProfileImg background={profile.profile_image}></ProfileImg>
                    <ProfileName>{profile.name} </ProfileName>
                  </HeaderContent>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assesst/images/icon/menu.svg"
                    }
                    width="30px"
                  />
                </HeaderPost>

                <PostContent>
                  <Title>{post.title}</Title>
                  <p>{post.content}</p>
                </PostContent>
                {post.image === "" ? (
                  <></>
                ) : (
                  <Img>
                    <img src={post.image} />
                  </Img>
                )}

                <Footer>
                  <Icons>
                    <Icon>
                      <FaRegHeart />
                    <span>Love</span>
                    </Icon>


                    <Icon>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assesst/images/icon/comment.svg"
                        }
                      />


                    <span>Comment</span>
                    </Icon>

                    <Icon>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assesst/images/icon/share.svg"
                        }
                      />

                    <span>Share</span>
                    </Icon>

                  </Icons>
                </Footer>
              </Post>
            );
          });
        })}
        {/* end time line  */}
      </ClubContainer>

      {/* ############## New ################### */}
      <AbsoluteContainer className="create-new-cat">
        <Container>
          <h1> Post </h1>
          <Content>
          <Column>
             <span> Post title</span>
              <TitleInput type="text" onChange={(e) => HandelTitle(e)} />
            </Column>

            <Column>
             <span> Post Content</span>
              <Text onChange={(e) => HandelText(e)}></Text>
            </Column>
            <Row>
              <Ul>
                <li>
                  <input type="file" onChange={(e) => HandelImg(e)} />
                  <span>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assesst/images/icon/image.svg"
                      }
                    />
                  </span>
                  <span> image</span>
                </li>
                <li>
                  <span>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assesst/images/icon/video.svg"
                      }
                      />
                  </span>
                  <span> video</span>
                </li>
                <li>
                  <span>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assesst/images/icon/bold.svg"
                      }
                      />
                  </span>
                  <span> bold</span>
                </li>
              </Ul>
              <ImgPreview   added={post.image === "" }>
                <img
                  src={
                    post.image === ""
                      ? process.env.PUBLIC_URL + "/assesst/images/icon/file.svg"
                      : post.image
                  }
                  />
              </ImgPreview>
            </Row>
            <TowBtns>
              <Button valid={true} onClick={() => HandelPost()}>
                Post
              </Button>
              <Button
                discard={true}
                valid={true}
                onClick={() => HandelVisible()}
              >
                {" "}
                discard
              </Button>
            </TowBtns>
          </Content>
        </Container>
      </AbsoluteContainer>
    </Bg>

  );
}

function mapStateToProps(state) {
  return {
    data: state.clubs.profiles,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createPost: (profile_id, post) =>
      dispatch(CREATE_NEW_POST(profile_id, post)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
