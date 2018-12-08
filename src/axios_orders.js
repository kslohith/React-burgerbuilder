import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-2fed7.firebaseio.com/'
});

export default instance;
