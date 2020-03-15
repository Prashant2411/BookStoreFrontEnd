import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const ids = ["customerDetails", "customerDetails1", "customerDetails2", "customerDetails3", "customerDetails4", "customerDetails5", "customerDetails6", "customerDetails7", "customerDetails8", "customerDetails9"]

const styles = theme => ({
    root: {
        border: "solid lightgrey 1px",
        width: '50%',
        margin: "5% 0 0 20%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    textarea: {
        width: "95.3%",
        borderRadius: "3px",
        margin: "2% 0% 0% 1.5%",
        resize: "none"
    },
    textField: {
        marginTop: "2%",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    radioButton: {
        margin: "0 15% 0 1%",
    },
    addressType: {
        margin: "0 0 0 2%",
        paddingBottom: 0
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    button: {
        margin: "0 0 0 110%"
    },
    edit: {
        paddingTop: "0.5%",
        marginLeft: "60%",
        fontSize: "80%",
        display: 'none '
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
        expanded: null,
    };

    openPanel = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    buttonPressed = () => {
        ids.map(values => {
            document.getElementById(values).disabled = true
        })
        document.getElementById("edit").style.display = 'block'
    }

    editDetails = () => {
        ids.map(values => {
            document.getElementById(values).disabled = false
        })
        document.getElementById("edit").style.display = 'none'
    }

    updateState = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    type = async event => {
        await this.setState({Type: event.target.value});
    };

    render() {
        const {classes} = this.props;
        const {expanded} = this.state;

        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.openPanel('panel1')}>
                    <ExpansionPanelSummary>
                        <Typography className={classes.heading}>Customer Details</Typography>
                        <label className={classes.edit} id="edit" onClick={this.editDetails}>Edit</label>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <form>
                            <TextField
                                label="Name"
                                className={classes.textField}
                                name="Name"
                                id="customerDetails"
                                onChange={this.updateState}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                label="Phone Number"
                                type="number"
                                name="PhoneNumber"
                                id="customerDetails1"
                                onChange={this.updateState}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <br/>
                            <TextField
                                label="Pincode"
                                type="number"
                                id="customerDetails2"
                                name="Pincode"
                                onChange={this.updateState}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                label="Locality"
                                className={classes.textField}
                                id="customerDetails3"
                                name="Locality"
                                onChange={this.updateState}
                                margin="normal"
                                variant="outlined"
                            />
                            <br/>
                            <TextareaAutosize className={classes.textarea}
                                              aria-label="Address"
                                              rowsMin={4}
                                              id="customerDetails4"
                                              name="Address"
                                              onChange={this.updateState}
                                              rowsMax={4}
                                              placeholder="Address"
                            />
                            <br/>
                            <TextField
                                label="City"
                                id="customerDetails5"
                                className={classes.textField}
                                name="City"
                                onChange={this.updateState}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                label="Town"
                                className={classes.textField}
                                name="Town"
                                id="customerDetails6"
                                onChange={this.updateState}
                                margin="normal"
                                variant="outlined"
                            />
                            <br/>
                            <FormLabel className={classes.addressType}>Type</FormLabel>
                            <br/>
                            <RadioGroup aria-label="Gender"
                                        name="gender1"
                                        className={classes.group}
                                        onChange={this.type}
                                        row>
                                <FormControlLabel className={classes.radioButton} value="Home"
                                                  control={<Radio color="primary" id="customerDetails7"
                                                  />} label="Home"/>
                                <FormControlLabel className={classes.radioButton} value="Work"
                                                  control={<Radio color="primary" id="customerDetails8"/>}
                                                  label="Work"/>
                                <FormControlLabel className={classes.radioButton} value="Other"
                                                  control={<Radio color="primary" id="customerDetails9"/>}
                                                  label="Other"/>
                            </RadioGroup>
                            <Button className={classes.button} variant="contained"
                                    onClick={this.buttonPressed}>Continue</Button>
                        </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);