import axios from 'axios';

const API_BASE_URL = 'find-api-url';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getStrains = async () => {
  const response = await api.get('/strains');
  return response.data;
};

export const getStrainById = async (strainId) => {
  const response = await api.get(`/strains/${strainId}`);
  return response.data;
};

export const addStrain = async (strainData) => {
  const response = await api.post('/strains', strainData);
  return response.data;
};
