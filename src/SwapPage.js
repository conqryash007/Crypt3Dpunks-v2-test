import React from "react";

import HeroSection from "./SwapComponent/HeroSection/HeroSection";
import SwapPortal from "./SwapComponent/SwapPortal/SwapPortal";
import SocialConnect from "./SwapComponent/SocialConnect/SocialConnect";
import Paralax2 from "./SwapComponent/Paralax2/Paralax2";
import Paralax3 from "./SwapComponent/Paralax3/Paralax3";
import UpgradedPunk from "./SwapComponent/UpgradedPunk/UpgradedPunk";
import OgQuestions from "./SwapComponent/OgQuestions/OgQuestions";

const SwapPage = ({
  oldCryptContract,
  cryptContract,
  account,
  connectWallet,
}) => {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <Paralax2></Paralax2>
      <UpgradedPunk></UpgradedPunk>
      <SwapPortal
        oldCryptContract={oldCryptContract}
        cryptContract={cryptContract}
        account={account}
        connectWallet={connectWallet}
      ></SwapPortal>
      <Paralax3 />
      <OgQuestions></OgQuestions>
      <SocialConnect></SocialConnect>
    </div>
  );
};

export default SwapPage;
