import { createContext } from 'react'
import data from './../api.json'
export  const Small = 700,
        Black = "#393e46",
        Screens = {
    "phone":"500px",
    "tablet":"800px",
    "desktop":"1024px",
     "larg-screen":"2300px"

},Colors= {
    "main":'#DA0037',
    "light-bg":'#c3d2e130',
    "color":"#393e46",
    "sec-color" :"#fff"

}


export function Get_Api (){
    return Promise.resolve(data)
}

 
export function ADD_TO_FAVS(status,info) {
   return {
        type:'Add_To_Fav',
        status,
        info
    
    }

}
export function REMOVE_FROM_FAVS(id) {
    return {
         type:'Delete_From_Fav',
          id 
     
     }
 
 }
 export function CREATE_NEW_GROUP(groups) {
    return {
         type:'Create_New_Groups',
         groups,
     
     }
 
 }

 export function CREATE_NEW_POST(profile_id,post) {
    return {
         type:'Create_New_Post',
         profile_id,
         post
     }
 
 }

export function CREATE_NEW_PROFILE(profile){
    return{
        type:"Create_New_Profile",
        profile
    }
}
export let UserInfo = createContext()  ;