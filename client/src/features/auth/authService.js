import axios from 'axios';

const API_URL = '/api/users/';

// Register
const register = async (userData) => {
  const res = await axios.post(API_URL, userData);

  if (res) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
  return res.data;
};

// Login user
const login = async (userData) => {
  const res = await axios.post(API_URL + 'login', userData);

  if (res) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
  return res.data;
};

// Logout user
const logout = () => localStorage.removeItem('user');

// loginClick
const loginClick = (type) => {
  return type;
};
const authService = {
  register,
  logout,
  login,
  loginClick,
};

export default authService;
