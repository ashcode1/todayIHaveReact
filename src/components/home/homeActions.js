import axios from 'axios';
import { ROOT_URL } from '../../config';

export const getUpdates = () => {
  return axios
    .get(`${ROOT_URL}/updates`, { crossdomain: true })
    .then(response => {
      console.log(response).catch(error => {
        console.log(error);
      });
    });
};
