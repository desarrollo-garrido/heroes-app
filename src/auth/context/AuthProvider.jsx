import { createContext, useContext, useReducer } from "react";
import { authReducer } from ".";
import { types } from "../types/types";

const initialState = {
  logged: false,
};

// create context Authentication
const authContext = createContext();

//  custom hook para utilizar el contexto de auth
export function useAuth() {
  return useContext(authContext);
}

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name = "") => {
    dispatch({
      type: types.login,
      payload: {
        id: "ABC",
        name: name,
      },
    });
  };

  return (
    <authContext.Provider
      value={{
        ...authState,
        login: login,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;
