import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      fontSize:"11px",
      fontFamily:"roboto",
      marginTop:"5px",
      marginBottom:"5px",
      border: 0,
      color: 'white',
      height: 24,
      fontWeight:"bold",
      paddingTop:"3px",
      width:"80px"
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
function OutOfStock() {
    return (
        <React.Fragment>
            <div className="bookDivButton">
            <StyledButton style={{background:"white",color:"black",border:"1px solid black",width:"170px"}}>Wish List</StyledButton>
            </div>
        </React.Fragment>
    )
}

export default OutOfStock
