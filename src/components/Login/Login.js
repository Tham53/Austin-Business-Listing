import React, { useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const handleTextChange = (evt) => {
    if (evt.target.name === "userName") {
      setUserName(evt.target.value);
    } else {
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    props.userLogin(userName);
    props.history.push("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            required
            onChange={handleTextChange}
            name="userName"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            User Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;