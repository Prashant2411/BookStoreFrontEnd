const axios = require('axios');
export function getBookList(pageNo){
    return axios({
        method: 'get',
        url:"http://localhost:8080/bookstore/allbooks/"+pageNo
    })
}

export function getSearchedBooks(attribute,pageNo) {
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/search/" + attribute + "/"+pageNo
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

export function getSortedBookList(attribute,pageNo){
    return axios({
        method: "get",
        url: "http://localhost:8080/bookstore/sortattribute/"+attribute+"/"+pageNo
    })
}
