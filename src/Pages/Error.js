import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Error404 from "../Components/Error404";

const Error = () => {
  return (
    <>
      <Navbar/>
        <Error404/>
      <Footer/>
    </>
  );
};

export default Error;
