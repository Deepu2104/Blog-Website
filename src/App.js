import React from 'react';
import { Route, Routes } from "react-router-dom";
import  { Box } from "@mui/material";

import "./App.css";
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import NewsFeed from './pages/NewsFeed';
import UpcomingEvents from './pages/UpcomingEvents';
import Blogs from './pages/Blogs';

import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    <Box width = "400px" sx = {{width : {xl : "1488px"}}} m = "auto">
      <Navbar />

      <Routes>
        <Route path="/" Component = {Home} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/jobs" Component={Jobs} />
        <Route path= "/news-feed" Component={NewsFeed} />
        <Route path="/upcoming-events" Component={UpcomingEvents} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App;