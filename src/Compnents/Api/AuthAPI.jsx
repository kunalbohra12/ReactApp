// src/api/authAPI.js
import apiClient from '../Api/ApiRequest';

// Register a new user
export const signUp = async (data) => {
  return await apiClient.post('/auth/signup', data);
};

// Login a user
export const login = async (data) => {
  return await apiClient.post('/auth/login', data);
};

// Logout (if server requires API logout)
export const logout = async (data) => {
  return await apiClient.post('/auth/logout');
};

// Logout (if server requires API logout)
export const forgot = async (data) => {
    return await apiClient.post('/auth/forgot_password',data);
  };

  // Logout (if server requires API logout)
export const OtpVerification = async (data) => {
    return await apiClient.post('/auth/forgot_password_verify_otp',data);
  };

  // Logout (if server requires API logout)
  export const setPassword = async (data) => {
    return await apiClient.post('/auth/set_new_password',data);
  };