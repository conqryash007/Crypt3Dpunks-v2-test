import React, { useState, useEffect } from "react";
import { notifySuccess, notifyInfo, notifyError } from "./notification";
import SwapImage from "../../Assets/Links/Crypt3d Punks Unreveal Wrapper.webm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SwapPortal.css";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import { final } from "./../../web3Components/config";

const PersonalNftInfo = ({
  oldCryptContract,
  cryptContract,
  account,
  connectWallet,
}) => {
  const [isApproved, setIsApproved] = useState(false);
  const [swapIds, setSwapIds] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const isApprovedRes = await oldCryptContract.isApprovedForAll(
          account,
          final.crypt3dPunksAddress
        );

        let oneArr = [];
        let twoArr = [];

        for (let i = 0; i < 17; i++) {
          oneArr.push(account);
          twoArr.push(i);
        }

        let bal = await oldCryptContract.balanceOfBatch(oneArr, twoArr);

        bal = bal.map((curr) => {
          return parseInt(curr._hex);
        });

        const ids = [];
        bal.forEach((curr, i) => {
          if (curr === 1) {
            ids.push(i);
          }
        });

        setSwapIds(ids);

        console.log(ids);

        setIsApproved(isApprovedRes);
      } catch (err) {
        console.log(err);
      }
    };
    if (account && oldCryptContract) {
      run();
    }

    return () => {
      setIsApproved(false);
      setSwapIds([]);
    };
  }, [account, oldCryptContract]);

  const approveContract = async () => {
    try {
      notifyInfo("Your Transaction Has Started");
      const transaction = await oldCryptContract.setApprovalForAll(
        final.crypt3dPunksAddress,
        true
      );

      const transactionReceipt = await transaction.wait();

      notifySuccess("Approved!");

      setIsApproved(true);
    } catch (err) {
      console.log(err.message);

      notifyError("Something Went Wrong");
    }
  };

  const swapTokens = async () => {
    try {
      notifyInfo("Your Transaction Has Started");
      const transaction = await cryptContract.batchSwapExistingUsers(swapIds);
      const transactionReceipt = await transaction.wait();
      notifySuccess("Your NFT is Swapped successfully");

      console.log(transactionReceipt);
    } catch (err) {
      notifyError("Something Went Wrong");
      if (err?.message === "quantity exceeded the limit for this round") {
        notifyError("Quantity exceeded the limit for this round");
      } else if (err?.message === "You don't own this nftId") {
        notifyError("You are not the owner of this NFT");
      } else {
        notifyError("Something Went Wrong");
      }
    }
  };

  return (
    <div className="PersonalNftInfoTable">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        pauseOnHover
      />
      <Container>
        <Row xs={1} sm={1} lg={2} className="">
          <Col style={{ backgroundColor: "#6CB8D9" }} className="pt-5 pb-5">
            <div data-aos="fade-left" data-aos-duration="2000">
              <div>
                <span className="text-mint-pot">
                  <span
                    className="shadow-txt"
                    data-aos="fade-in"
                    data-aos-duration="3000"
                  >
                    SWAP PORTAL
                  </span>
                </span>
                <p className="portal-txt">
                  Swap your old ERC-1155 Crypt3d Punk NFT for your new, shiny,
                  ERC-721 Crtyp3d Punk NFT here.
                </p>
              </div>
              <video autoPlay muted loop width="70%" src={SwapImage} alt="" />
              <h3 style={{ marginTop: "20px" }}>
                ERC-1155 Punks in Wallet: {swapIds.length}
              </h3>
              <div className="mt-3">
                <p
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  className="Connect_walletx"
                >{`${String(account).substring(0, 5)}...${String(account).slice(
                  -5
                )}`}</p>
                {account ? (
                  isApproved ? (
                    <>
                      <button
                        disabled={swapIds.length === 0}
                        onClick={swapTokens}
                        className="Connect_wallet"
                      >
                        Swap
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        disabled={swapIds.length === 0}
                        onClick={approveContract}
                        className="Connect_wallet"
                      >
                        Approve
                      </button>
                    </>
                  )
                ) : (
                  <button onClick={connectWallet} className="Connect_wallet">
                    CONNECT WALLET
                  </button>
                )}
                <p className="CompletePrice">Complete Pricing Guide</p>
              </div>
            </div>
          </Col>
          <Col style={{ backgroundColor: "#E5F9FD" }}></Col>
        </Row>{" "}
      </Container>
    </div>
  );
};
export default PersonalNftInfo;
