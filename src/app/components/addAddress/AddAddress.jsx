import React, { useContext, useState } from "react";
import {
  Box,
  Container,
  Modal,
  Stack,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  IconButton,
} from "@mui/material";
import theme from "../mui/theme";
import { AppContext } from "@/app/context/AppContext";
import { MdArrowBackIos } from "react-icons/md";

function AddAddress({ close }) {
  const { setDropOffDataArray, locationsData } = useContext(AppContext);
  const [newAddress, setNewAddress] = useState({
    locationCode: "",
    address: "",
    recipientName: "",
    recipientNumber: "",
    altRecipientNumber: "",
  });
  const [addressState, setAddressState] = useState("");
  const [areaArray, setAreaArray] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputStateChange = (event) => {
    const { name, value } = event.target;

    setAddressState(value);

    const selectedState = locationsData.find((state) => state.state === value);

    if (selectedState) {
      setAreaArray(selectedState.locals);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setDropOffDataArray((prevData) => [...prevData, newAddress]);
    close();
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Modal open={open}>
            <Box sx={style}>
              <Box component="form" onSubmit={handleForm}>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center">
                    <IconButton onClick={close}>
                      <MdArrowBackIos color={theme.palette.primary.main} />
                    </IconButton>
                    <Typography variant="h3" color="primary" align="center">
                      Add Drop Off Address
                    </Typography>
                  </Stack>
                  <TextField
                    type="text"
                    name="recipientName"
                    value={newAddress.recipientName}
                    onChange={handleInputChange}
                    label="Recipient Name"
                    variant="outlined"
                    required
                  />
                  <TextField
                    type="tel"
                    name="recipientNumber"
                    value={newAddress.recipientNumber}
                    onChange={handleInputChange}
                    label="Recipient Phone Number"
                    variant="outlined"
                    required
                  />
                  <TextField
                    type="tel"
                    name="altRecipientNumber"
                    value={newAddress.altRecipientNumber}
                    onChange={handleInputChange}
                    label="Alternate Phone Number"
                    variant="outlined"
                  />
                  <FormControl fullWidth>
                    <InputLabel id="state">State</InputLabel>
                    <Select
                      labelId="state"
                      id="state"
                      name="addressState"
                      value={addressState}
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
                      value={newAddress.locationCode}
                      label="Location"
                      onChange={handleInputChange}
                      required
                    >
                      {areaArray.map((area, index) => (
                        <MenuItem key={index} value={area.locationCode}>
                          {area.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    type="text"
                    name="address"
                    value={newAddress.address}
                    onChange={handleInputChange}
                    label="Drop Address"
                    variant="outlined"
                    required
                  />
                  <Button variant="contained" color="primary" type="submit">
                    Add Address
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Container>
    </>
  );
}

export default AddAddress;

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
