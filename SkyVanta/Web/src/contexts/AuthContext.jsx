import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (pb.authStore.isValid) {
      setCurrentUser(pb.authStore.model);
    }
    setInitialLoading(false);
  }, []);

  const signup = async (username, email, password) => {
    try {
      const record = await pb.collection('users').create({
        username,
        email,
        password,
        passwordConfirm: password
      }, { $autoCancel: false });
      
      const authData = await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
      setCurrentUser(authData.record);
      return { success: true };
    } catch (error) {
      if (error.data?.data?.username?.code === 'validation_not_unique') {
        return { success: false, error: 'username_taken' };
      }
      return { success: false, error: 'generic' };
    }
  };

  const login = async (username, password) => {
    try {
      const users = await pb.collection('users').getFullList({
        filter: `username = "${username}"`,
        $autoCancel: false
      });
      
      if (users.length === 0) {
        return { success: false, error: 'invalid_credentials' };
      }
      
      const authData = await pb.collection('users').authWithPassword(users[0].email, password, { $autoCancel: false });
      setCurrentUser(authData.record);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'invalid_credentials' };
    }
  };

  const logout = () => {
    pb.authStore.clear();
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    initialLoading,
    signup,
    login,
    logout,
    isAuthenticated: pb.authStore.isValid
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};