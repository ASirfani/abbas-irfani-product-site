import axios from 'axios';
// import { getToken } from './token-service/token';

axios.defaults.baseURL = "http://localhost:1234/"
// axios.interceptors.request.use((request)=>{
//     request.headers={
//         Authorization: getToken(),
//     }
//     return request;
// });
export { axios };

