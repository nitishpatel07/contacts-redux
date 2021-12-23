import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSingleUser, updateUser } from "../redux/action";
import { useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  const { name, email, contact, address } = state;

  let dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  const { user } = useSelector((state) => state.users);
  console.log(user);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address && email && contact) {
      setState({ name: "", email: "", contact: "", address: "" });
      setError("");
      dispatch(updateUser(state, id));
      history.push("/");
    } else {
      setError("Please fill all the required fields");
    }
  };
  return (
    <div style={{ margin: "35px" }}>
      <Button
        style={{ marginBottom: "35px" }}
        align="center"
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
      >
        GO BACK
      </Button>
      <h2>ADD USER</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          type="text"
          name="name"
          value={name}
          variant="standard"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          type="email"
          name="email"
          value={email}
          variant="standard"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          type="number"
          name="contact"
          value={contact}
          variant="standard"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          type="text"
          name="address"
          value={address}
          variant="standard"
          onChange={handleInputChange}
        />
      </Box>
      <Button
        style={{ marginTop: "35px" }}
        align="center"
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        UPDATE DATA
      </Button>
    </div>
  );
};

export default EditUser;
