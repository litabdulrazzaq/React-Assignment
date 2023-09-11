import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import UpdateOperation from "./EditOperation"; // Import the UpdateOperation component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReadOperation() {
  const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editUser, setEditUser] = useState(null); // State to hold the user being edited

  useEffect(() => {
    // Fetch user data from localStorage when the component mounts
    const storedData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedData);
  }, []);

  const handleDeleteUser = (userId) => {
    setDeleteUserId(userId);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Delete a user by filtering out the matching user
    const updatedUsers = users.filter((user) => user.id !== deleteUserId);
    setUsers(updatedUsers);

    // Update localStorage with the updated data
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Close the delete confirmation dialog
    setIsDeleteDialogOpen(false);

    toast.error("Record Deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleCancelDelete = () => {
    // Clear the deleteUserId and close the delete confirmation dialog
    setDeleteUserId(null);
    setIsDeleteDialogOpen(false);
  };

  const handleEditUser = (user) => {
    // Set the user being edited when the Edit button is clicked
    setEditUser(user);
  };

  const handleUpdateUser = (updatedData) => {
    // Update the user's data in the user list
    const updatedUsers = users.map((user) =>
      user.id === editUser.id ? { ...user, ...updatedData } : user
    );
    setUsers(updatedUsers);

    // Update localStorage with the updated data
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Clear the editUser state
    setEditUser(null);
  };

  return (
    <>
      <ToastContainer />
      <Container maxWidth="lg" style={{ marginTop: "10px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>
                    <Button
                      style={{ marginRight: "10px" }}
                      variant="outlined"
                      startIcon={<Edit />}
                      onClick={() => handleEditUser(user)} // Pass the user to edit
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => console.log("Create a new user")}
        >
          <NavLink
            to={"/signupForm"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Create User
          </NavLink>
        </Button>

        {/* Delete Confirmation Dialog */}
        <Dialog open={isDeleteDialogOpen} onClose={handleCancelDelete}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this user?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete} color="primary">
              No
            </Button>
            <Button onClick={handleConfirmDelete} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>

        {/* Update Operation Dialog */}
        <UpdateOperation
          user={editUser}
          onUpdate={handleUpdateUser}
          onCancel={() => setEditUser(null)} // Close the edit dialog
        />
      </Container>
    </>
  );
}

export default ReadOperation;
