import React, { Component } from 'react'
import success from '../asserts/success1.png'
import '../css/orderSuccessfull.css'

export class OrderSuccessfull extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orderId: 13342
    }
  }

  render() {
    return (
      <div className="successDiv">
        <img className="successImg" src={success} />
        <h2 className="successH3">Order Placed Successfully</h2>
        <p className="paragraph">
          hurray!!! your order is confirmed the
          order id {this.state.orderId}.
          for further communication..
        </p>

        <table>
          <tr>
            <th>Email Us</th>
            <th>Contact Us</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>admin @ bookstore.com</td>
            <td>+91-8163-475881</td>
            <td>Malhotra Chambers, First Floor, Govandi East, 
              Mumbai, Maharashtra 400088</td>
          </tr>
        </table>
        <button class="successfullButton successfullButton1">Continue Shopping</button>
      </div>
    )
  }
}

export default OrderSuccessfull

