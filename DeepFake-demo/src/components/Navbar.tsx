import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { user } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Detect", to: "/detect" },
    { label: "Learn", to: "/learn" }
  ];

  const navButtonStyle = {
    color: "#ddd",
    "&:hover": {
      color: "#fdba74",
      backgroundColor: "transparent"
    }
  };

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: "center", backgroundColor: "#2e1d45", height: "100%", color: "#fff" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DeepFakeDetect
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemText
              primary={
                <Button
                  component={Link}
                  to={item.to}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    color: "#ddd",
                    "&:hover": { color: "#fdba74" }
                  }}
                >
                  {item.label}
                </Button>
              }
            />
          </ListItem>
        ))}

        <SignedOut>
          <ListItem disablePadding>
            <SignInButton mode="modal">
              <Button fullWidth variant="outlined" color="info">
                Sign In
              </Button>
            </SignInButton>
          </ListItem>
          <ListItem disablePadding>
            <SignUpButton mode="modal">
              <Button fullWidth variant="contained" color="info">
                Sign Up
              </Button>
            </SignUpButton>
          </ListItem>
        </SignedOut>

        <SignedIn>
          <ListItem>
            {user?.firstName && (
              <Typography variant="body2" sx={{ mr: 1 }}>
                Hi, {user.firstName}
              </Typography>
            )}
            <UserButton afterSignOutUrl="/" />
          </ListItem>
        </SignedIn>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={3} sx={{ background: "#2e1d45" }}>
        <Container maxWidth="xl">
          <Toolbar>
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: "none" }, mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            {/* Title */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "white",
                fontWeight: "bold"
              }}
            >
              DeepFakeDetect
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.to}
                  sx={navButtonStyle}
                >
                  {item.label}
                </Button>
              ))}

              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outlined" color="info">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="contained" color="info">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                {user?.firstName && (
                  <Typography variant="body2" sx={{ color: "#bbb", mr: 1 }}>
                    Hi, {user.firstName}
                  </Typography>
                )}
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240, backgroundColor: "#2e1d45" }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
