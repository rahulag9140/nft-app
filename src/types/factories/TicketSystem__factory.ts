/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { TicketSystem, TicketSystemInterface } from "../TicketSystem";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "nftTokenURI",
        type: "string",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "nftTokenURI",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f5469636b657453797374656d00000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d414c0000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61338a80620002cb6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063711112be116100ad578063b88d4fde11610071578063b88d4fde1461031b578063c87b56dd14610337578063d204c45e14610367578063e985e9c514610383578063f2fde38b146103b35761012c565b8063711112be1461029d578063715018a6146102b95780638da5cb5b146102c357806395d89b41146102e1578063a22cb465146102ff5761012c565b806342842e0e116100f457806342842e0e146101e757806342966c68146102035780635763440b1461021f5780636352211e1461023d57806370a082311461026d5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b600480360381019061014691906122a7565b6103cf565b6040516101589190612716565b60405180910390f35b6101696104b1565b6040516101769190612731565b60405180910390f35b610199600480360381019061019491906122f9565b610543565b6040516101a691906126af565b60405180910390f35b6101c960048036038101906101c4919061226b565b6105c8565b005b6101e560048036038101906101e09190612111565b6106e0565b005b61020160048036038101906101fc9190612111565b610740565b005b61021d600480360381019061021891906122f9565b610760565b005b6102276107bc565b60405161023491906129b3565b60405180910390f35b610257600480360381019061025291906122f9565b6107cd565b60405161026491906126af565b60405180910390f35b610287600480360381019061028291906120ac565b61087f565b60405161029491906129b3565b60405180910390f35b6102b760048036038101906102b29190612217565b610937565b005b6102c161096b565b005b6102cb6109f3565b6040516102d891906126af565b60405180910390f35b6102e9610a1d565b6040516102f69190612731565b60405180910390f35b610319600480360381019061031491906121db565b610aaf565b005b61033560048036038101906103309190612160565b610ac5565b005b610351600480360381019061034c91906122f9565b610b27565b60405161035e9190612731565b60405180910390f35b610381600480360381019061037c9190612217565b610b39565b005b61039d600480360381019061039891906120d5565b610be9565b6040516103aa9190612716565b60405180910390f35b6103cd60048036038101906103c891906120ac565b610c7d565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061049a57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104aa57506104a982610d75565b5b9050919050565b6060600080546104c090612c09565b80601f01602080910402602001604051908101604052809291908181526020018280546104ec90612c09565b80156105395780601f1061050e57610100808354040283529160200191610539565b820191906000526020600020905b81548152906001019060200180831161051c57829003601f168201915b5050505050905090565b600061054e82610ddf565b61058d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610584906128d3565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105d3826107cd565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b90612953565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610663610e4b565b73ffffffffffffffffffffffffffffffffffffffff16148061069257506106918161068c610e4b565b610be9565b5b6106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890612813565b60405180910390fd5b6106db8383610e53565b505050565b6106f16106eb610e4b565b82610f0c565b610730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072790612973565b60405180910390fd5b61073b838383610fea565b505050565b61075b83838360405180602001604052806000815250610ac5565b505050565b61077161076b610e4b565b82610f0c565b6107b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a790612993565b60405180910390fd5b6107b981611246565b50565b60006107c86008611252565b905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086d90612853565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e790612833565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61094a826109456008611252565b611260565b61095d6109576008611252565b8261127e565b61096760086112f2565b5050565b610973610e4b565b73ffffffffffffffffffffffffffffffffffffffff166109916109f3565b73ffffffffffffffffffffffffffffffffffffffff16146109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de906128f3565b60405180910390fd5b6109f16000611308565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a2c90612c09565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5890612c09565b8015610aa55780601f10610a7a57610100808354040283529160200191610aa5565b820191906000526020600020905b815481529060010190602001808311610a8857829003601f168201915b5050505050905090565b610ac1610aba610e4b565b83836113ce565b5050565b610ad6610ad0610e4b565b83610f0c565b610b15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0c90612973565b60405180910390fd5b610b218484848461153b565b50505050565b6060610b3282611597565b9050919050565b610b41610e4b565b73ffffffffffffffffffffffffffffffffffffffff16610b5f6109f3565b73ffffffffffffffffffffffffffffffffffffffff1614610bb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bac906128f3565b60405180910390fd5b610bc882610bc36008611252565b611260565b610bdb610bd56008611252565b8261127e565b610be560086112f2565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c85610e4b565b73ffffffffffffffffffffffffffffffffffffffff16610ca36109f3565b73ffffffffffffffffffffffffffffffffffffffff1614610cf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf0906128f3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6090612773565b60405180910390fd5b610d7281611308565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610ec6836107cd565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610f1782610ddf565b610f56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4d906127f3565b60405180910390fd5b6000610f61836107cd565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fd057508373ffffffffffffffffffffffffffffffffffffffff16610fb884610543565b73ffffffffffffffffffffffffffffffffffffffff16145b80610fe15750610fe08185610be9565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661100a826107cd565b73ffffffffffffffffffffffffffffffffffffffff1614611060576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105790612913565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c7906127b3565b60405180910390fd5b6110db8383836116e9565b6110e6600082610e53565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111369190612b1f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461118d9190612a98565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b61124f816116ee565b50565b600081600001549050919050565b61127a828260405180602001604052806000815250611741565b5050565b61128782610ddf565b6112c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bd90612873565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906112ed929190611e90565b505050565b6001816000016000828254019250508190555050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561143d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611434906127d3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161152e9190612716565b60405180910390a3505050565b611546848484610fea565b6115528484848461179c565b611591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158890612753565b60405180910390fd5b50505050565b60606115a282610ddf565b6115e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d8906128b3565b60405180910390fd5b600060066000848152602001908152602001600020805461160190612c09565b80601f016020809104026020016040519081016040528092919081815260200182805461162d90612c09565b801561167a5780601f1061164f5761010080835404028352916020019161167a565b820191906000526020600020905b81548152906001019060200180831161165d57829003601f168201915b50505050509050600061168b611933565b90506000815114156116a15781925050506116e4565b6000825111156116d65780826040516020016116be92919061268b565b604051602081830303815290604052925050506116e4565b6116df8461194a565b925050505b919050565b505050565b6116f7816119f1565b600060066000838152602001908152602001600020805461171790612c09565b90501461173e5760066000828152602001908152602001600020600061173d9190611f16565b5b50565b61174b8383611b02565b611758600084848461179c565b611797576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178e90612753565b60405180910390fd5b505050565b60006117bd8473ffffffffffffffffffffffffffffffffffffffff16611cd0565b15611926578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026117e6610e4b565b8786866040518563ffffffff1660e01b815260040161180894939291906126ca565b602060405180830381600087803b15801561182257600080fd5b505af192505050801561185357506040513d601f19601f8201168201806040525081019061185091906122d0565b60015b6118d6573d8060008114611883576040519150601f19603f3d011682016040523d82523d6000602084013e611888565b606091505b506000815114156118ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118c590612753565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061192b565b600190505b949350505050565b606060405180602001604052806000815250905090565b606061195582610ddf565b611994576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198b90612933565b60405180910390fd5b600061199e611933565b905060008151116119be57604051806020016040528060008152506119e9565b806119c884611ce3565b6040516020016119d992919061268b565b6040516020818303038152906040525b915050919050565b60006119fc826107cd565b9050611a0a816000846116e9565b611a15600083610e53565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a659190612b1f565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6990612893565b60405180910390fd5b611b7b81610ddf565b15611bbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb290612793565b60405180910390fd5b611bc7600083836116e9565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611c179190612a98565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606000821415611d2b576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611e8b565b600082905060005b60008214611d5d578080611d4690612c6c565b915050600a82611d569190612aee565b9150611d33565b60008167ffffffffffffffff811115611d9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611dd15781602001600182028036833780820191505090505b5090505b60008514611e8457600182611dea9190612b1f565b9150600a85611df99190612cb5565b6030611e059190612a98565b60f81b818381518110611e41577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611e7d9190612aee565b9450611dd5565b8093505050505b919050565b828054611e9c90612c09565b90600052602060002090601f016020900481019282611ebe5760008555611f05565b82601f10611ed757805160ff1916838001178555611f05565b82800160010185558215611f05579182015b82811115611f04578251825591602001919060010190611ee9565b5b509050611f129190611f56565b5090565b508054611f2290612c09565b6000825580601f10611f345750611f53565b601f016020900490600052602060002090810190611f529190611f56565b5b50565b5b80821115611f6f576000816000905550600101611f57565b5090565b6000611f86611f81846129f3565b6129ce565b905082815260208101848484011115611f9e57600080fd5b611fa9848285612bc7565b509392505050565b6000611fc4611fbf84612a24565b6129ce565b905082815260208101848484011115611fdc57600080fd5b611fe7848285612bc7565b509392505050565b600081359050611ffe816132f8565b92915050565b6000813590506120138161330f565b92915050565b60008135905061202881613326565b92915050565b60008151905061203d81613326565b92915050565b600082601f83011261205457600080fd5b8135612064848260208601611f73565b91505092915050565b600082601f83011261207e57600080fd5b813561208e848260208601611fb1565b91505092915050565b6000813590506120a68161333d565b92915050565b6000602082840312156120be57600080fd5b60006120cc84828501611fef565b91505092915050565b600080604083850312156120e857600080fd5b60006120f685828601611fef565b925050602061210785828601611fef565b9150509250929050565b60008060006060848603121561212657600080fd5b600061213486828701611fef565b935050602061214586828701611fef565b925050604061215686828701612097565b9150509250925092565b6000806000806080858703121561217657600080fd5b600061218487828801611fef565b945050602061219587828801611fef565b93505060406121a687828801612097565b925050606085013567ffffffffffffffff8111156121c357600080fd5b6121cf87828801612043565b91505092959194509250565b600080604083850312156121ee57600080fd5b60006121fc85828601611fef565b925050602061220d85828601612004565b9150509250929050565b6000806040838503121561222a57600080fd5b600061223885828601611fef565b925050602083013567ffffffffffffffff81111561225557600080fd5b6122618582860161206d565b9150509250929050565b6000806040838503121561227e57600080fd5b600061228c85828601611fef565b925050602061229d85828601612097565b9150509250929050565b6000602082840312156122b957600080fd5b60006122c784828501612019565b91505092915050565b6000602082840312156122e257600080fd5b60006122f08482850161202e565b91505092915050565b60006020828403121561230b57600080fd5b600061231984828501612097565b91505092915050565b61232b81612b53565b82525050565b61233a81612b65565b82525050565b600061234b82612a55565b6123558185612a6b565b9350612365818560208601612bd6565b61236e81612da2565b840191505092915050565b600061238482612a60565b61238e8185612a7c565b935061239e818560208601612bd6565b6123a781612da2565b840191505092915050565b60006123bd82612a60565b6123c78185612a8d565b93506123d7818560208601612bd6565b80840191505092915050565b60006123f0603283612a7c565b91506123fb82612db3565b604082019050919050565b6000612413602683612a7c565b915061241e82612e02565b604082019050919050565b6000612436601c83612a7c565b915061244182612e51565b602082019050919050565b6000612459602483612a7c565b915061246482612e7a565b604082019050919050565b600061247c601983612a7c565b915061248782612ec9565b602082019050919050565b600061249f602c83612a7c565b91506124aa82612ef2565b604082019050919050565b60006124c2603883612a7c565b91506124cd82612f41565b604082019050919050565b60006124e5602a83612a7c565b91506124f082612f90565b604082019050919050565b6000612508602983612a7c565b915061251382612fdf565b604082019050919050565b600061252b602e83612a7c565b91506125368261302e565b604082019050919050565b600061254e602083612a7c565b91506125598261307d565b602082019050919050565b6000612571603183612a7c565b915061257c826130a6565b604082019050919050565b6000612594602c83612a7c565b915061259f826130f5565b604082019050919050565b60006125b7602083612a7c565b91506125c282613144565b602082019050919050565b60006125da602983612a7c565b91506125e58261316d565b604082019050919050565b60006125fd602f83612a7c565b9150612608826131bc565b604082019050919050565b6000612620602183612a7c565b915061262b8261320b565b604082019050919050565b6000612643603183612a7c565b915061264e8261325a565b604082019050919050565b6000612666603083612a7c565b9150612671826132a9565b604082019050919050565b61268581612bbd565b82525050565b600061269782856123b2565b91506126a382846123b2565b91508190509392505050565b60006020820190506126c46000830184612322565b92915050565b60006080820190506126df6000830187612322565b6126ec6020830186612322565b6126f9604083018561267c565b818103606083015261270b8184612340565b905095945050505050565b600060208201905061272b6000830184612331565b92915050565b6000602082019050818103600083015261274b8184612379565b905092915050565b6000602082019050818103600083015261276c816123e3565b9050919050565b6000602082019050818103600083015261278c81612406565b9050919050565b600060208201905081810360008301526127ac81612429565b9050919050565b600060208201905081810360008301526127cc8161244c565b9050919050565b600060208201905081810360008301526127ec8161246f565b9050919050565b6000602082019050818103600083015261280c81612492565b9050919050565b6000602082019050818103600083015261282c816124b5565b9050919050565b6000602082019050818103600083015261284c816124d8565b9050919050565b6000602082019050818103600083015261286c816124fb565b9050919050565b6000602082019050818103600083015261288c8161251e565b9050919050565b600060208201905081810360008301526128ac81612541565b9050919050565b600060208201905081810360008301526128cc81612564565b9050919050565b600060208201905081810360008301526128ec81612587565b9050919050565b6000602082019050818103600083015261290c816125aa565b9050919050565b6000602082019050818103600083015261292c816125cd565b9050919050565b6000602082019050818103600083015261294c816125f0565b9050919050565b6000602082019050818103600083015261296c81612613565b9050919050565b6000602082019050818103600083015261298c81612636565b9050919050565b600060208201905081810360008301526129ac81612659565b9050919050565b60006020820190506129c8600083018461267c565b92915050565b60006129d86129e9565b90506129e48282612c3b565b919050565b6000604051905090565b600067ffffffffffffffff821115612a0e57612a0d612d73565b5b612a1782612da2565b9050602081019050919050565b600067ffffffffffffffff821115612a3f57612a3e612d73565b5b612a4882612da2565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612aa382612bbd565b9150612aae83612bbd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612ae357612ae2612ce6565b5b828201905092915050565b6000612af982612bbd565b9150612b0483612bbd565b925082612b1457612b13612d15565b5b828204905092915050565b6000612b2a82612bbd565b9150612b3583612bbd565b925082821015612b4857612b47612ce6565b5b828203905092915050565b6000612b5e82612b9d565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612bf4578082015181840152602081019050612bd9565b83811115612c03576000848401525b50505050565b60006002820490506001821680612c2157607f821691505b60208210811415612c3557612c34612d44565b5b50919050565b612c4482612da2565b810181811067ffffffffffffffff82111715612c6357612c62612d73565b5b80604052505050565b6000612c7782612bbd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612caa57612ca9612ce6565b5b600182019050919050565b6000612cc082612bbd565b9150612ccb83612bbd565b925082612cdb57612cda612d15565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656400000000000000000000000000000000602082015250565b61330181612b53565b811461330c57600080fd5b50565b61331881612b65565b811461332357600080fd5b50565b61332f81612b71565b811461333a57600080fd5b50565b61334681612bbd565b811461335157600080fd5b5056fea2646970667358221220ae97c37c82e5e04a2bf39c73cd3628b86fff9f7bbbf66358d9f3347de38aae9164736f6c63430008040033";

type TicketSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TicketSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TicketSystem__factory extends ContractFactory {
  constructor(...args: TicketSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TicketSystem";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TicketSystem> {
    return super.deploy(overrides || {}) as Promise<TicketSystem>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TicketSystem {
    return super.attach(address) as TicketSystem;
  }
  connect(signer: Signer): TicketSystem__factory {
    return super.connect(signer) as TicketSystem__factory;
  }
  static readonly contractName: "TicketSystem";
  public readonly contractName: "TicketSystem";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TicketSystemInterface {
    return new utils.Interface(_abi) as TicketSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TicketSystem {
    return new Contract(address, _abi, signerOrProvider) as TicketSystem;
  }
}