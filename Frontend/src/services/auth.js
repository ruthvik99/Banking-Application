import api from './api';

export const login = async ({ email, password }) => {
  const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token); // Save token
      return data;
  } else {
      throw new Error('Login failed');
  }
};

export const signup = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};
