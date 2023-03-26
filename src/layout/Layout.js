import React from "react";
import GlobalStyles from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
import theme from "../styles/theme";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <body>{children}</body>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
