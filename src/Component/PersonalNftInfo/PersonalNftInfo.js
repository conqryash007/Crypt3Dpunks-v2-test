import React, { useState, useEffect } from "react";
import PersonalNftImage from "../../Assets/Links/Crypt3d Punks NFT Wrapper.gif";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Entherium from "../../Assets/Links/Ethereum.png";
import "./PersonalNftInfo.css";
import { final } from "../../web3Components/config";

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

let roundInfo = [
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

const allCurrencyRoundInfoArray = [
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
];

roundInfo = allCurrencyRoundInfoArray[0];

// Token value 0 - ETH
// Token value 1 - USDT
// Token value 2 - USDC
// Token value 3 - DAI
// Token value 4 - BUSD
const currency = ["ETH", "USDT", "USDC", "DAI", "BUSD"];

const PersonalNftInfo = ({
  cryptContract,
  cUSDT,
  cUSDC,
  cDAI,
  cBUSD,
  account,
  connectWallet,
}) => {
  const [round, setRound] = useState(null); // 1 - 10
  const [batchNumber, setBatchNumber] = useState(0); // 0-6
  const [loaded, setLoaded] = useState([0, 0, 0, 0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [whichCurr, setWhichCurr] = useState(0); // 0 - 4
  const [approvedAmounts, setApprovedAmounts] = useState([]);
  const [multiplier, setMultiplier] = useState([]);

  const getPricingEth = async (round) => {
    try {
      let promises = [];

      for (let j = 0; j < 6; j++) {
        promises.push(cryptContract.amountInEthers(round, j));
      }
      let result = await Promise.all(promises);
      result = result.map((curr) =>
        Number(ethers.utils.formatEther(String(parseInt(curr._hex))))
      );

      console.log(result);

      return result;
    } catch (err) {}
  };

  const otherCurrencyPricing = async (idx, mult, round) => {
    try {
      if (mult.length === 1) return;

      let promises = [];

      for (let j = 0; j < 6; j++) {
        promises.push(cryptContract.amountInCryptoCurrency(idx, round, j));
      }
      let result = await Promise.all(promises);
      result = result.map((curr) =>
        ethers.utils.formatUnits(
          String(parseInt(curr._hex)),
          Number(mult[idx + 1])
        )
      );

      return result;
    } catch (err) {}
  };

  const getPriceListUpdate = async (k, mult, r) => {
    try {
      let pricing = await otherCurrencyPricing(k, mult, r);

      for (let j = 0; j < pricing.length; j++) {
        let obj = allCurrencyRoundInfoArray[k + 1][r][j];
        obj.total = pricing[j];
        obj.each = (obj.total / obj.number).toFixed(5);
        obj.save = calcSave(
          allCurrencyRoundInfoArray[k + 1][r][0].each,
          obj.each,
          obj.number
        );
      }
    } catch (err) {}
  };

  useEffect(() => {
    const run = async () => {
      try {
        const pausedResult = await cryptContract.paused();
        setIsPaused(pausedResult);

        if (!pausedResult) {
          const currentRound = await cryptContract.currentState();
          setRound(currentRound);

          let mult = [""];
          if (account) {
            let c1 = await cUSDT.decimals();

            let c2 = await cUSDC.decimals();

            let c3 = await cDAI.decimals();

            let c4 = await cBUSD.decimals();

            mult.push(c1, c2, c3, c4);

            setMultiplier(mult);
          }
          let approved = [""];
          if (mult.length > 0 && account) {
            const pricingETH = await getPricingEth(currentRound);

            let pricing = pricingETH;

            for (let j = 0; j < pricing.length; j++) {
              let obj = allCurrencyRoundInfoArray[0][currentRound][j];
              obj.total = Number(pricing[j].toFixed(6));
              obj.each = (obj.total / obj.number).toFixed(6);
              obj.save = calcSave(
                allCurrencyRoundInfoArray[0][currentRound][0].each,
                obj.each,
                obj.number
              );
            }

            let tmp = [...loaded];
            tmp[0] = 1;
            setLoaded(tmp);

            // ---------------------------
            await getPriceListUpdate(0, mult, currentRound);

            let c1 = await cUSDT.allowance(account, final.crypt3dPunksAddress);
            c1 = Number(
              ethers.utils.formatUnits(
                String(parseInt(c1._hex)),
                Number(mult[1])
              )
            );
            approved.push(c1);
            setApprovedAmounts(approved);

            setLoaded((tmp) => {
              let t = [...tmp];
              t[1] = 1;
              return t;
            });

            // ---------------------------
            await getPriceListUpdate(1, mult, currentRound);

            let c2 = await cUSDC.allowance(account, final.crypt3dPunksAddress);
            c2 = Number(
              ethers.utils.formatUnits(
                String(parseInt(c2._hex)),
                Number(mult[2])
              )
            );
            approved.push(c2);
            setApprovedAmounts(approved);

            setLoaded((tmp) => {
              let t = [...tmp];
              t[2] = 1;
              return t;
            });

            // ---------------------------
            await getPriceListUpdate(2, mult, currentRound);

            let c3 = await cDAI.allowance(account, final.crypt3dPunksAddress);
            c3 = Number(
              ethers.utils.formatUnits(
                String(parseInt(c3._hex)),
                Number(mult[3])
              )
            );
            approved.push(c3);
            setApprovedAmounts(approved);

            setLoaded((tmp) => {
              let t = [...tmp];
              t[3] = 1;
              return t;
            });

            // ---------------------------
            await getPriceListUpdate(3, mult, currentRound);
            let c4 = await cBUSD.allowance(account, final.crypt3dPunksAddress);
            c4 = Number(
              ethers.utils.formatUnits(
                String(parseInt(c4._hex)),
                Number(mult[4])
              )
            );
            approved.push(c4);
            setApprovedAmounts(approved);

            setLoaded((tmp) => {
              let t = [...tmp];
              t[4] = 1;
              return t;
            });
          }
        } else {
          setLoaded(() => {
            return [1, 1, 1, 1, 1];
          });
        }
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

  const incCurrNum = () => {
    if (whichCurr === currency.length - 1) return;

    roundInfo = allCurrencyRoundInfoArray[whichCurr + 1];
    setWhichCurr(whichCurr + 1);
  };
  const decCurrNum = () => {
    if (whichCurr === 0) return;

    roundInfo = allCurrencyRoundInfoArray[whichCurr - 1];
    setWhichCurr(whichCurr - 1);
  };

  const mintCrypt3dPunkETH = async () => {
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
  const mintCrypt3dPunkOther = async () => {
    try {
      notifyInfo("Your Transaction Has Started");
      const transaction = await cryptContract.batchMintUsingCryptoCurrency(
        whichCurr - 1,
        batch[batchNumber],
        account
      );
      const transactionReceipt = await transaction.wait();

      let temp = [...approvedAmounts];
      temp[whichCurr] -= Number(
        allCurrencyRoundInfoArray[whichCurr][round][batchNumber].total
      );
      setApprovedAmounts(temp);

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
      } else if (
        err?.message.includes("Payment Stopped for this crypto currency")
      ) {
        notifyError("Payment Stopped for this crypto currency");
      } else if (err?.message.includes("Not enough Tokens")) {
        notifyError("Not enough Tokens");
      } else {
        notifyError("Something Went Wrong");
      }
    }
  };
  const approveCurrency = async (val) => {
    notifyInfo("Your Transaction Has Started");

    try {
      if (whichCurr === 1) {
        const sendVal = ethers.utils.parseUnits(String(val), multiplier[1]);

        const transaction = await cUSDT.approve(
          final.crypt3dPunksAddress,
          sendVal
        );
        const transactionReceipt = await transaction.wait();

        notifySuccess("Approved Successfully");

        let temp = [...approvedAmounts];
        temp[1] += Number(val);
        setApprovedAmounts(temp);

        console.log(transactionReceipt);
      } else if (whichCurr === 2) {
        const sendVal = ethers.utils.parseUnits(String(val), multiplier[2]);

        const transaction = await cUSDC.approve(
          final.crypt3dPunksAddress,
          sendVal
        );
        const transactionReceipt = await transaction.wait();

        notifySuccess("Approved Successfully");

        let temp = [...approvedAmounts];
        temp[2] += Number(val);
        setApprovedAmounts(temp);

        console.log(transactionReceipt);
      } else if (whichCurr === 3) {
        const sendVal = ethers.utils.parseUnits(String(val), multiplier[3]);
        console.log(parseInt(sendVal._hex));

        const transaction = await cDAI.approve(
          final.crypt3dPunksAddress,
          sendVal
        );
        const transactionReceipt = await transaction.wait();

        notifySuccess("Approved Successfully");

        let temp = [...approvedAmounts];
        temp[3] += Number(val);
        setApprovedAmounts(temp);

        console.log(transactionReceipt);
      } else if (whichCurr === 4) {
        const sendVal = ethers.utils.parseUnits(String(val), multiplier[4]);

        const transaction = await cBUSD.approve(
          final.crypt3dPunksAddress,
          sendVal
        );
        const transactionReceipt = await transaction.wait();

        notifySuccess("Approved Successfully");

        let temp = [...approvedAmounts];
        temp[4] += Number(val);
        setApprovedAmounts(temp);

        console.log(transactionReceipt);
      }
    } catch (err) {}
  };

  const getElementForOtherCurrency = () => {
    try {
      const targetObj =
        allCurrencyRoundInfoArray[whichCurr][round][batchNumber];
      console.log(approvedAmounts, whichCurr);
      console.log(
        "---",
        Number(targetObj.total),
        Number(approvedAmounts[whichCurr])
      );
      if (Number(approvedAmounts[whichCurr]) >= Number(targetObj.total)) {
        return (
          <>
            <button
              disabled={loaded[whichCurr] === 0}
              onClick={mintCrypt3dPunkOther}
              className="Connect_wallet"
            >
              {`Mint using ${currency[whichCurr]}`}
            </button>
          </>
        );
      } else {
        return (
          <>
            <button
              disabled={loaded[whichCurr] === 0}
              onClick={() =>
                approveCurrency(
                  Number(targetObj.total) - Number(approvedAmounts[whichCurr])
                )
              }
              className="Connect_wallet"
            >
              {`Approve ${
                Number(targetObj.total) - Number(approvedAmounts[whichCurr])
              }  ${currency[whichCurr]}`}
            </button>
          </>
        );
      }
    } catch (err) {}
  };

  const getData = () => {
    return (
      <>
        <p>
          <button className="btn-inc-dec" onClick={decCurrNum}>
            {"<"}
          </button>{" "}
          <span>{currency[whichCurr]} </span>
          <button className="btn-inc-dec" onClick={incCurrNum}>
            {">"}
          </button>
        </p>
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
    );
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
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            width="100%"
            src={PersonalNftImage}
            alt=""
          />
        </Col>
        <Col className="max-col">
          <div style={{ width: "100%" }}>
            <span className="text-mint-pot">
              <span
                className="shadow-txt"
                data-aos="fade-in"
                data-aos-duration="3000"
              >
                MINTING PORTAL
              </span>
            </span>
            <div className="d-flex justify-content-center gap-2">
              <div className="PersonalNftINfoList">
                <p>CURRENCY</p>
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
                {loaded[whichCurr] === 0 ? (
                  <>
                    <p>
                      <button className="btn-inc-dec" onClick={decCurrNum}>
                        {"<"}
                      </button>{" "}
                      <span>{currency[whichCurr]} </span>
                      <button className="btn-inc-dec" onClick={incCurrNum}>
                        {">"}
                      </button>
                    </p>
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
                    <p>
                      <button className="btn-inc-dec" onClick={decCurrNum}>
                        {"<"}
                      </button>{" "}
                      <span>{currency[whichCurr]} </span>
                      <button className="btn-inc-dec" onClick={incCurrNum}>
                        {">"}
                      </button>
                    </p>
                    <p>Paused</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>-</p>
                    <p>-</p>
                  </>
                ) : (
                  <>{getData()}</>
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
                whichCurr === 0 ? (
                  <>
                    <button
                      disabled={loaded[0] === 0}
                      onClick={mintCrypt3dPunkETH}
                      className="Connect_wallet"
                    >
                      Mint
                    </button>
                  </>
                ) : (
                  <>{getElementForOtherCurrency()}</>
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
      </Row>
    </div>
  );
};
export default PersonalNftInfo;
