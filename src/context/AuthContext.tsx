import { createContext, useContext, useEffect, useState } from "react";

type authState = {
    token: string | null;
    userDetails: {}
}
const AuthContext = createContext<authState>({token: "", userDetails: {}});

const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [userState, setUserState] = useState({
        userDetails: {},
        token: "",
      });

      useEffect(() => {

        const localStorageData = localStorage.getItem("AUTH");

        if(localStorageData !== null) {
          const auth = JSON.parse(localStorageData);
            if (auth.userDetails) {
              setUserState({ ...auth });
            }
        }
      }, []);

    return(
        <AuthContext.Provider value={{token: userState.token, userDetails: userState.userDetails}}>
            {children}
        </AuthContext.Provider>
    );
}

    const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };