import useWeb3 from "@/hooks/useWeb3";
import { useEffect, useState } from "react";

const ConnectWallet = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const { web3 } = useWeb3();
  const getAccount = async () => {
    if (!web3) return;
    const _accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  };

  useEffect(() => {
    if (!window.ethereum) {
      // 연결 계정 가져오기
      ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          setCurrentAccount(accounts[0]);
        });

      // 계정 변경되면 변경계정 가져오기
      ethereum.on("accountsChanged", (accounts) => {
        setCurrentAccount(accounts[0]);
      });
    }
  }, []);
  return (
    <div>
      <button onClick={getAccount}>계정 가져오기</button>
      {address}
    </div>
  );
};

export default ConnectWallet;
