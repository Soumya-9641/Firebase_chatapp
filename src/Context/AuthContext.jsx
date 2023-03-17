import { createContext,useState ,useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Value } from "sass";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
      auth.onAuthStateChanged((user)=>{
        setCurrentUser(user);
        console.log(user);
      })
    }, [])
    return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}