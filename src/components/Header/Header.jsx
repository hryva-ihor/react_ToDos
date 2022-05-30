import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Link, Switch } from "@mui/material";

import { Route, Routes } from "react-router";
import { Status } from "./Status";

// import { ThemeContext } from "@mui/styled-engine";
const pages = [
  // {
  //   title: "Home",
  //   href: "/",
  // },
  // {
  //   title: "Todos",
  //   href: "/todolist",
  // },
];

export const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // const { toggleTheme } = useContext(ThemeContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { setDarkMode, darkMode } = props.setDarkModeProps;
  return (
    <AppBar position="static">
      <Container sx={{ p: { xs: 1, sm: 1 } }} maxWidth="xl">
        <Toolbar disableGutters>
          <EngineeringIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            React apps
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index}>
                  <Link
                    onClick={handleCloseNavMenu}
                    // to={{
                    //   pathname: `${page.href}`,
                    //   hash: "#the-hash",
                    //   state: { fromDashboard: true },
                    // }}
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ gap: 3, flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => (
              <Link
                // to={{
                //   pathname: `${page.href}`,
                //   hash: "#the-hash",
                //   state: { fromDashboard: true },
                // }}
                href={page.href}
                variant="buttons"
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Link>
            ))}
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Routes>
                  <Route path={"/"} element={<Status />} />
                  {/* <Route path={"/"} element={``} /> */}
                </Routes>
              </Box>
              <Box>
                <Typography variant="span">
                  Theme {!darkMode ? "light" : "dark"}
                </Typography>
                <Switch
                  checked={darkMode}
                  onChange={() => {
                    setDarkMode(!darkMode);
                  }}
                  color="secondary"
                />
              </Box>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
