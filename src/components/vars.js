import data from './../api.json'
export  const Small = 700;
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
