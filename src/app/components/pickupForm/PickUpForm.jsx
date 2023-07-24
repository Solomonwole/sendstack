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
  Typography,
  Autocomplete,
} from "@mui/material";
import React, { useContext } from "react";
import { BiSolidError } from "react-icons/bi";

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

  const handleAutocompleteChange = (event, newValue) => {
    if (newValue) {
      setPickUpData((prevState) => ({
        ...prevState,
        locationCode: newValue.locationCode,
      }));
    } else {
      setPickUpData((prevState) => ({
        ...prevState,
        locationCode: "",
      }));
    }
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

          <Autocomplete
            disablePortal
            options={pickupLocations}
            value={
              pickupLocations.find(
                (option) => option.locationCode === pickUpData.locationCode
              ) || null
            }
            onChange={handleAutocompleteChange}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Area" />}
          />
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
          <Stack direction="row" alignItems="center">
            <BiSolidError color="#f00" size={18} />
            <Typography variant="caption" sx={{ color: "#808080" }}>
              Same day delivery should be placed before 10am
            </Typography>
          </Stack>

          <FormControl fullWidth>
            <InputLabel>Item Category</InputLabel>
            <Select
              name="itemCategory"
              value={pickUpData.itemCategory}
              label="Drop Off Location"
              onChange={handleInputChange}
              required
            >
              {itemCat.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="item">How big is this item?</InputLabel>
            <Select
              labelId="item"
              id="item"
              name="itemSize"
              value={pickUpData.itemSize}
              label="Drop Off Location"
              onChange={handleInputChange}
              required
            >
              {size.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

const itemCat = [
  { label: "Clothes", value: "clothes" },
  { label: "Shoes", value: "clothes" },
  { label: "Jewelry / Accessories", value: "jewelry" },
  { label: "Cosmetics", value: "cosmetics" },
  { label: "Gadgets", value: "gadgets" },
  { label: "Medicine / Drugs", value: "drugs" },
  { label: "Household Utensils", value: "utensils" },
  { label: "Water / Liquid", value: "water" },
  { label: "Alcoholic drinks", value: "alcoholic" },
  { label: "Non-alcoholic drinks", value: "drinks" },
  { label: "Processed / Cooked food", value: "food" },
  { label: "Groceries", value: "groceries" },
];

const size = [
  { label: "Smaller than a carton of indomie", value: "small" },
  { label: "Larger than a carton of indomie", value: "large" },
];
