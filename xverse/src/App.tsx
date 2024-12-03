import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout/MainLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import Dashboard from "./Component/Private/Dashboard/Dashboard";
import Settings from "./Component/Private/Setting/Setting";
import Profile from "./Component/Private/Profile/Profile";
import SignIn from "./Component/Public/SignIn/SignIn";
import SignUp from "./Component/Public/SIgnUp/SIgnUp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Authenticated Routes */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />

        {/* Authentication Routes */}
        <Route
          path="/"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
