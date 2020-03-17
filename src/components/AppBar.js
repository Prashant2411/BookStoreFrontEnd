import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MenuBookIcon from "@material-ui/icons/MenuBookSharp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    paddingLeft: "0.5%",
    fontSize: "140%",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
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
    color:"rgb(184,184,184)",
    zIndex:1
  },
  // inputRoot: {
    // color: "inherit"
  // },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 400 
    },
    opacity:1,
    backgroundColor:"white",
    borderRadius:"4px"
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
    padding: "0 0 0 15%"
  },
  appBar:{
      backgroundColor:"#990033",
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <MenuBookIcon className={classes.bookIcon} />
          <Typography className={classes.title} variant="h6" noWrap>
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
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <ShoppingCartIcon className={classes.cartIcon} />
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
