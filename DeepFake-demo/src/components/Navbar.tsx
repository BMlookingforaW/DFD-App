import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button, Container } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold"
            }}
          >
            DeepFakeDetect
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/detect" color="inherit">Detect</Button>
            <Button component={Link} to="/learn" color="inherit">Learn</Button>

            <SignedOut>
              <SignInButton mode="modal">
                <Button color="inherit">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button color="inherit">Sign Up</Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
