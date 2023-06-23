import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ChatPage from '../ChatPage/ChatPage';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Layout from '../Layout/Layout';
import ResourcesPage from '../ResourcesPage/ResourcesPage';
import EditProfilePage from '../profilePage/EditProfilePage';
import ProfilePage from '../profilePage/ProfilePage';
import JobsPage from '../JobsPage/JobsPage';
import AlumniSearchPage from '../AlumniSearchPage/AlumniSearchPage';


import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
      <Routes>

        <Route path ="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<LandingPage />} />

          <Route element={<Layout />}>

          <Route
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <ChatPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/registration"
            element={user.id ? <Navigate to="/editprofile" /> : <RegisterPage />}
          />

          <Route
            path="/login"
            element={user.id ? <Navigate to="/home" /> : <LoginPage />}
          />

          <Route
            path="/editprofile"
            element={
              <ProtectedRoute user={user}>
                <EditProfilePage />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/user"
            element={
              <ProtectedRoute user={user}>
                <UserPage />
              </ProtectedRoute>
            }
          /> */}


          {/* ESTABLISH ROUTE */}
          <Route
            path="/jobs"
            element={
              <ProtectedRoute user={user}>
                <JobsPage />
              </ProtectedRoute>
            }
          />
          

          <Route
            path="/alumni-search"
            element={
              <ProtectedRoute user={user}>
                <AlumniSearchPage />
              </ProtectedRoute>
            }
          />

          <Route
          path="/resource"
          element={
            <ProtectedRoute user={user}>
              <ResourcesPage />
            </ProtectedRoute>
          }
          />
        </Route>
      </Routes>

  );
}

export default App;
