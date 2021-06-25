import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {FaGoogle,FaFacebook, FaHandSpock} from 'react-icons/fa';
import {Title,Line,Row,Container,Form ,Auths,Submit,Label,Img,Column,Input,Link} from './loginStyle'
import firebase  from './../../firebase';
export default function Login() {
    
    let history = useHistory();
    const [mail,setMail] = useState('');
    const [passwd,setPasswd] = useState('');
 

    const  HandelLogin = (e) => {
        e.preventDefault();
        if(mail === '' &&  passwd === ''){}

try{
    firebase.auth().signInWithEmailAndPassword('mo@gmail.co', 'khaled012')
    .then((userCredential)=>{
            if(userCredential){
                history.push("/home")
            }
    })

}catch(err){
    alert(err.message)
}

    }

    return (
        <>
            <Container>
                <Form>
                <Title> Welcome back  <FaHandSpock/> </Title>
                <Column>
                <Label> email address </Label>
                <Input type="email" placeholder="book@yahoo.com" onChange={(e)=>setMail(e.target.value)}/>
                <Label>confirm password </Label>
                <Input type="password" placeholder="64329$#%95" onChange={(e)=>setPasswd(e.target.value)}/>
                <Label> 
                    <Link to="/signUp">don't have account </Link>
                </Label>
                <Submit type="submit" onClick={(e)=>HandelLogin(e)}>login now </Submit>
                <Line> OR </Line>

                <Row>
                <Auths>
                <FaGoogle/>   

                    
                </Auths>
                <Auths>
                <FaFacebook/>
                </Auths>
                </Row>
                </Column>
                </Form>
                <Img>
                <img src={process.env.PUBLIC_URL+"/assesst/images/login-signup/login.svg"}/>

                </Img>
            </Container>
        </>
    )
}
