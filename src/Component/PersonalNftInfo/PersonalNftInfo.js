import React, { useState, useEffect } from "react";
import PersonalNftImage from "../../Assets/Links/Crypt3d Punks NFT Wrapper.gif";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Entherium from "../../Assets/Links/Ethereum.png";
import "./PersonalNftInfo.css";

import { ethers } from "ethers";
import { notifySuccess, notifyInfo, notifyError } from "./notification";
import { ToastContainer } from "react-toastify";

const calcSave = (base, each, number) => {
  const savedETH = (base - each) * number;
  const percSaved = ((base - each) / base) * 100;

  const str = `${Number(percSaved).toFixed(0)}% / ${Number(savedETH).toFixed(
    3
  )}`;
  return str;
};

const batch = [1, 2, 3, 4, 5, 10];

const roundInfo = [
  [], //never used
  [
    {
      each: 0.05,
      total: 0.05 * 1,
      number: 1,
      save: calcSave(0.05, 0.05, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.048,
      total: 0.048 * 2,
      number: 2,
      save: calcSave(0.05, 0.048, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.045,
      total: 0.045 * 3,
      number: 3,
      save: calcSave(0.05, 0.045, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.043,
      total: 0.043 * 4,
      number: 4,
      save: calcSave(0.05, 0.043, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.04,
      total: 0.04 * 5,
      number: 5,
      save: calcSave(0.05, 0.04, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.035,
      total: Number(0.035 * 10).toFixed(2),
      number: 10,
      save: calcSave(0.05, 0.035, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.053,
      total: 0.053,
      number: 1,
      save: calcSave(0.053, 0.053, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.05,
      total: 0.1,
      number: 2,
      save: calcSave(0.053, 0.05, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.047,
      total: 0.141,
      number: 3,
      save: calcSave(0.053, 0.047, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.045,
      total: 0.18,
      number: 4,
      save: calcSave(0.053, 0.045, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.042,
      total: 0.21,
      number: 5,
      save: calcSave(0.053, 0.042, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.037,
      total: 0.37,
      number: 10,
      save: calcSave(0.053, 0.037, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.056,
      total: 0.056,
      number: 1,
      save: calcSave(0.056, 0.056, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.053,
      total: 0.106,
      number: 2,
      save: calcSave(0.056, 0.053, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.05,
      total: 0.15,
      number: 3,
      save: calcSave(0.056, 0.05, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.047,
      total: 0.188,
      number: 4,
      save: calcSave(0.056, 0.047, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.045,
      total: 0.225,
      number: 5,
      save: calcSave(0.056, 0.045, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.039,
      total: 0.39,
      number: 10,
      save: calcSave(0.056, 0.039, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.059,
      total: 0.059,
      number: 1,
      save: calcSave(0.059, 0.059, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.056,
      total: 0.112,
      number: 2,
      save: calcSave(0.059, 0.056, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.053,
      total: 0.159,
      number: 3,
      save: calcSave(0.059, 0.053, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.05,
      total: 0.2,
      number: 4,
      save: calcSave(0.059, 0.05, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.047,
      total: 0.235,
      number: 5,
      save: calcSave(0.059, 0.047, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.041,
      total: 0.41,
      number: 10,
      save: calcSave(0.059, 0.041, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.062,
      total: 0.062,
      number: 1,
      save: calcSave(0.062, 0.062, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.059,
      total: 0.118,
      number: 2,
      save: calcSave(0.062, 0.059, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.056,
      total: 0.168,
      number: 3,
      save: calcSave(0.062, 0.056, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.053,
      total: 0.212,
      number: 4,
      save: calcSave(0.062, 0.053, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.05,
      total: 0.25,
      number: 5,
      save: calcSave(0.062, 0.05, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.043,
      total: 0.43,
      number: 10,
      save: calcSave(0.062, 0.043, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.065,
      total: 0.065,
      number: 1,
      save: calcSave(0.065, 0.065, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.062,
      total: 0.124,
      number: 2,
      save: calcSave(0.065, 0.062, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.059,
      total: 0.177,
      number: 3,
      save: calcSave(0.065, 0.059, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.056,
      total: 0.224,
      number: 4,
      save: calcSave(0.065, 0.056, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.052,
      total: 0.26,
      number: 5,
      save: calcSave(0.065, 0.052, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.046,
      total: 0.46,
      number: 10,
      save: calcSave(0.065, 0.046, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.069,
      total: 0.069,
      number: 1,
      save: calcSave(0.069, 0.069, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.065,
      total: 0.13,
      number: 2,
      save: calcSave(0.069, 0.065, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.062,
      total: 0.186,
      number: 3,
      save: calcSave(0.069, 0.062, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.059,
      total: 0.236,
      number: 4,
      save: calcSave(0.069, 0.059, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.055,
      total: 0.275,
      number: 5,
      save: calcSave(0.069, 0.055, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.048,
      total: 0.48,
      number: 10,
      save: calcSave(0.069, 0.048, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.073,
      total: 0.073,
      number: 1,
      save: calcSave(0.073, 0.073, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.069,
      total: 0.138,
      number: 2,
      save: calcSave(0.073, 0.069, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.065,
      total: 0.195,
      number: 3,
      save: calcSave(0.073, 0.065, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.062,
      total: 0.248,
      number: 4,
      save: calcSave(0.073, 0.062, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.058,
      total: 0.29,
      number: 5,
      save: calcSave(0.073, 0.058, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.051,
      total: 0.51,
      number: 10,
      save: calcSave(0.073, 0.051, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.077,
      total: 0.077,
      number: 1,
      save: calcSave(0.077, 0.077, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.073,
      total: 0.146,
      number: 2,
      save: calcSave(0.077, 0.073, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.069,
      total: 0.207,
      number: 3,
      save: calcSave(0.077, 0.069, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.065,
      total: 0.26,
      number: 4,
      save: calcSave(0.077, 0.065, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.061,
      total: 0.305,
      number: 5,
      save: calcSave(0.077, 0.061, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.054,
      total: 0.54,
      number: 10,
      save: calcSave(0.077, 0.054, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
  [
    {
      each: 0.081,
      total: 0.081,
      number: 1,
      save: calcSave(0.081, 0.081, 1),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.077,
      total: 0.154,
      number: 2,
      save: calcSave(0.081, 0.077, 2),
      freeLoot: "-",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.073,
      total: 0.219,
      number: 3,
      save: calcSave(0.081, 0.073, 3),
      freeLoot: "Sticker Pack",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.069,
      total: 0.276,
      number: 4,
      save: calcSave(0.081, 0.069, 4),
      freeLoot: "Cap",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.065,
      total: 0.325,
      number: 5,
      save: calcSave(0.081, 0.065, 5),
      freeLoot: "Tee/Cap/Mouse Pad",
      chanceToWin: "2 ETH",
    },
    {
      each: 0.057,
      total: 0.57,
      number: 10,
      save: calcSave(0.081, 0.057, 10),
      freeLoot: "Hoodie/Tee & Cap",
      chanceToWin: "2 ETH",
    },
  ],
];

const PersonalNftInfo = ({ cryptContract, account, connectWallet }) => {
  const [round, setRound] = useState(null);
  const [batchNumber, setBatchNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        const pausedResult = await cryptContract.paused();
        setIsPaused(pausedResult);

        const currentRound = await cryptContract.currentState();
        setRound(currentRound);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    if (cryptContract) {
      run();
    }
  }, [cryptContract, account]);

  const incBatchNum = () => {
    if (batchNumber === batch.length - 1) return;

    setBatchNumber(batchNumber + 1);
  };
  const decBatchNum = () => {
    if (batchNumber === 0) return;

    setBatchNumber(batchNumber - 1);
  };

  const mintCrypt3dPunk = async () => {
    try {
      const options = {
        value: ethers.utils.parseEther(
          String(Object(roundInfo[round][batchNumber]).total)
        ),
      };

      notifyInfo("Your Transaction Has Started");
      const transaction = await cryptContract.batchMint(
        batch[batchNumber],
        account,
        options
      );
      const transactionReceipt = await transaction.wait();

      notifySuccess("Your NFT is Minted successfully");

      console.log(transactionReceipt);
    } catch (err) {
      console.log(err.message);
      if (err?.message === "User denied transaction signature") {
        notifyError("User Denied The Transaction");
      } else if (
        err?.message.includes("quantity exceeded the limit for this round")
      ) {
        notifyError("Quantity Exceeded The Limit For This Round");
      } else if (err?.message.includes("Not enough ethers")) {
        notifyError("Not Enough Ethers");
      } else {
        notifyError("Something Went Wrong");
      }
    }
  };

  return (
    <div className="PersonalNftInfoTable ">
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
      <Row
        xs={1}
        sm={1}
        lg={2}
        className="PersonalNftInfoTableWrap"
        style={{ margin: "auto" }}
      >
        <Col>
          <img width="100%" src={PersonalNftImage} alt="" />
        </Col>
        <Col>
          <div style={{ width: "100%" }}>
            <h1 className="uppercase PersonalNftInfoTitle">Mint Your Nft</h1>
            <div className="d-flex justify-content-center gap-2">
              <div className="PersonalNftINfoList">
                <p>CURRENT TIER</p>
                <p>HOW MANY? </p>
                <p>
                  EACH <img width="20px" src={Entherium} alt="" />
                </p>
                <p>
                  TOTAL <img width="20px" src={Entherium} alt="" />
                </p>
                <p>
                  SAVE <img width="20px" src={Entherium} alt="" />
                </p>
                <p>FREE LOOT</p>
                <p>CHANCE TO WIN</p>
              </div>
              <div className="PersonalNftINfoValue">
                {loading ? (
                  <>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                  </>
                ) : isPaused ? (
                  <>
                    <p>Paused</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>-</p>
                    <p>-</p>
                  </>
                ) : (
                  <>
                    <p>{round}</p>
                    <p>
                      <button className="btn-inc-dec" onClick={decBatchNum}>
                        -
                      </button>{" "}
                      {batch[batchNumber]}{" "}
                      <button className="btn-inc-dec" onClick={incBatchNum}>
                        +
                      </button>
                    </p>
                    <p>{Object(roundInfo[round][batchNumber]).each}</p>
                    <p>{Object(roundInfo[round][batchNumber]).total}</p>
                    <p>{Object(roundInfo[round][batchNumber]).save}</p>
                    <p>{Object(roundInfo[round][batchNumber]).freeLoot}</p>
                    <p>{Object(roundInfo[round][batchNumber]).chanceToWin}</p>
                  </>
                )}
              </div>
            </div>
            <div>
              {account ? (
                <p className="address">{`${String(account).substring(
                  0,
                  7
                )}...${String(account).slice(-6)}`}</p>
              ) : (
                <p className="address">...</p>
              )}
            </div>
            <div className="mt-3">
              {account ? (
                <>
                  <button onClick={mintCrypt3dPunk} className="Connect_wallet">
                    Mint
                  </button>
                </>
              ) : (
                <button onClick={connectWallet} className="Connect_wallet">
                  CONNECT WALLET
                </button>
              )}
              <p className="CompletePrice">Complete Pricing Guide</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default PersonalNftInfo;
