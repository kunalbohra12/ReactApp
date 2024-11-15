// src/api/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://65.1.254.166:5000/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, add interceptors for handling auth tokens or logging
apiClient.interceptors.request.use((config) => {
  // Add auth token if available
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default apiClient;

