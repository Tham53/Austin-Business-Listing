import React, { useEffect } from "react";
import { checkAuth } from "../../checkAuth";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Fade, Typography, Paper } from "@material-ui/core";

//nav bar styling(css)
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    paddingLeft: 30,
    paddingRight: 30,
    padding: 10,
  },
  fadeIn: {
    padding: 6,
    paddingLeft: "5%",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  useEffect(() => {
    console.log(typeof props.user);
  });

  return (
    <React.Fragment>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Directory for Unique Austin Businesses
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Directory</Link>
            </li>
            {checkAuth() && (
              <li className="nav-list-item">
                <Link to="/add">Add Business</Link>
              </li>
            )}
            {checkAuth() ? (
              <li
                className="nav-list-item"
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace("/login");
                }}
              >
                <Link to="/login">Logout</Link>
              </li>
            ) : (
              <li className="nav-list-item">
                <Link to="/login">User Login</Link>
              </li>
            )}
          </ul>
        </Toolbar>
      </AppBar>
      <Fade in={checkAuth()} className={classes.fadeIn}>
        <Paper elevation={5}>
          <Typography>Hello there! {props.user}</Typography>
        </Paper>
      </Fade>
    </React.Fragment>
  );
};

export default NavBar;