import React,{useContext, useEffect,useState} from 'react'
import { Route, Redirect } from  "react-router-dom";
import {UserInfo} from './../components/vars'
import Loading from './../components/others/loading'
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    let  user = useContext(UserInfo);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
      setTimeout(() => {
        
         setLoading(false)
    }, 2000);
    },[user])
    return (loading ? <Loading/> : <Route
        {...rest}
        render={(routeProps) =>
             !user ? <Redirect to={'/signUp'} />   :  <RouteComponent {...routeProps}/>
        }
      />
    );
  };



  
export   {PrivateRoute };

