import axios from 'axios'

const BASE_URL = 'http://localhost:3000/order-history';

const getAllOrderHistory = () => 
    axios.get(BASE_URL).then(response => response.data);

const getOrderHistoryById = id => 
    axios.get(`${BASE_URL}/${id}`).then(response => response.data);
    

const deleteOrderHistoryItem = id => 
    axios.delete(`${BASE_URL}/${id}`).then(response => 
        response.status === 200);

const addOrderHistoryItem = item => axios.post(BASE_URL, item).then(response => {
    console.log(response);
})

export { getAllOrderHistory, getOrderHistoryById, deleteOrderHistoryItem, addOrderHistoryItem };