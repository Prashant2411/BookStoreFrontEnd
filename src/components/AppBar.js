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

const useStyles = theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    paddingLeft: "0.5%",
    fontSize: "140%",
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
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
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
    padding: "0 0 0 2%",
    fontSize: "36px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 0 0 10%",
      fontSize: "36px"
    }
  },
  cartIcon: {
    margin: "0 0 0 15%",
    color:"white"
  },
  appBar: {
    backgroundColor: "#990033",
    position: "fixed",
  }
});

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -10,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 0 0 15%",
  },
}))(Badge);

class PrimarySearchAppBar extends Component {
  state = {
    searchKey: "",
    flag:2
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

  goToCart=(event)=>{
    this.props.bookStoreFrontPaage(this.state.flag)
  }

  homePage=(event)=>{
    this.props.bookStoreFrontPaage(1) 
   }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <MenuBookIcon className={classes.bookIcon} onClick={this.homePage}/>
            <Typography className={classes.title} value="1" variant="h6" noWrap onClick={this.homePage}>
              BookStore
            </Typography>
            <div className={classes.search}>
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
            <IconButton aria-label="cart" className={classes.cartIcon} onClick={this.goToCart}>
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon className={classes.cartIcon} />
              </StyledBadge>
            </IconButton>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(PrimarySearchAppBar);
