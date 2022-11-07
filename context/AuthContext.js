import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("Hello world");
  const [isFirst, setIsFirst] = useState(false);
  const signIn = (email, password) => {
    let accessToken = AsyncStorage.getItem('accessToken');
    if (!accessToken) return accessToken;
    setIsLoading(true);
    let token = "12";
    setUserToken(token);
    AsyncStorage.setItem('acessToken', token);
    setIsLoading(false);
  }

  const signOut = async () => {
    AsyncStorage.removeItem('acessToken');
    setUserToken(null);
  }

  const signUp = async () => {
    setIsLoading(true);
    let token = "12asa"
    AsyncStorage.setItem('acessToken', token);
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, signUp, isLoading, userToken, isFirst}}>
      {children}
    </AuthContext.Provider>
  )
}