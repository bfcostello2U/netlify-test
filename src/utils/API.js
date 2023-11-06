import axios from 'axios';

const unusedVariable = undefined;

const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users/');
};

const getSingleUser = (paramId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${paramId}`);
};

export default {
  getUsers,
  getSingleUser,
};
