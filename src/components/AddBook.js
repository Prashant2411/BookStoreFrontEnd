import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { withStyles } from "@material-ui/core/styles";
import "../App.css";
import {addBookConfiguration,addUploadConfiguration} from '../configuration/configuration'

const useStyles = theme => ({
  root: {
    border: "3px solid rgb(24, 12, 196)",
    borderRadius: "10px",
    margin: "7% 15% 7% 15%",
    padding: "2% 5% 2% 20%",
    "& > *": {
      margin: theme.spacing(1),
      width: "70%"
    }
  },
  textArea: {
    width: "69%",
    borderRadius: "5px"
  },
  addBook: {
    marginLeft: "11%",
    backgroundColor: "rgb(24, 12, 196)",
    width: "50%",
    color: "white"
  },
  heading: {
    color: "rgb(24, 12, 196)",
    width: "100%",
    marginTop: "1%"
  },
  url: {
    margin: "0 0 0 2%",
    fontSize: "60%"
  }
});

class BasicTextFields extends Component {
  state = {
    Title: "",
    Author: "",
    Price: 0,
    Stock: 0,
    Year: 0,
    BookDetails: "",
    files: "",
    imgName: ""
  };

  changeUrl = event => {
    this.setState({ files: event.target.value });
  };

  updateState = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addBook = () => {
    addBookConfiguration(this.state);
  }

  uploadButtonClick = async (event) => {
    await this.setState({
      files:event.target.files[0], 
      imgName:event.target.value
    });
    const formData = new FormData();
    formData.append('file',this.state.files);
    addUploadConfiguration(formData).then((response)=>{
      this.setState({
        files:response.data
      })
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <Typography
          className={classes.heading}
          variant="h4"
          component="h2"
          gutterBottom
        >
          Add Books
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          name="Title"
          onChange={this.updateState}
        />
        <br />
        <TextField
          label="Author"
          variant="outlined"
          name="Author"
          onChange={this.updateState}
        />
        <br />
        <TextField
          type="number"
          label="Price"
          variant="outlined"
          name="Price"
          onChange={this.updateState}
        />
        <br />
        <TextField
          type="number"
          label="Year"
          variant="outlined"
          name="Year"
          onChange={this.updateState}
        />
        <br/>
        <TextField
          type="number"
          label="Stock"
          variant="outlined"
          name="Stock"
          onChange={this.updateState}
        />
        <br />
        <TextareaAutosize
          className={classes.textArea}
          rowsMin={4}
          rowsMax={4}
          placeholder="Book Detail"
          name="BookDetails"
          onChange={this.updateState}
        />
        <br />
        <Button variant="contained" component="label">
          Upload Image
          <input
            type="file"
            style={{ display: "none" }}
            name="image"
            onChange={this.uploadButtonClick}
            accept="Image/*"
          />
        </Button>
        <p className={classes.url}>{this.state.imgName}</p>
        <Button
          className={classes.addBook}
          variant="contained"
          component="label"
          onClick={this.addBook}
        >
          Add Book
        </Button>
      </form>
    );
  }
}

export default withStyles(useStyles)(BasicTextFields);
