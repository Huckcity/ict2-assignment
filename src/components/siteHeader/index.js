import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    padding: "0.5rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    margin: "1.5rem",
  },
  activeLink: {
    backgroundColor: "#fff",
    color: "#000",
  },
  inactiveLink: {
    textDecoration: "none",
    backgroundColor: "transparent",
    color: "#fff",
  },
}));

const SiteHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Playlist", path: "/movies/playlist" },
    { label: "Actors", path: "/actors" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        className={classes.appbar}
        position="fixed"
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" className={classes.title}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <NavLink
                  key={opt.label}
                  to={opt.path}
                  className={
                    (classes.navLink,
                    ({ isActive }) =>
                      isActive ? classes.activeLink : classes.inactiveLink)
                  }
                >
                  <Typography variant="h6" className={classes.title}>
                    {opt.label}
                  </Typography>
                </NavLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;
