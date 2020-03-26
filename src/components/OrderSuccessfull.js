import React, { Component, Fragment } from "react";
import success from "../asserts/success1.png";
import "../css/orderSuccessfull.css";
import AppBar from "./AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  button: {
    backgroundColor: "rgb(47,115,183)",
    "&:hover": {
      backgroundColor: "rgb(30,80,183)",
      color: "#FFF"
    }
  }
});

export class OrderSuccessfull extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderId: JSON.parse(localStorage.getItem("orderId"))
    };
  }

  homePage = () => {
    this.props.history.push({
      pathname: "/"
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar homePage={this.homePage} />
        <div className="successDiv">
          <img className="successImg" src={success} alt="SuccessfullImage" />
          <p className="successH3">Order Placed Successfully</p>
          <p className="paragraph">
            hurray!!! your order is confirmed<br/> 
            the order id #{this.state.orderId} save the order id <br/>
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
              <td>
                Malhotra Chambers, First Floor, Govandi East, Mumbai,
                Maharashtra 400088
              </td>
            </tr>
          </table>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              onClick={this.homePage}
              id="placeOrderButton"
              variant="contained"
              className={classes.button}
              color="primary"
            >
              Continue Shopping
            </Button>
          </Grid>
        </div>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default withStyles(styles)(OrderSuccessfull);
