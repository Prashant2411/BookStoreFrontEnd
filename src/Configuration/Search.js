const axios = require('axios');

const getSearchedBooks = (attribute) => {
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/search/"+attribute+"/1",
    })
}

export default getSearchedBooks
