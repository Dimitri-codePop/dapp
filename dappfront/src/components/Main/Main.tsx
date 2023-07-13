import { ethers } from "ethers";
import React from "react";
import { useAccount } from "wagmi";
import Contract from "../../../../dappblockchain/artifacts/contracts/SimpleStorage.sol/SimpleStorage.json";
import { useEthersProvider } from "../../hooks/useEthersProvider";
import { useEthersSigner } from "../../hooks/useEthersSigner";
export const Main = () => {
  const { isConnected, address } = useAccount();
  const provider = useEthersProvider();
  const signer = useEthersSigner();
  const [favoriteNumberInput, setFavoriteNumberInput] = React.useState<
    string | null
  >(null);
  const [favoriteNumberInBlockchain, setFavoriteNumberInBlockchain] =
    React.useState<number | null>(null);

  React.useEffect(() => {
    if (isConnected) {
      getDatas();
    }
  }, [address]);

  const getDatas = async () => {
    const contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Contract.abi,
      provider
    );
    let favoriteNumber = await contract.getNumber();
    setFavoriteNumberInBlockchain(Number(favoriteNumber));
  };

  const changeFavoriteNumber = async () => {
    try {
      const contract = new ethers.Contract(
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        Contract.abi,
        signer
      );
      let transaction = await contract.setNumber(favoriteNumberInput);
      await transaction.wait(1);
      getDatas();
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="mt-20">
      {isConnected && (
        <>
          <p className="block m-5">
            Your favorite number : {favoriteNumberInBlockchain}
          </p>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400sm:text-sm sm:leading-6"
            placeholder="Your favorite number"
            onChange={(e) => setFavoriteNumberInput(e.target.value)}
          />
          <button
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            onClick={changeFavoriteNumber}
          >
            Change
          </button>
        </>
      )}
      {!isConnected && (
        <p className="text-red-600 font-semibold">
          You need to be connect to enter your favorite number
        </p>
      )}
    </div>
  );
};
