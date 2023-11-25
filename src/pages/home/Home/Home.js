import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Footer from "../../shared/Footer/Footer";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <div className="bg-dark">
        <Navigation></Navigation>
        <Banner></Banner>
        <Products></Products>
        <Reviews></Reviews>
        <Partners></Partners>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
