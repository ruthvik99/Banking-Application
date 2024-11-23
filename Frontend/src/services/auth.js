import api from './api';

// Login function
export const login = async ({ username, password }) => {
  const response = await fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }), // Use "username" and "password"
  });

  if (response.ok) {
    const data = await response.json();
    // Save the token to localStorage
    localStorage.setItem('token', data.token);
    return data;
  } else {
    // Extract error message if provided by the server
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }
};

// Signup function
export const signup = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Logout function
export const logout = () => {
  // Clear token from localStorage
  localStorage.removeItem('token');
  // Optional: redirect to login page
  window.location.href = '/login';
};