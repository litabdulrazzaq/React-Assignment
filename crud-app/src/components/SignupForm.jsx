import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  Paper,
} from "@mui/material";
import { AccountCircle, Email, Lock, Phone, Home } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    id: 1, // Start with id 1
    username: "",
    email: "",
    password: "",
    reenterPassword: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Check if any required field is empty
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.reenterPassword ||
      !formData.phoneNumber
    ) {
      // Show an error toast
      toast.error("Input Fields are empty", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.reenterPassword) {
      toast.error("Password Do not match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // If all checks pass, save the record and show success message
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    const newId =
      userData.length === 0 ? 1 : userData[userData.length - 1].id + 1;
    const updatedFormData = { ...formData, id: newId }; // Increment id
    userData.push(updatedFormData);
    localStorage.setItem("users", JSON.stringify(userData));

    toast.success("Record Saved", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  };

  return (
    <>
      <ToastContainer />
      <Container maxWidth="sm">
        <Paper
          elevation={2}
          style={{ padding: "10px 20px", marginTop: "10px" }}
        >
          <h2>Sign Up</h2>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="username" required>
              Username{" "}
            </InputLabel>
            <Input
              required
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              startAdornment={<AccountCircle />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email" required>
              Email{" "}
            </InputLabel>
            <Input
              required
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              startAdornment={<Email />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password" required>
              Password{" "}
            </InputLabel>
            <Input
              required
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              startAdornment={<Lock />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="reenterPassword" required>
              Re-enter Password{" "}
            </InputLabel>
            <Input
              required
              id="reenterPassword"
              name="reenterPassword"
              type="password"
              value={formData.reenterPassword}
              onChange={handleChange}
              startAdornment={<Lock />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="phoneNumber" required>
              Phone Number
            </InputLabel>
            <Input
              required
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              startAdornment={<Phone />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="address">Address</InputLabel>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              startAdornment={<Home />}
            />
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default SignupForm;
