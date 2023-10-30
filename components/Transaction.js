import { passportProvider, initiateTransaction } from "../lib/immutable";

const Transaction = () => {
  const handleTransaction = async (data) => {
    try {
      const transactionHash = await initiateTransaction({ data });
      console.log("Transaction Hash:", transactionHash);
      // Handle the transaction response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={() => handleTransaction({  })}>
      Initiate Transaction
    </button>
  );
};

export default Transaction;
