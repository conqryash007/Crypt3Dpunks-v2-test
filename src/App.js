import "./App.css";

import React, { useState, useEffect } from "react";

import HeroSection from "./Component/HeroSection/HeroSection";
import HowMint from "./Component/HowMint/HowMint";
import Paralax from "./Component/Paralax/Paralax";
import PersonalNftInfo from "./Component/PersonalNftInfo/PersonalNftInfo";
import SocialConnect from "./Component/SocialConnect/SocialConnect";
import Paralax1 from "./Component/Paralax1/Paralax1";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "./web3Components/providerOptions";
import { toHex } from "./web3Components/utils";
import { final } from "./web3Components/config";
import AOS from 'aos';
import 'aos/dist/aos.css';
const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});
AOS.init({
  // Global settings:
  once: true,
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  // once: false, whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function App() {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [error, setError] = useState("");
  const [, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [cryptContract, setCryptContract] = useState();

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();

      const signer = library.getSigner();
      const contract = new ethers.Contract(
        final.crypt3dPunksAddress,
        final.ABI,
        signer
      );
      setCryptContract(contract);
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
    } catch (switchError) {
      setError(switchError);
      console.log(switchError);
    }
  };

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork("");
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);
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
      ></PersonalNftInfo>
      <SocialConnect></SocialConnect>
    </div>
  );
}

export default App;
