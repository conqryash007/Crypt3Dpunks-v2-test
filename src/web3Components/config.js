import { ABI } from "./artifacts/Crypt3dPunksABI";

// const network = { name: "homestead", chainId: 1 };
const network = { name: "rinkeby", chainId: 4 };

let crypt3dPunksAddress;

if (network.name === "rinkeby") {
  crypt3dPunksAddress = "0x996BFE6D73902Dac82089d617bF5592f05708c07";
} else if (network.name === "homestead") {
  crypt3dPunksAddress = "";
}

const final = {
  ABI: ABI,
  network: network,
  crypt3dPunksAddress,
};

export { final };
