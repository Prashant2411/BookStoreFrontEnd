import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const ids = [
  "customerDetails",
  "customerDetails1",
  "customerDetails2",
  "customerDetails3",
  "customerDetails4",
  "customerDetails5",
  "customerDetails6",
  "customerDetails7",
  "customerDetails8",
  "customerDetails9"
];

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
  },
  textarea: {
    width: "94%",
    borderRadius: "3px",
    margin: "2% 0% 0% 1.5%",
    resize: "none"
  },
  textField: {
    marginTop: "2%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "46%"
  },
  radioButton: {
    margin: "0 15% 0 1%"
  },
  addressType: {
    margin: "0 0 0 2%",
    paddingBottom: 0
  },
  group: {
    margin: `${theme.spacing(1)}px 0`
  },
  button: {
    margin: "0 0 0 60%",
    [theme.breakpoints.up("md")]: {
      margin: "0 0 0 100%"
    }
  },
  edit: {
    paddingTop: "0.5%",
    marginLeft: "60%",
    fontSize: "80%",
    display: "none ",
    cursor: "pointer"
  },
  form: {
    margin: "0 0 0 17%"
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    Name: "",
    PhoneNumber: "",
    Pincode: "",
    Locality: "",
    Address: "",
    City: "",
    Town: "",
    Type: "",
    expanded: false,
    formValid: true
  };

  validate = e => {
    const regexp = /[A-Za-z]{3,20}/;
    const char = e.target.value;
    if (!regexp.test(char)) {
      alert("Invalid Name");
      this.setState({
        [e.target.name]: ""
      });
    }
  };

  validatePhoneNumbeer = e => {
    const regexp1 = /[5-9]\d{9}$/;
    const char = e.target.value;
    if (!regexp1.test(char)) {
      alert("Invalid Phone Number");
      this.setState({
        [e.target.name]: ""
      });
    }
  };

  validatePinCode = e => {
    const regexp2 = /[1-9]\d{5}$/;
    const char = e.target.value;
    if (!regexp2.test(char)) {
      document.getElementById(e.target.id).style.border = "red";
      alert("Invalid Data");
      this.setState({
        [e.target.name]: ""
      });
    }
  };

  validateRadioButton = async () => {
    if (
      document.getElementById("customerDetails7").checked === true ||
      document.getElementById("customerDetails8").checked === true ||
      document.getElementById("customerDetails9").checked === true
    ) {
      return null;
    }
    await this.setState({ formValid: false });
  };

  buttonPressed = async event => {
    this.setState({ formValid:true })
    await ids
      .filter(value => {
        if (
          value === "customerDetails9" ||
          value === "customerDetails8" ||
          value === "customerDetails7"
        ) {
          
          return false;
        }
        return true;
      }).map(value =>
      document.getElementById(value).checkValidity() === false
        ? this.setState({ formValid : false })
        : null,
    );
    await this.validateRadioButton();
    if (this.state.formValid === false) {
      alert("Invalid Data");
      return this.state.formValid;
    }
    ids.map(values => (document.getElementById(values).disabled = true));
    document.getElementById("edit").style.display = "block";
    document.getElementById("onSumbit").style.display = "none";
    this.props.handleExpantion("expanded2");
  };

  editDetails = () => {
    ids.map(values => (document.getElementById(values).disabled = false));
    document.getElementById("edit").style.display = "none";
    document.getElementById("onSumbit").style.display = "none";
  };

  updateState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <ExpansionPanel className={classes.root} expanded={this.props.expanded}>
        <ExpansionPanelSummary>
          <Typography className={classes.heading}>
            <b>Customer Details</b>
          </Typography>
          <label className={classes.edit} id="edit" onClick={this.editDetails}>
            Edit
          </label>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form className={classes.form}>
            <TextField
              label="Name"
              type="text"
              className={classes.textField}
              value={this.state.Name}
              name="Name"
              id="customerDetails"
              onBlur={this.validate}
              onChange={this.updateState}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Phone Number"
              type="text"
              name="PhoneNumber"
              id="customerDetails1"
              value={this.state.PhoneNumber}
              onBlur={this.validatePhoneNumbeer}
              onChange={this.updateState}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              required
            />
            <br />
            <TextField
              label="Pincode"
              type="text"
              id="customerDetails2"
              name="Pincode"
              value={this.state.Pincode}
              onBlur={this.validatePinCode}
              onChange={this.updateState}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Locality"
              className={classes.textField}
              id="customerDetails3"
              name="Locality"
              value={this.state.Locality}
              onBlur={this.validate}
              onChange={this.updateState}
              margin="normal"
              variant="outlined"
              required
            />
            <br />
            <TextareaAutosize
              className={classes.textarea}
              arial-label="Address"
              rowsMin={4}
              id="customerDetails4"
              name="Address"
              onChange={this.updateState}
              rowsMax={4}
              placeholder="Address*"
              variant="outlined"
              required
            />
            <br />
            <TextField
              label="City"
              id="customerDetails5"
              className={classes.textField}
              name="City"
              value={this.state.City}
              onBlur={this.validate}
              onChange={this.updateState}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Town"
              className={classes.textField}
              name="Town"
              id="customerDetails6"
              value={this.state.Town}
              onBlur={this.validate}
              onChange={this.updateState}
              margin="normal"
              variant="outlined"
              required
            />
            <br />
            <FormLabel className={classes.addressType}>Type</FormLabel>
            <br />
            <RadioGroup
              aria-label="Type"
              name="Type"
              className={classes.group}
              onChange={this.updateState}
              row
            >
              <FormControlLabel
                className={classes.radioButton}
                value="Home"
                control={<Radio color="primary" id="customerDetails7" />}
                label="Home"
              />
              <FormControlLabel
                className={classes.radioButton}
                value="Work"
                control={<Radio color="primary" id="customerDetails8" />}
                label="Work"
              />
              <FormControlLabel
                className={classes.radioButton}
                value="Other"
                control={<Radio color="primary" id="customerDetails9" />}
                label="Other"
              />
            </RadioGroup>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              id="onSumbit"
              onClick={this.buttonPressed}
            >
              Continue
            </Button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(ControlledExpansionPanels);