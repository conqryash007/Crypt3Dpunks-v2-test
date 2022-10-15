import "./App.css";

import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "./web3Components/providerOptions";
import { toHex } from "./web3Components/utils";
import { final } from "./web3Components/config";

const Mintpage = lazy(() => import("./MintPage"));
const SwapPage = lazy(() => import("./SwapPage"));

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

function App() {
  // Token value 1 - USDT
  // Token value 2 - USDC
  // Token value 3 - DAI
  // Token value 4 - BUSD
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [error, setError] = useState("");
  const [, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [cryptContract, setCryptContract] = useState();
  const [oldCryptContract, setOldContract] = useState();
  const [cusdt, setcusdt] = useState();
  const [cusdc, setcusdc] = useState();
  const [cdai, setcdai] = useState();
  const [cbusd, setcbusd] = useState();

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
      const contract2 = new ethers.Contract(
        final.oldcrypt3dPunksAddress,
        final.oldABI,
        signer
      );
      const a = new ethers.Contract(final.USDT, final.ERC20ABI, signer);
      const b = new ethers.Contract(final.USDC, final.ERC20ABI, signer);
      const c = new ethers.Contract(final.DAI, final.ERC20ABI, signer);
      const d = new ethers.Contract(final.BUSD, final.ERC20ABI, signer);

      setcusdt(a);
      setcusdc(b);
      setcdai(c);
      setcbusd(d);
      setCryptContract(contract);
      setOldContract(contract2);
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
    <>
      <Suspense fallback={<div>Swap Loading...</div>}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Mintpage
                cryptContract={cryptContract}
                account={account}
                connectWallet={connectWallet}
                cusdt={cusdt}
                cusdc={cusdc}
                cdai={cdai}
                cbusd={cbusd}
              />
            )}
          ></Route>
          <Route
            exact
            path="/swap"
            component={() => (
              <SwapPage
                oldCryptContract={oldCryptContract}
                cryptContract={cryptContract}
                account={account}
                connectWallet={connectWallet}
              />
            )}
          />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
