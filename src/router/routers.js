import React from "react";
import dynamicRoute from "./dynamicRouteData.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ScrollToTop from "../components/scrollToTop/index.js";
const Allrouters = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="router-wrapper" style={{ maxWidth: "1200px", margin: "9rem auto 10px" }}>
        <Routes>
          {dynamicRoute.map((elem) => {
            return <Route path={elem.route} exact element={elem.content} />;
          })}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Allrouters;
