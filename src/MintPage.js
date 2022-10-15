import React, { lazy, Suspense } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = lazy(() => import("./Component/HeroSection/HeroSection"));
const HowMint = lazy(() => import("./Component/HowMint/HowMint"));
const Paralax = lazy(() => import("./Component/Paralax/Paralax"));
const PersonalNftInfo = lazy(() =>
  import("./Component/PersonalNftInfo/PersonalNftInfo")
);
const SocialConnect = lazy(() =>
  import("./Component/SocialConnect/SocialConnect")
);
const Paralax1 = lazy(() => import("./Component/Paralax1/Paralax1"));

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
      <Suspense fallback="Loading...">
        <HeroSection></HeroSection>
      </Suspense>

      <Suspense fallback="Loading...">
        <Paralax1></Paralax1>
      </Suspense>

      <Suspense fallback="Loading...">
        <HowMint></HowMint>
      </Suspense>

      <Suspense fallback="Loading...">
        <Paralax></Paralax>
      </Suspense>

      <Suspense fallback="Loading...">
        <PersonalNftInfo
          cryptContract={cryptContract}
          account={account}
          connectWallet={connectWallet}
          cUSDT={cusdt}
          cUSDC={cusdc}
          cDAI={cdai}
          cBUSD={cbusd}
        ></PersonalNftInfo>
      </Suspense>

      <Suspense fallback="Loading...">
        <SocialConnect></SocialConnect>
      </Suspense>
    </div>
  );
};

export default MintPage;
