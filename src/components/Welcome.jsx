import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContex";
import Owner from "./Owner";
import Student from "./Student";
const Welcome = () => {
  const { connectWallet, currentAccount, owner } =
    useContext(TransactionContext);
  return (
    <div className="h-fit">
      {!currentAccount ? (
        <div className="h-full flex justify-center p-10 m-10">
          <button type="button" onClick={connectWallet} className="text-white bg-gradient-to-b from-blue-500 p-5 rounded-full">
            Connect
          </button>
        </div>
      ) : (
        <div className="bg-zinc-800 h-full">{currentAccount === owner ? <Owner /> : <Student />}</div>
      )}
    </div>
  );
};

export default Welcome;
