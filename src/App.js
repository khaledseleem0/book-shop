import React , {useEffect,createContext, useState} from 'react';
import Nav from './components/nav/nav'
import Home from './components/home/home'
import Category from './components/category/category';
import BookInfo from './components/bookinfo/bookInfo';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Favorites from './components/favs/favorites'
import FavCategory from './components/favs/favCategory'
import './style.css';
import Loading from './components/others/loading';
import Erorr from './components/others/erorr';
import Clubs from './components/clubs/clubs';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import {UserInfo} from './components/vars';
import firebase from './firebase';
import {CREATE_NEW_PROFILE} from './components/vars';
import { connect } from 'react-redux';
import {PrivateRoute } from './components/privateComponent';
function App(props){
let [userinf,setUserinf] =  useState(null)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
       
        setUserinf(user)
        props.createProfile({
          profile_id:user.uid,
          name :user.displayName,
          profile_image:user.photoURL,            
          posts:[]
        })
      }else{
      
      }
  
    })
  
  },[])

  
return (
  
  <UserInfo.Provider value={userinf}>
    <BrowserRouter>
    {/* <PrivateRoute exact path="/" component={Home}></PrivateRoute> */}
  <Route  exact path={["/home","/favorites","/favorites/:id","/category","/category/:bookInfo","/clubs"]}   component={Nav}></Route>
<Switch>
<PrivateRoute exact path="/home" component={Home}></PrivateRoute>
<PrivateRoute path="/favorites/:id" exact component={Favorites}></PrivateRoute>
<PrivateRoute path="/favorites" exact component={FavCategory}></PrivateRoute>
<PrivateRoute path="/category" exact  component={Category}></PrivateRoute>
<PrivateRoute path="/category/:bookInfo" exact  component={BookInfo}></PrivateRoute>
<PrivateRoute path="/clubs" exact  component={Clubs}></PrivateRoute>
<Route path="/login"   component={Login}></Route>
<Route path="/signUp"   component={Signup}></Route>
<Route path="/:erorr"   exact component={Erorr}></Route> 
</Switch>
<Route path="/"   exact component={Loading}></Route> 

</BrowserRouter> 
</UserInfo.Provider>



  );
  }
function mapDispatchToProps(dispatch) {
  return {
    createProfile: (profile) =>
      dispatch(CREATE_NEW_PROFILE(profile)),
  };
}


export default connect(null, mapDispatchToProps)(App)
