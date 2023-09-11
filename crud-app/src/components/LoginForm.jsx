import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  Paper,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    const storedUserData = JSON.parse(localStorage.getItem("users")) || [];
    const { email, password } = formData;

    // Check if email and password match any stored user data
    const matchingUser = storedUserData.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      navigate("/readOperation"); // Corrected navigation path
      toast.error("Successfully Login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      //   alert("Login successful!");
      // You can replace this with actual login logic
      setError("");
    } else if (formData.email === "" && formData.password === "") {
      toast.error("Enter Email and Password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Correct Email and Password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <ToastContainer />

      <Paper elevation={2} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h3">Login</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* Use NavLink to wrap the button for navigation */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Login
        </Button>
        <br />
        <br />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/signupForm")}
        >
          Create Account
        </Button>
      </Paper>
    </Container>
  );
}

export default LoginForm;
