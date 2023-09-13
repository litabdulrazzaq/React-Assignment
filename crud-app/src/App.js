import "./App.css";
import SignupForm from "./components/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import React from "react";
import ReadOperation from "./components/ReadOperation";
import UpdateOperation from "./components/EditOperation";
import Calculator from "./components/Calculator/Calculator";
import DataTable from "./components/DataTable/DataTable";
import TextClick from "./components/ClickText/TextClick";
import DrowpDown from "./components/ClickText/DrowpDown";
import ShowDropDown from "./components/ClickText/ShowDropDown";
import ColorPicker from "./components/ColorPicker/ColorPiker";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<LoginForm />} />
          <Route path="/readOperation" element={<ReadOperation />} />
          <Route path="/edit" element={<UpdateOperation />} />
        </Routes>
      </BrowserRouter> */}
      <DataTable />
    </div>
  );
}

export default App;
