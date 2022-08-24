import {
  // AuthErrorCodes,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";
import { auth, db } from "../..";
import { setUserFnType } from "../../types";
import { LocalRoutes } from "../constants";
import { triggerToast } from "../toastTrigger";

export const signup = async ({
  credentials,
  setUser,
  navigate,
}: {
  credentials: { userName: string; email: string; password: string };
  setUser: setUserFnType;
  navigate: NavigateFunction;
}) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const token = await user.getIdToken();

    await setDoc(doc(db, "users", user.uid), {
      userName: credentials.userName,
      scoreboard: [],
      userId: user.uid,
    });

    const userObj = {
      token: token,
      userDetails: {
        userName: credentials.userName,
        scoreboard: [],
        userId: user.uid,
      },
    };

    setUser(userObj);

    localStorage.setItem("QUIZAUTH", JSON.stringify(userObj));

    navigate(LocalRoutes.HOME);

    triggerToast("success", `Welcome Aboard ${credentials.userName}!`);
  } catch (error) {
    triggerToast("error", "Please enter a valid email id!");
    console.error(error);
  }
};

export const login = async ({
  credentials,
  setUser,
  navigate,
}: {
  credentials: { email: string; password: string };
  setUser: setUserFnType;
  navigate: NavigateFunction;
}) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const token = await user.getIdToken();

    const userData = await getDoc(doc(db, "users", user.uid));

    if (userData.exists()) {
      const userObj = { token, userDetails: userData.data(), userId: user.uid };
      setUser(userObj);
      localStorage.setItem("QUIZAUTH", JSON.stringify(userObj));
      navigate(LocalRoutes.HOME);
      triggerToast("success", "Welcome Aboard!");
    } else throw new Error("User Data Not Found!");
  } catch (error) {
    triggerToast("error", "Invalid credantials!");
    console.error(error);
  }
};

export const logout = async ({
  setUser,
  navigate,
}: {
  setUser: setUserFnType;
  navigate: NavigateFunction;
}) => {
  try {
    await signOut(auth);
    setUser({
      userDetails: {},
      token: "",
    });
    localStorage.removeItem("QUIZAUTH");

    navigate(LocalRoutes.HOME);
    triggerToast("warning", "Logged Out!");
  } catch (error) {}
};

export const forgotPassword = async ({
  email,
  navigate,
}: {
  email: string;
  navigate: NavigateFunction;
}) => {
  try {
    await sendPasswordResetEmail(auth, email);
    navigate(LocalRoutes.LOGIN);
    alert("Password Reset Link Has Been Sent To Your Email Address");
  } catch (error) {}
};
