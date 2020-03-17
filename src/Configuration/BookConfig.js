const axios = require('axios');

export function getBookList(){
    return axios({
        method: 'get',
        url:'http://localhost:8080/bookstore/allbooks/1'
    })
}