import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function Page() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          pt={10}
          pb={10}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "500px" }}>
            <Stack spacing={3}>
              <Typography variant="h2" color="textPrimary" align="center">
                Book Request
              </Typography>
              <Typography variant="body1" color="textPrimary" align="center">
                Booking Summary
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Page;
