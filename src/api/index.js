import axios from 'axios';

export const getUserInfo = () => axios.get('static/mock-data/userInfo.json');

export const getAddress = () => axios.get('static/mock-data/address.json');

export const getUserHistory = () => axios.get('static/mock-data/userHistory.json');

export const getBooks = () => axios.get('static/mock-data/books.json');
