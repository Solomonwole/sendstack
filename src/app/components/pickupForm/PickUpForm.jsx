"use client";
import { AppContext } from "@/app/context/AppContext";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import React, { useContext } from "react";

function PickUpForm({ onClick }) {
  const {
    pickUpData,
    setPickUpData,
    pickupLocations,
    setPickupLocations,
    locationsData,
    pickupState,
    setPickupState,
  } = useContext(AppContext);

  //   Input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPickUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputStateChange = (event) => {
    const { name, value } = event.target;

    setPickupState(value);

    const selectedState = locationsData.find((state) => state.state === value);

    if (selectedState) {
      setPickupLocations(selectedState.locals);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    onClick();
  };

  const isTimePast10AM = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour >= 10;
  };

  console.log(pickupLocations);

  return (
    <>
      <Box component="form" onSubmit={handleForm}>
        <Stack spacing={2}>
          <TextField
            type="text"
            name="pickupName"
            value={pickUpData.pickupName}
            onChange={handleInputChange}
            label="Sender Name"
            variant="outlined"
            required
          />
          <TextField
            type="tel"
            name="pickupNumber"
            value={pickUpData.pickupNumber}
            onChange={handleInputChange}
            label="Sender Phone Number"
            variant="outlined"
            required
          />
          <TextField
            type="tel"
            name="altPickupNumber"
            value={pickUpData.altPickupNumber}
            onChange={handleInputChange}
            label="Alternate Phone Number"
            variant="outlined"
            required
          />
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select
              name="pickupState"
              value={pickupState}
              label="State"
              onChange={handleInputStateChange}
              required
            >
              {locationsData.map((state, index) => (
                <MenuItem key={index} value={state.state}>
                  {state.state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="area">Location</InputLabel>
            <Select
              labelId="area"
              id="area"
              name="locationCode"
              value={pickUpData.locationCode}
              label="Location"
              onChange={(event) => {
                const { name, value } = event.target;
                setPickUpData((prevState) => ({
                  ...prevState,
                  [name]: value,
                }));
              }}
              required
            >
              {pickupLocations.map((area, index) => (
                <MenuItem key={index} value={area.locationCode}>
                  {area.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            type="text"
            name="address"
            value={pickUpData.address}
            onChange={handleInputChange}
            label="Pickup Address"
            variant="outlined"
            required
          />
          <TextField
            type="date"
            name="pickupDate"
            value={pickUpData.pickupDate}
            onChange={handleInputChange}
            variant="outlined"
            required
            inputProps={{
              min: new Date().toISOString().split("T")[0],
            }}
          />
          <TextField
            type="text"
            name="note"
            value={pickUpData.note}
            onChange={handleInputChange}
            variant="outlined"
            label="Booking Note"
            multiline
            rows={4}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Proceed
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default PickUpForm;
