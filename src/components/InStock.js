import React from 'react'
import '../css/BookDetails.css'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    fontSize: "11px",
    // fontFamily: "roboto",
    marginTop: "5px",
    marginBottom: "5px",
    border: 0,
    color: 'white',
    height: 24,
    padding:"0px",
    
    width: "90px"
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
function InStock(props) {
  return (
    <React.Fragment>
      <div className="bookDivButton">
        <StyledButton style={{ background: "#990033" }} onClick={props.addToCart}>ADD TO CART</StyledButton>
        <StyledButton style={{ background: "white", color: "black", border: "1px solid black" }}>WISH LIST</StyledButton>
      </div>
    </React.Fragment>
  )
}

export default InStock
