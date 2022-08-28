import axios from 'axios';

const API_URL = '/api/community/';

// Create new Community
const createCommunity = async (communityData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post(API_URL, communityData, config);

  return res.data;
};

// Get All Communities
const getAllCommunity = async (queryString) => {
  const res = await axios.get(API_URL + `/list?${queryString}`);

  return res.data;
};

// Get getCommunity
const getCommunity = async (communityId) => {
  const res = await axios.get(API_URL + communityId);

  return res.data;
};

const communityService = { createCommunity, getAllCommunity, getCommunity };

export default communityService;
