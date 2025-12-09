import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = [
  {text:"Home",path:"/"},
  {text:"Create User",path:"/create-user"},
];

function Navbar() {
  return (
    <AppBar position="static" sx={{background:"transparent",backdropFilter: "blur(10px)",boxShadow: "0 4px 30px rgba(93, 93, 93, 0.1)"}}>
      <div className="container">
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
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
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent:"end" }}>
            {pages.map((page,i) => {
              return <Button key={i+1} sx={{ my: 2, color: "white", display: "block" }}>
                <Link to={page.path} className="flex">{page.text}</Link>
              </Button>
            } )}
          </Box>       
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default Navbar;
