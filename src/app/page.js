"use client";
import { AppProvider, AppContext } from "./context/AppContext";
import Image from "next/image";
import Link from "next/link";
import {
  Stack,
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

export default function Home() {
  const isScreenSizeMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <AppProvider>
      <main>
        <Container maxWidth="lg">
          <Box
            sx={{
              height: { xs: "80vh", md: "100vh" },
              width: "100%",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              placeContent: "center",
              alignItems: "center",
            }}
          >
            <Stack spacing={3} sx={{ width: { md: "65%" } }}>
              <Stack spacing={2}>
                <Typography variant="h1" color="textPrimary">
                  The Smarter Way to Deliver & Grow
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  Sendstack helps businesses grow with ease by providing the
                  most reliable, affordable and efficient delivery service.
                </Typography>
              </Stack>

              <Link href="/request">
                <Button variant="contained" sx={{ width: "135px" }}>
                  Get Started
                </Button>
              </Link>
            </Stack>
            <Image
              src="/hero.png"
              alt="Example Image"
              width={isScreenSizeMd ? 552 : 300}
              height={isScreenSizeMd ? 552 : 300}
            />
          </Box>
        </Container>
      </main>
    </AppProvider>
  );
}
