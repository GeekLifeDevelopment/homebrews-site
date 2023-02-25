import React from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
import GlobalStyles from "../styles/globalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
