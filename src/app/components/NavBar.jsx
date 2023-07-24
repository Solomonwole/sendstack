"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import theme from "./mui/theme";

function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "transparent" }}
          elevation={0}
        >
          <Toolbar>
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="Example Image"
                    width={160}
                    height={40}
                  />
                </Link>
                <Stack
                  direction="row"
                  component="ul"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                  spacing={2}
                >
                  <li>
                    <Link href="/request">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          flexGrow: 1,
                          color: theme.palette.textPrimary.main,
                        }}
                      >
                        Send a package
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href="/request">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          flexGrow: 1,
                          color: theme.palette.textPrimary.main,
                        }}
                      >
                        Generate Price Estimate
                      </Typography>
                    </Link>
                  </li>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <Button variant="text" color="primary">
                    Sign In
                  </Button>
                  <Button variant="contained" color="primary">
                    Create An Account
                  </Button>
                </Stack>

                <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                  <AiOutlineMenu color="#210033" size={25} />
                </IconButton>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
