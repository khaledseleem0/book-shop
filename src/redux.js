import {createStore}  from 'redux'

const  stated= {
    data:[  ]
}

function reduser  (state = stated ,action){
        switch (action.type) {
            case "Add_To_Fav" :
                return {
                    data: [...state.data, {data: action.info, status:action.status}
                ]
                }

                case "Delete_From_Fav" :
                   let statedata = [...state.data];
                   console.log();
                   let d  = statedata.filter(x=>{
                    console.log(x , action.id);
                       return x.data.rank !== action.id;
                   })
            return {data : d}
            default:
                return state;
        }
 
}






 const store = createStore(reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 export default  store