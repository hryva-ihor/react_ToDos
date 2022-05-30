import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Link, Switch } from "@mui/material";
import { useTodos } from "../../hooks/todo_common";
import { loadStatusFunc } from "../../custom.js/todo_style";
// import { ThemeContext } from "@mui/styled-engine";
const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Todos",
    href: "/todolist",
  },
];

export const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { status } = useTodos();
  const [color] = loadStatusFunc(status);
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
                  <Link onClick={handleCloseNavMenu} href={page.href}>
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
              <Button
                href={page.href}
                variant="text"
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
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
                <Typography variant="span">Status:</Typography>
                <Typography
                  variant="span"
                  style={{
                    background: color,
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    marginRight: "9px",
                  }}
                ></Typography>
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
