import { ABI } from "./artifacts/Crypt3dPunksABI";
import { ERC20ABI } from "./artifacts/ERC20ABI";

// const network = { name: "homestead", chainId: 1 };
// const network = { name: "rinkeby", chainId: 4 };
const network = { name: "goerli", chainId: 5 };

// "DAI", "USDT", "BUSD", "TUSD"
let crypt3dPunksAddress, oldcrypt3dPunksAddress, DAI, USDT, BUSD, TUSD, USDC;

if (network.name === "rinkeby") {
  oldcrypt3dPunksAddress = "0xcAff8ec4b071Cd99fa8Ac83079A765218fc094aA";
  // crypt3dPunksAddress = "0xa0957418DA97756532Ae2aA553B68B316bbCDf9F";
  // crypt3dPunksAddress = "0xd3447720Ad1205fFFDB9504373d06B2AB32a1F3C";
  crypt3dPunksAddress = "0x0025fF11F1489de1800b73AAB03ecc2A552a7Cde";
  DAI = "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa";
  USDT = "0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD";
  USDC = "0xeb8f08a975Ab53E34D8a0330E0D34de942C95926";
  BUSD = "0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E";
  TUSD = "0xd2255612F9b045e9c81244bB874aBb413Ca139a3";
} else if (network.name === "homestead") {
  crypt3dPunksAddress = "";
  DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  BUSD = "0x4Fabb145d64652a948d72533023f6E7A623C7C53";
  TUSD = "0x0000000000085d4780B73119b644AE5ecd22b376";
} else if (network.name === "goerli") {
  oldcrypt3dPunksAddress = "0xE1068835a265c9Dc01723152C91f760802D26723";
  crypt3dPunksAddress = "0x9d6A0Dcb231E5F9082394d6aaAe10e76D22f3481";
  USDT = "0x8d55B7E009A0E9c2645F33157CF521BA33cADebF";
  USDC = "0x49A4ff71Ec8Fc92A574721CbE46F6E1ce7392231";
  DAI = "0x8d55B7E009A0E9c2645F33157CF521BA33cADebF";
  BUSD = "0x8d55B7E009A0E9c2645F33157CF521BA33cADebF";
  TUSD = "0x8d55B7E009A0E9c2645F33157CF521BA33cADebF";
}

const final = {
  ABI: ABI,
  network: network,
  crypt3dPunksAddress,
  DAI,
  USDT,
  BUSD,
  TUSD,
  USDC,
  ERC20ABI,
};

export { final };
