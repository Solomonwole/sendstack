"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [locationsData, setLocationsData] = useState([]);
  const [pickupLocations, setPickupLocations] = useState([]);
  const [dropOffLocations, setDropOffLocations] = useState([]);
  const [pickupState, setPickupState] = useState("");
  const [dropState, setDropState] = useState("");

  const [pickUpData, setPickUpData] = useState({
    pickupName: "",
    pickupNumber: "",
    altPickupNumber: "",
    address: "",
    locationCode: "",
    pickupDate: "",
    note: "",
    itemSize: "",
    itemCategory: "",
  });
  const [dropOffData, setDropOffData] = useState({
    locationCode: "",
    address: "",
    recipientName: "",
    recipientNumber: "",
    altRecipientNumber: "",
  });

  const [dropOffDataArray, setDropOffDataArray] = useState([]);

  const [price, setPrice] = useState("");

  const [dropArray, setDropArray] = useState([]);

  const value = {
    pickUpData,
    setPickUpData,

    dropOffData,
    setDropOffData,

    pickupLocations,
    setPickupLocations,

    dropOffLocations,
    setDropOffLocations,

    dropOffDataArray,
    setDropOffDataArray,

    locationsData,
    setLocationsData,

    price,
    setPrice,

    dropArray,
    setDropArray,

    pickupState,
    setPickupState,

    dropState,
    setDropState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
