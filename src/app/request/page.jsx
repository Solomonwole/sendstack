"use client";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import PickUpForm from "../components/pickupForm/PickUpForm";
import DropForm from "../components/dropForm/DropForm";
import { base_URL } from "@/utils/config";
import axios from "axios";
import { AppContext } from "@/app/context/AppContext";

function Page() {
  const [tab, setTab] = useState(0);

  const { setLocationsData, pickUpData } = useContext(AppContext);

  //   Get Delivery Locations
  const getDeliveryLocations = async () => {
    const apiUrl = `${base_URL}/locations`;

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: apiUrl,
      headers: {
        app_id: "0273264",
        app_secret: "CV5KFQ1ND243N66SPCCXD3W633V27K5K",
      },
    };
    axios
      .request(config)
      .then((response) => {
        const resData = response.data.data;
        // console.log(response.data.data);
        setLocationsData(resData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDeliveryLocations();
  }, []);

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
                Book An Order
              </Typography>
              

              <Typography variant="body1" color="textPrimary" align="center">
                {tab === 0 ? "Sender Information" : "Recipient Information"}
              </Typography>
              {tab === 0 && <PickUpForm onClick={() => setTab(1)} />}
              {tab === 1 && <DropForm onClick={() => setTab(0)} />}
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Page;
