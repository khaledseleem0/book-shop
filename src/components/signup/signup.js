import React, { useState, useEffect } from "react";
import { InputFile } from "./../favs/favoritesStyle";
import {
  Container,
  Label,
  Input,
  Column,
  Form,
  Img,
  Line,
  Row,
  Auths,
  Link,
  Submit,
  Title,
  Progress,
  TransformedContainer,
  Back,
} from "./../login/loginStyle";
import firebase, { storage } from "./../../firebase";
import { Uploader, ImgContainer, Finish, Content } from "./signupStyle";
import { FaGoogle, FaFacebook, FaSignInAlt } from "react-icons/fa";
export default function Signup() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [mail, setMail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [progress, setProgress] = useState(1);
  const handelme = (e) => {
 
    if(e.target.files[0] !== ""){
      
    let uploading = firebase.storage().ref().child('images/'+e.target.files[0].name).put(e.target.files[0]);
    uploading.on(firebase.storage.TaskEvent.STATE_CHANGED , (snapshot)=>{
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      ) +1 ;
      setProgress(prog)
      },(err)=>{
        throw err

      },()=>{
        uploading.snapshot.ref.getDownloadURL().then(url=>{
          setUrl(url)
       
        })
      }
    
    )
  };

    }
 
  const handelGoogle = () => {
    try {
      if (firebase) {
        let au = firebase
          .auth()
          .createUserWithEmailAndPassword(mail,passwd).then(()=>{
          firebase
          .auth()
          .currentUser.updateProfile({
            displayName: "anonymous",
            photoURL:'https://firebasestorage.googleapis.com/v0/b/read-it-f4eba.appspot.com/o/user.svg?alt=media&token=024f0264-542e-47b2-8b80-9e910e54d167',
          })
    

          })

    
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const HandelFirstData = (e) => {
    e.preventDefault();
if(name !== '' && passwd !== '' && mail !== ''){
  handelGoogle();
  if (document.querySelector(".second")) {
      document.querySelector(".second").classList.add("not-clipped");
      setProgress(50);
    }
}else{
  alert("check your data again ")
}
    
  };

  const handelAdd = () => {

    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: name,
        photoURL:url,
      })



  };
  return (
    <Container>
      <TransformedContainer>
        <Form>
          <Progress progress={progress}> </Progress>
          <Title>
            {" "}
            Join To Our Family
            <FaSignInAlt />{" "}
          </Title>
          <Column>
            <Label> userName </Label>
            <Input
              type="text"
              placeholder="joe doe"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Label> E-mail </Label>
            <Input
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <Label> Password </Label>
            <Input
              type="password"
              placeholder="85585037cb@$_=-"
              onChange={(e) => setPasswd(e.target.value)}
              required
              accept=".jpg , .png "
            />
            <Label>
              <Link to="/login"> already have account ? </Link>
            </Label>
            <Submit type="submit" onClick={(e) => HandelFirstData(e)}>
              {" "}
              sign up
            </Submit>
            <Line> OR </Line>

            <Row>
              <Auths>
                <FaGoogle />
              </Auths>
              <Auths>
                <FaFacebook />
              </Auths>
            </Row>
          </Column>
        </Form>
        <Back className="second">
          <Content>
            <ImgContainer img={url}>
              <img
                src={
                  url === ""
                    ? process.env.PUBLIC_URL + "/assesst/images/icon/cloud.svg"
                    : url
                }
              />
            </ImgContainer>
            <Uploader img={url}>
              {url === "" ? "upload picture" : "done successfully"}
              <InputFile
                required
                type="file"
                onChange={(e) => {
                  setProgress(101);
                  handelme(e);
                }}
              />
            </Uploader>
            {url === "" ? (
              ""
            ) : (
              <Finish to="/home" onClick={(e) => handelAdd(e)}>
                {" "}
                finish{" "}
              </Finish>
            )}
          </Content>
        </Back>
      </TransformedContainer>
      <Img>
        <img
          src={
            process.env.PUBLIC_URL + "/assesst/images/login-signup/sign-up2.svg"
          }
        />
      </Img>
    </Container>
  );
}
