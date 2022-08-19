import { ABI } from "./artifacts/Crypt3dPunksABI";

// const network = "homestead";
const network = "rinkeby";

let crypt3dPunksAddress;

if (network === "rinkeby") {
  crypt3dPunksAddress = "0x2cDC5cF9Cb10F7ece537c72e07Da3BD7C2AF3f2a";
} else if (network === "homestead") {
  crypt3dPunksAddress = "";
}

export { ABI, network, crypt3dPunksAddress };
