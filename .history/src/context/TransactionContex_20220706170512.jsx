import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [owner, setOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState();
  const [results, updateResults] = useState();

  const projectId = "2AhShJearHhtHEN7bQIKAgZSPq3";
  const projectSecret = "756a8a0325b67d514195d9b238f27bd3";
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  const uploadToIpfs = async () => {
    const ipfs = client;

    const options = {
      warpWithDirectory: false,
    };
    const result = await ipfs.add(file, options);

    return result.path;
  };

  const uploadFile = (e) => {
    e.preventDefault();
    // if (e.target.files) {
      sendTransaction();
    // } else {
    //   return window.alert("Please choose file before uploading");
    // }
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return "Please install MetaMask";
      const transactionsContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther("0");

      const fileHash = await uploadToIpfs();
      const fileName = file.name;

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: owner,
            to: owner,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionsContract.uploadResults(
        owner,
        owner,
        fileHash,
        fileName
      );

      setIsLoading(true);
      await transactionHash.wait();
      setIsLoading(false);

      console.log(transactionHash);
      // window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const getAllResults = async () => {
    try {
      if (!ethereum) return "Please install MetaMask";
      const transactionsContract = getEthereumContract();
      const results = await transactionsContract.getHistory();

      if (results) updateResults(results);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return "Please install MetaMask";
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Accounts Found!");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const checkOwner = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const transactionContract = getEthereumContract();

      const owner = await transactionContract.getOwner();

      setOwner(owner.toLowerCase());
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkOwner();
    getAllResults();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        owner,
        sendTransaction,
        handleChange,
        uploadFile,
        results,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
