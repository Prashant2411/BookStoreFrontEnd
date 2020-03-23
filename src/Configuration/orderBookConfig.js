import axios from 'axios'


export function addOrderData(newObject){
 //console.log("second   ",newObject)

     return axios({
         method:'post',
         url:'http://localhost:8080/bookstore/customerbookdetails',
          data:newObject
         // {
              // bookIds:newObject.bookId,
              // noOfCopies:newObject.noOfCopies,
              // orderPrice:newObject.orderPrice,
              // customerName:newObject.customerName,
              // mobileNo:newObject.mobileNo,
              // pincode:newObject.pincode,
              // locality:newObject.locality,
              // address:newObject.address,
              // city:newObject.city,
              // town:newObject.town,
              // type:newObject.type
         //}
         
     })
     
}