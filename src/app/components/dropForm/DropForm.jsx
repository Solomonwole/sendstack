"use client";
import { AppContext } from "@/app/context/AppContext";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Summary from "../summary/Summary";
import data from "../../data/Data";

function DropForm({ onClick }) {
  const {
    dropOffData,
    setDropOffData,
    locationsData,
    dropOffLocations,
    setDropOffLocations,
    dropState,
    setDropState,
  } = useContext(AppContext);
  const [bookingSummary, setBookingSummary] = useState(false);

  //   Input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDropOffData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputStateChange = (event) => {
    const { name, value } = event.target;

    setDropState(value);

    const selectedState = locationsData.find((state) => state.state === value);

    if (selectedState) {
      setDropOffLocations(selectedState.locals);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setBookingSummary(true);
  };
  return (
    <>
      <Box component="form" onSubmit={handleForm}>
        <Stack spacing={2}>
          <TextField
            type="text"
            name="recipientName"
            value={dropOffData.recipientName}
            onChange={handleInputChange}
            label="Recipient Name"
            variant="outlined"
            required
          />
          <TextField
            type="tel"
            name="recipientNumber"
            value={dropOffData.recipientNumber}
            onChange={handleInputChange}
            label="Recipient Phone Number"
            variant="outlined"
            required
          />
          <TextField
            type="tel"
            name="altRecipientNumber"
            value={dropOffData.altRecipientNumber}
            onChange={handleInputChange}
            label="Alternate Phone Number"
            variant="outlined"
            required
          />
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select
              name="dropState"
              value={dropState}
              label="Drop Off Location"
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
              value={dropOffData.locationCode}
              label="Location"
              onChange={(event) => {
                const { name, value } = event.target;
                setDropOffData((prevState) => ({
                  ...prevState,
                  [name]: value,
                }));
              }}
              required
            >
              {dropOffLocations.map((location, index) => (
                <MenuItem key={index} value={location.locationCode}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            type="text"
            name="address"
            value={dropOffData.address}
            onChange={handleInputChange}
            label="Delivery Address"
            variant="outlined"
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Proceed
          </Button>
          <Button
            variant="outlined"
            color="error"
            type="button"
            onClick={onClick}
          >
            Back
          </Button>
        </Stack>
      </Box>

      {bookingSummary && (
        <Summary
          open={bookingSummary}
          close={() => {
            setBookingSummary(false);
            onClick();
          }}
        />
      )}
    </>
  );
}

export default DropForm;
