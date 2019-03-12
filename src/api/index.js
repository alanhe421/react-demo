import axios from 'axios';

export const getUserInfo = () => axios.get('static/mock-data/userInfo.json');
export const getUserHistory = () => axios.get('static/mock-data/userHistory.json');
