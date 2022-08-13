import React, { useEffect } from "react";
import "./home.css";
import CiHomeFeatured from "./CiHomeFeatured";
import CiHomeTopics from "./CiHomeTopics";
import CiHomeExternalLinks from "./CiHomeExternalLink";
import CiHomeLatestArticles from "./CiHomeLatestArticles";
import CiHomeCampaigns from "./CiHomeCampaigns";
import CiHomeSpotLight from "./CiHomeSpotLight";
import CiHomeEssentials from "./CiHomeEssentials";
import CiHomeConnect from "./CiHomeConnect";
import CiHomeSubscribe from "./CiHomeSubscribe";
import CiHomeAskUs from "./CiHomeAskUs";
const Home = () => {

  
  return (
    <div className="Home_wrapper">
      <CiHomeFeatured />
      <CiHomeTopics />
      <CiHomeExternalLinks />
      <CiHomeLatestArticles />
      <CiHomeCampaigns />
      <CiHomeSpotLight />
      <CiHomeEssentials />
      <CiHomeConnect />
      <CiHomeAskUs />
      <CiHomeSubscribe />
    </div>
  );
};

export default Home;
