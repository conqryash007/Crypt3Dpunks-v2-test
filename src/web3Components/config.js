import { ABI } from "./artifacts/Crypt3dPunksABI";

// const network = { name: "homestead", chainId: 1 };
const network = { name: "rinkeby", chainId: 4 };

let crypt3dPunksAddress;

if (network.name === "rinkeby") {
  crypt3dPunksAddress = "0x49AB6b077F7cE0965fC85A6d3CFa13fB4aF37D77";
} else if (network.name === "homestead") {
  crypt3dPunksAddress = "";
}

const final = {
  ABI: ABI,
  network: network,
  crypt3dPunksAddress,
};

export { final };
