import React from "react";

import HeroSection from "./Component/HeroSection/HeroSection";
import HowMint from "./Component/HowMint/HowMint";
import Paralax from "./Component/Paralax/Paralax";
import PersonalNftInfo from "./Component/PersonalNftInfo/PersonalNftInfo";
import SocialConnect from "./Component/SocialConnect/SocialConnect";
import Paralax1 from "./Component/Paralax1/Paralax1";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  // Global settings:
  once: true,
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  // once: false, whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const MintPage = ({
  cryptContract,
  account,
  connectWallet,
  cusdt,
  cusdc,
  cdai,
  cbusd,
}) => {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <Paralax1></Paralax1>
      <HowMint></HowMint>
      <Paralax></Paralax>
      <PersonalNftInfo
        cryptContract={cryptContract}
        account={account}
        connectWallet={connectWallet}
        cUSDT={cusdt}
        cUSDC={cusdc}
        cDAI={cdai}
        cBUSD={cbusd}
      ></PersonalNftInfo>
      <SocialConnect></SocialConnect>
    </div>
  );
};

export default MintPage;
