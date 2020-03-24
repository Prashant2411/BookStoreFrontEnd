import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    border: "solid lightgray 2px",
    width: "99.6%",
    marginTop: "2%",
    boxShadow: "1px 1px 1px 1px lightgray"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  }
});

class OrderSummary extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <ExpansionPanel className={classes.root} expanded={this.props.expanded2}>
        <ExpansionPanelSummary>
          <Typography className={classes.heading}>
            <b>OrderSummary</b>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="bookDivHolder1">
            {this.props.books.map(value => {
              return (
                <div className="bookDivHolder">
                  <img
                    src={value.bookImageSrc}
                    className="cartBookImg"
                    alt="bookImage"
                  />
                  <div className="cartBookDetails">
                    <h5 className="titleFont">{value.bookName}</h5>
                    <p className="authorFont"> {value.authorName}</p>
                    <h4 className="priceFontCart">
                      Rs.{value.bookPrice} &#215; {value.quantity}{" "}
                    </h4>
                  </div>
                </div>
              );
            })}
            <h4>
              <b>Subtotal: {this.props.subTotal}</b>
            </h4>
            {this.props.booksInCart !== 0 ? (
              <Button
                className={classes.button}
                // className="checkoutButton"
                variant="contained"
                color="primary"
                id="onSumbit"
                onClick={this.props.checkout}
              >
                Checkout{" "}
              </Button>
            ) : null}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(OrderSummary);
