import NavBar from "./components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/mui/theme";
import { AppProvider } from "./context/AppContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "SendStack",
  description: "Request A delivery Ride Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(180deg, #FAF4FF 0%, #E3F5FF 100%)",
          minHeight: { xs: "90vh", md: "100vh" },
          height: "100%",
        }}
      >
        <ThemeProvider theme={theme}>
          <AppProvider>
            <NavBar />
            {children}
          </AppProvider>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
