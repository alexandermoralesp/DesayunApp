import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const {authorize, clearSession, user} = useAuth0();

  const logIn = async () => {
    try {
      await authorize({scope: 'openid profile email'});
    } catch (e) {
      console.log(e);
    } 
  }
  const logOut = async () => {
    try {
      await authorize({scope: 'openid profile email'});
    } catch (e) {
      console.log(e);
    } 
  }
  const loggedIn = user !== undefined && user !== null;
  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut, isLoading, userToken}}>
        {children}
    </AuthContext.Provider>
  )
}