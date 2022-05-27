import { createContext, useContext, useEffect, useState } from "react";
import { authState } from "../types";

const AuthContext = createContext<authState>({
  token: "",
  userDetails: {},
  setUser: () => {},
});

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [userState, setUserState] = useState({
    userDetails: {},
    token: "",
  });

  useEffect(() => {
    const localStorageData = localStorage.getItem("QUIZAUTH");

    if (localStorageData !== null) {
      const auth = JSON.parse(localStorageData);

      if (auth.token) {
        setUserState({ ...auth });
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: userState.token,
        userDetails: userState.userDetails,
        setUser: setUserState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
