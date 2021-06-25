import React,{useState,useEffect,createContext} from 'react'
import  firebase from './firebase';
export const FirebaseContext = createContext();

export default function AuthProvider({children}) {
            const [user,setUser] = useState(null);

            useEffect(() => {
                
                        firebase.auth().onAuthStateChanged(setUser)
            }, [])
    return (
            <FirebaseContext.Provider value={{user}}>
                    {children}
            </FirebaseContext.Provider>
    )
}
