import React, { lazy, Suspense } from "react";

const HeroSection = lazy(() =>
  import("./SwapComponent/HeroSection/HeroSection")
);
const SwapPortal = lazy(() => import("./SwapComponent/SwapPortal/SwapPortal"));
const SocialConnect = lazy(() =>
  import("./SwapComponent/SocialConnect/SocialConnect")
);
const Paralax2 = lazy(() => import("./SwapComponent/Paralax2/Paralax2"));
const Paralax3 = lazy(() => import("./SwapComponent/Paralax3/Paralax3"));
const UpgradedPunk = lazy(() =>
  import("./SwapComponent/UpgradedPunk/UpgradedPunk")
);
const OgQuestions = lazy(() =>
  import("./SwapComponent/OgQuestions/OgQuestions")
);

const SwapPage = ({
  oldCryptContract,
  cryptContract,
  account,
  connectWallet,
}) => {
  return (
    <div className="App">
      <Suspense fallback="loading...">
        <HeroSection></HeroSection>
      </Suspense>

      <Suspense fallback="loading...">
        <Paralax2></Paralax2>
      </Suspense>

      <Suspense fallback="loading...">
        <UpgradedPunk></UpgradedPunk>
      </Suspense>

      <Suspense fallback="loading...">
        <SwapPortal
          oldCryptContract={oldCryptContract}
          cryptContract={cryptContract}
          account={account}
          connectWallet={connectWallet}
        ></SwapPortal>
      </Suspense>

      <Suspense fallback="loading...">
        <Paralax3 />
      </Suspense>

      <Suspense fallback="loading...">
        <OgQuestions></OgQuestions>
      </Suspense>

      <Suspense fallback="loading...">
        <SocialConnect></SocialConnect>
      </Suspense>
    </div>
  );
};

export default SwapPage;
