import axios from 'axios';

export const getUserInfo = () => axios.get('static/mock-data/userInfo.json');
