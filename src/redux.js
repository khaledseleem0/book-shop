import {createStore}  from 'redux'

const  stated= {
    data:[],
    groups:[],
    clubs:{
        profiles:[
            // {
            //     profile_id:40000,
            //     name :"mohamed Ahmed",
            //     profile_image:(process.env.PUBLIC_URL+"/assesst/images/profs/user1.jpg"),            
            //     posts:[]
            // },
            // {
            //     profile_id:50000,
            //     name :"ali zdXXX",
            //     profile_image:(process.env.PUBLIC_URL+"/assesst/images/profs/user2.jpg"),            
            //     posts:[{
            //         profile_id:50000,
            //         content:' " Be or not to be "  ',
            //         title:"today's qoute",
            //         post_id:23423,
            //         image:"", 
            //         video:""
            //     }]
            // },
            // {
            //     profile_id:60000,
            //     name :"fares dany",
            //     profile_image:(process.env.PUBLIC_URL+"/assesst/images/profs/user3.jpg"),            
            //     posts:[{
            //         profile_id:60000,
            //         content:` Lorem ipsum, dolor sit amet consectetur adipisicing 
            //             elit.Lorem ipsum, dolor sit amet consectetur adipisicing 
            //              elit.Lorem ipsum, dolor sit amet consectetur elit. `,
            //         title:"How to  love Reading ",
            //         post_id:324325,
            //         image:(process.env.PUBLIC_URL+"/assesst/images/posts/post2.jpg"), 
            //         video:""
            //     }]
            // },
        ]
    }
}
function reduser  (state = stated ,action){
        switch (action.type) {
            case "Add_To_Fav" :
                return {
                    data: [...state.data, {data: action.info, status:action.status}],
                    groups:state.groups,
                    clubs:state.clubs,
                }

                case "Delete_From_Fav" :
                   let statedata = [...state.data];
                   let d  = statedata.filter(x=>{
                       return x.data.rank !== action.id;
                   })
            return {data : d ,

                groups:state.groups,
                clubs:state.clubs,

            }
            case "Create_New_Groups" :
              return {data:[...state.data],
                groups:[...state.groups, action.groups],
                clubs:state.clubs,

            };
            case "Create_New_Post" :
            let updatedProfiles = state.clubs.profiles;
                 updatedProfiles.filter((pro)=>{
                if(action.profile_id == pro.profile_id){
                    pro.posts.push(action.post)
                
                }
            })
            return   {data:[...state.data],
                      groups:[...state.groups],
                       clubs:{profiles:[...updatedProfiles]},

            };
            case "Create_New_Profile" :
                let new_profile = state.clubs.profiles.push(action.profile);
                return   {data:[...state.data],
                    groups:[...state.groups],
                     clubs:{profiles:[...state.clubs.profiles]},

          };
                   
            default:
                return state;
        }
 
}


 const store = createStore(reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 export default  store