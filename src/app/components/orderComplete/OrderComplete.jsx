import { Box, Container, Modal, Typography, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import theme from "../mui/theme";
import { useRouter } from "next/navigation";

function OrderComplete() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
      window.scrollTo(0, 0);
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Modal open={open}>
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="https://starpng.com/public/uploads/preview/success-transparent-background-png-image-101577123885ccwv9h6g2g.png"
                  alt="success"
                  width={90}
                  height={90}
                />
                <Typography variant="h4" color="initial" mt={3}>
                  Order Booked Successfully
                </Typography>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Container>
    </>
  );
}

export default OrderComplete;

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
