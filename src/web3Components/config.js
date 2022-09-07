import { ABI } from "./artifacts/Crypt3dPunksABI";

// const network = { name: "homestead", chainId: 1 };
const network = { name: "rinkeby", chainId: 4 };

let crypt3dPunksAddress;

if (network.name === "rinkeby") {
  crypt3dPunksAddress = "0xa0957418DA97756532Ae2aA553B68B316bbCDf9F";
} else if (network.name === "homestead") {
  crypt3dPunksAddress = "";
}

const final = {
  ABI: ABI,
  network: network,
  crypt3dPunksAddress,
};

export { final };
