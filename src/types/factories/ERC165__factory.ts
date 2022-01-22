/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { ERC165, ERC165Interface } from "../ERC165";
import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ERC165__factory {
  static readonly abi = _abi;
  static createInterface(): ERC165Interface {
    return new utils.Interface(_abi) as ERC165Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC165 {
    return new Contract(address, _abi, signerOrProvider) as ERC165;
  }
}