"use client";
import {
  Box,
  Container,
  Modal,
  Stack,
  Typography,
  IconButton,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import theme from "../mui/theme";
import { BiEdit } from "react-icons/bi";
import { AppContext } from "@/app/context/AppContext";
import AddAddress from "@/app/components/addAddress/AddAddress";
import OrderComplete from "@/app/components/orderComplete/OrderComplete";
import { BsPlusSquareFill } from "react-icons/bs";
import { TbTrashFilled } from "react-icons/tb";
import { base_URL } from "@/utils/config";
import axios from "axios";
import { toast } from "react-toastify";

function Summary({ open, close }) {
  const {
    pickUpData,
    dropOffData,
    dropOffDataArray,
    setDropOffDataArray,
    price,
    setPrice,
    dropArray,
    setDropArray,

    setLocationsData,
    setPickupLocations,
    setDropOffLocations,
    setPickupState,
    setDropState,
    setPickUpData,
    setDropOffData,
  } = useContext(AppContext);
  const [addAddress, setAddAddress] = useState(false);
  const [getPrice, setGetPrice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDeleteAddress = (index) => {
    setDropOffDataArray((prevData) => {
      const newDataArray = [...prevData];
      newDataArray.splice(index, 1);
      return newDataArray;
    });
  };

  const GeneratePrice = async () => {
    setLoading(true);
    const apiUrl = `${base_URL}/deliveries/price`;

    const data = JSON.stringify({
      pickupCode: pickUpData.locationCode,
      dropoffCode: dropOffData.locationCode,
      pickupDate: pickUpData.pickupDate,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiUrl,
      headers: {
        app_id: "0273264",
        app_secret: "CV5KFQ1ND243N66SPCCXD3W633V27K5K",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        const resPrice = response.data.data.price;
        setPrice(resPrice);
        setGetPrice(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const handleDropsData = () => {
      const newDataArray = [...dropOffDataArray, dropOffData];
      setDropArray(newDataArray);
    };

    handleDropsData();
  }, [dropOffData, dropOffDataArray, setDropArray]);

  const handleBookOrder = () => {
    setLoading(true);
    const apiUrl = `${base_URL}/deliveries`;

    // handleDropsData();
    console.log(dropArray);

    const data = JSON.stringify({
      pickup: {
        address: pickUpData.address,
        locationCode: pickUpData.locationCode,
        pickupName: pickUpData.pickupName,
        pickupNumber: pickUpData.pickupNumber,
        altPickupNumber: pickUpData.altPickupNumber,
        pickupDate: pickUpData.pickupDate,
        note: pickUpData.note,
      },
      drops: dropArray,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiUrl,
      headers: {
        app_id: "0273264",
        app_secret: "CV5KFQ1ND243N66SPCCXD3W633V27K5K",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setSuccess(true);
        setAddAddress(false);

        setLocationsData([]);
        setPickupLocations([]);
        setDropOffLocations([]);
        setPickupState("");
        setDropState("");
        setPickUpData({});
        setDropOffData({});
        setDropOffDataArray([]);
        setPrice("");
        setDropArray([]);
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Modal open={open}>
            <Box sx={style}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h3" component="h2" color="primary">
                  Booking Summary
                </Typography>

                <IconButton onClick={close}>
                  <BiEdit color={theme.palette.primary.main} />
                </IconButton>
              </Stack>

              {/* Content  */}

              <Stack spacing={3} sx={{ mt: 3 }}>
                <Stack spacing={1}>
                  <Typography variant="caption">SENDER INFORMATION </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h4">Name: </Typography>
                    <Typography variant="body1">
                      {pickUpData.pickupName}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h4">Phone Number: </Typography>
                    <Typography variant="body1">
                      {pickUpData.pickupNumber}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h4">Pickup Address: </Typography>
                    <Typography variant="body1">
                      {pickUpData.address}
                    </Typography>
                  </Stack>
                </Stack>

                {/* Delivery Information  */}

                <Stack spacing={1}>
                  <Typography variant="caption">
                    DELIVERY INFORMATION
                  </Typography>
                  <Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h4">Name: </Typography>
                      <Typography variant="body1">
                        {dropOffData.recipientName}
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h4">Phone Number: </Typography>
                      <Typography variant="body1">
                        {dropOffData.recipientNumber}
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h4">Pickup Address: </Typography>
                      <Typography variant="body1">
                        {dropOffData.address}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                {/* Additional Delivery Address  */}

                <Stack spacing={1}>
                  {dropOffDataArray.map((drop, index) => (
                    <Box key={drop.recipientName}>
                      <Box mt={3}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography variant="caption">
                            ADDITIONAL DROP INFORMATION {index + 1}
                          </Typography>

                          <IconButton
                            onClick={() => handleDeleteAddress(index)}
                          >
                            <TbTrashFilled color={theme.palette.primary.main} />
                          </IconButton>
                        </Stack>
                      </Box>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography variant="h4">Name: </Typography>
                        <Typography variant="body1">
                          {drop.recipientName}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography variant="h4">Phone Number: </Typography>
                        <Typography variant="body1">
                          {drop.recipientNumber}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography variant="h4">Pickup Address: </Typography>
                        <Typography variant="body1">{drop.address}</Typography>
                      </Stack>
                    </Box>
                  ))}
                </Stack>

                {getPrice ? (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="body1"
                      component="h2"
                      color="textPrimary"
                    >
                      Estimated Fee:
                    </Typography>
                    {price}
                  </Stack>
                ) : null}
                {/* Add Additional Address */}

                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: 0,
                  }}
                  onClick={() => setAddAddress(true)}
                >
                  <Stack spacing={1} direction="row" alignItems="center">
                    <BsPlusSquareFill
                      color={theme.palette.primary.main}
                      size={20}
                    />
                    <Typography variant="caption" color="primary">
                      ADD ADDITIONAL ADDRESS
                    </Typography>
                  </Stack>
                </Button>

                {/* Buttons  */}

                {getPrice ? (
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleBookOrder}
                  >
                    {loading ? (
                      <CircularProgress sx={{ color: "#fff" }} size={20} />
                    ) : (
                      "Book Order"
                    )}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={GeneratePrice}
                  >
                    {loading ? (
                      <CircularProgress sx={{ color: "#fff" }} size={20} />
                    ) : (
                      "Generate Price"
                    )}
                  </Button>
                )}
                <Button
                  variant="outlined"
                  color="error"
                  type="button"
                  onClick={close}
                >
                  Back
                </Button>
              </Stack>
            </Box>
          </Modal>
        </Box>
      </Container>

      {addAddress && <AddAddress close={() => setAddAddress(false)} />}
      {success && <OrderComplete />}
    </>
  );
}

export default Summary;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 450,
  maxHeight: "487px",
  bgcolor: theme.palette.primary.light,
  border: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
  overflowY: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};
