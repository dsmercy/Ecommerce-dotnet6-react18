import axios from "axios";

axios.defaults.baseURL = 'http://localhost:7069/api/';
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

const sleep = () => new Promise(resolve => setTimeout(resolve, 300));

// axios.interceptors.request.use(config => {
//     const token = store.getState().account.user?.token;
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
// })

// axios.interceptors.response.use(async response => {
//     return response;
// }, (error) => {
//     const { data, status } = error.response;
//     switch (status) {
//         case 400:
//             if (data.errors) {
//                 const modelStateErrors = [];
//                 for (const key in data.errors) {
//                     if (data.errors[key]) {
//                         modelStateErrors.push(data.errors[key])
//                     }
//                 }
//                 throw modelStateErrors.flat();
//             }
//             toast.error(data.title);
//             break;
//         case 401:
//             toast.error(data.title);
//             break;
//         case 404:
//             toast.error(data.title);
//             break;
//         case 500:
//             history.push({
//                 pathname: '/server-error',
//                 state: {error: data}
//             });
//             break;
//         default:
//             break;
//     }
//     return Promise.reject(error.response);
// })

const requests = {
    get: (url, params) => axios.get(url, { params }).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
}

const Account = {
    login: (values) => requests.post('account/login', values),
    register: (values) => requests.post('account/register', values)
}


const Product = {
    getAll: () => requests.get('product'),
    // get: () => requests.get('product?PageSize=8'),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
}

const services = {
    Account,
    Product
}


export default services;