import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { withStyles } from "@material-ui/core/styles";
import "../App.css";
import {addBookConfiguration,addUploadConfiguration} from '../configuration/configuration'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuBookIcon from "@material-ui/icons/MenuBookSharp";

const useStyles = theme => ({
  grow: {
    flexGrow: 1,
  },
  bookIcon: {
    padding: "0 0 0 2%",
    fontSize: "36px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 0 0 10%",
      fontSize: "36px"
    }
  },
  title: {
    display: "none",
    paddingLeft: "0.5%",
    fontSize: "140%",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  root: {
    border: "3px solid rgb(145,10,10)",
    borderRadius: "10px",
    margin: "2% 15% 3% 15%",
    padding: "2% 5% 2% 20%",
    "& > *": {
      margin: theme.spacing(1),
      width: "70%"
    }
  },
  textArea: {
    width: "69%",
    borderRadius: "5px",
    resize: "none"
  },
  addBook: {
    marginLeft: "11%",
    backgroundColor: "rgb(145,10,10)",
    width: "50%",
    color: "white"
  },
  heading: {
    color: "rgb(145,10,10)",
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
    Price: "",
    Stock: "",
    Year: "",
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
  
  validateAuthor = (event) => {
    const regexp = /^[A-Za-z]{3,20}$/;
    const char=event.target.value;
    if(!regexp.test(char)){
      alert("Invalid Author Name")
      this.setState({
        [event.target.name]:""
      })
    }
  }

  validateYear = async (event) => {
    const yearVal = event.target.value;
    const regexp = /[1-2]\d{3}$/
    if(!regexp.test(yearVal)){
      alert("Invalid Year")
      await this.setState({
        [event.target.name]:""
      })
    }
    else if(yearVal > 2020)
    {
      alert("Year should be in range 1100 to current year");
      await this.setState({
        [event.target.name]:""
      })
    }
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
      <Fragment>
      <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: "#990033"}}>
        <Toolbar>
          <MenuBookIcon className={classes.bookIcon} />
          <Typography className={classes.title} variant="h6" noWrap>
            BookStore
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      <form onSubmit={this.addBook} className={classes.root} autoComplete="off">
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
          required
        />
        <br />
        <TextField
          label="Author"
          variant="outlined"
          name="Author"
          value={this.state.Author}
          onBlur={this.validateAuthor}
          onChange={this.updateState}
          required
        />
        <br />
        <TextField
          type="number"
          label="Price"
          variant="outlined"
          name="Price"
          onChange={this.updateState}
          required
        />
        <br />
        <TextField
          type="text"
          label="Year"
          variant="outlined"
          name="Year"
          value={this.state.Year}
          onBlur={this.validateYear}
          onChange={this.updateState}
          required
        />
        <br/>
        <TextField
          type="number"
          label="Stock"
          variant="outlined"
          name="Stock"
          value={this.state.Stock}
          onChange={this.updateState}
          required
        />
        <br />
        <TextareaAutosize
          className={classes.textArea}
          rowsMin={4}
          rowsMax={4}
          placeholder="Book Detail"
          name="BookDetails"
          onChange={this.updateState}
          required
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
            required
          />
        </Button>
        <p className={classes.url}>{this.state.imgName}</p>
        <Button
          type="submit"
          className={classes.addBook}
          variant="contained"
        >
          Add Book
        </Button>
      </form>
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(BasicTextFields);