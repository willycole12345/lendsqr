import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserView from "./pages/User/view";
function App() {

                
                  return (
                  <BrowserRouter>
                  <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users/:userid" element={<UserView />} />

                  </Routes>
                  </BrowserRouter>
                  );
  }

 export default App;
