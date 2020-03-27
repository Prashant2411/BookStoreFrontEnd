import React, { Component } from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MenuBookIcon from "@material-ui/icons/MenuBookSharp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Styles from "../css/snackbar.module.css";
import { withRouter } from 'react-router-dom'
import '../css/BookDetails.css'
import Grid from "@material-ui/core/Grid";

const useStyles = theme => ({
  title: {
    display: "none",
    paddingLeft: "0.5%",
    fontSize: "140%",
    overflow:"visible",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: "10%",
    width: "55%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(15),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(184,184,184)",
    zIndex: 1
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    justifyContent:'center',
    transition: theme.transitions.create("width"),
    paddingRight:30,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 400
    },
    opacity: 1,
    backgroundColor: "white",
    borderRadius: "4px"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  bookIcon: {
    fontSize: "36px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "36px"
    }
  },
  cartIcon: {
    color: "white",
    marginLeft:"0%",
    [theme.breakpoints.up("sm")]: {
      marginLeft:"10%",
    }
  },
  appBar: {
    padding:'0 10%',
    backgroundColor: "#990033",
    position:"fixed"
  },
  toolbar:{
    display:"flex",
    justifyContent:"space-between"
  },
  gridDiv:{
    width: "auto",
    flexWrap: "noWrap",
    alignItems:"center"
  }

});

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -10,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Badge);

class PrimarySearchAppBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchKey: "",
      status: "Your Cart is Empty",
      isActive: false,
    }

  }

  openSnackBar = async () => {
    await this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    });
  };

  searchData = async event => {
    if (event.target.value !== "") {
      this.props.searchBookList(event.target.value)
    }
    else if (event.target.value === "") {
      await this.props.displayType('allBooks')
      await this.props.bookList();
    }
  }

  goToCart = () => {
    if (this.props.history.location.pathname === "/")
      this.props.goToCart()
  }

  homePage = (event) => {
    if (this.props.history.location.pathname !== "/") {
       this.props.homePage()
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
          <Grid container className={classes.gridDiv}>
            <MenuBookIcon className={classes.bookIcon} onClick={this.homePage} />
            <Typography className={classes.title} value="1" variant="h6" noWrap onClick={this.homePage}>
              BookStore
            </Typography>
            </Grid>
            <div className={(this.props.history.location.pathname === "/") ? classes.search : "hidden"}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={this.searchData}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <IconButton aria-label="cart" className={classes.cartIcon} onClick={(this.props.cartBooksCount > 0) ? this.goToCart : this.openSnackBar}>
              <StyledBadge badgeContent={this.props.cartBooksCount} color="secondary">
                <ShoppingCartIcon className={classes.cartIcon} />
              </StyledBadge>
            </IconButton>
            
          </Toolbar>
        </AppBar>

        <div
          className={
            this.state.isActive
              ? [Styles.snackbar, Styles.show].join(" ")
              : Styles.snackbar
          }
        >
          {this.state.status}
        </div>

      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(PrimarySearchAppBar));
