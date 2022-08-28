import axios from 'axios';

const API_URL = '/api/createCommunity/';

// Create new Community
const createCommunity = async (communityData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post(API_URL, communityData, config);

  return res.data;
};

const communityService = { createCommunity };

export default communityService;
