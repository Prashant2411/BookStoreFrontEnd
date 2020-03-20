const axios = require('axios');
export function getBookList(pageNo){
    return axios({
        method: 'get',
        url:"http://localhost:8080/bookstore/allbooks/"+pageNo
    })
}

export function getSearchedBooks(attribute) {
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/search/" + attribute + "/1"
    })
}

export function getBooksCount(attribute) {
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/bookcount/" + attribute
    })
}

export function getSortAttribute() {
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/sortattribute"
    })
}

export function getSortAttribute() {
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/sortattribute"
    })
}

export function getSortedBookList(attribute){
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/sortattribute/"+attribute+"/"+1
    })
}
