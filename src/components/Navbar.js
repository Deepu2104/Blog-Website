import React from 'react'
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwE_FWToKOs50duKen8mOCyzAr0LITXQdtFtDSJhalPnmZT0Wgd_sZwIZEfEn51Lbops&usqp=CAU"} alt="Logo" />
      </Link>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 3, md: 6 }} // Adjust spacing for different screen sizes
        className="nav-links"
        alignItems="center"
      >
        <Link to="/blogs" className="nav-link">
          Blogs
        </Link>
        <Link to="/news-feed" className="nav-link">
          News Feed
        </Link>
        <Link to="/upcoming-events" className="nav-link">
          Upcoming Events
        </Link>
        <Link to="/jobs" className="nav-link">
          Jobs
        </Link>
      </Stack>
    </nav>
  )
}

export default Navbar