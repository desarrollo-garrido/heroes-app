import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext, authReducer } from "./";

const initialState = {
  logged: false,
};

const AuthProvider = ({ children }) => {
  const [authState, dipatch] = useReducer(authReducer, initialState);

  const login = ( name = '') =>{
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name,
      }
    }
    dipatch(action)
  }

  return (
        <AuthContext.Provider value={{
          ...authState, 
          login: login,
        }}>
            {children}
        </AuthContext.Provider>)
};
export default AuthProvider;
