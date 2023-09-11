import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateOperation({ user, onUpdate, onCancel }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  // Populate the form fields with user data when user prop changes
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    // Perform validation here, e.g., check if required fields are filled
    if (!formData.username || !formData.email) {
      toast.error("UserName or Email are Empty", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Display an error message or handle validation as needed
      return;
    }
    onUpdate(formData);
  };

  return (
    <>
      <ToastContainer />
      <Dialog open={!!user} onClose={onCancel}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="username">Username *</InputLabel>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="email">Email *</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="address">Address</InputLabel>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UpdateOperation;
