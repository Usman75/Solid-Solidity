import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x8E9130a55D50AA7Be63d514a0c86c48E5385A107';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}