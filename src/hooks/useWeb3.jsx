import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";
import Swal from "sweetalert2";

const useWeb3 = () => {
  const [web3, setWeb3] = useState(undefined);
  const [fundContract, setFundContract] = useState(undefined);
  const [marketContract, setMarketContract] = useState(undefined);
  const dispatch = useDispatch();

  // 지갑 정보 가져옴(메타마스크)
  const getWeb3 = () => {
    try {
      // ethereum 객체에 값 없으면 리턴
      if (!window.ethereum) {
        Swal.fire("메타마스크를 연결해주세요!");
        return;
      }
      setWeb3(new Web3(window.ethereum));
      Swal.fire("지갑주소=", web3);
    } catch (err) {
      console.log("이더객체 없음", err);
    }
  };

  // 컨트랙트 연결
  const getFund = () => {
    // 지갑 연결 확인
    if (!web3) return;
    // 컨트랙트 가져옴
  };
  const getMarket = () => {
    // 지갑 연결 확인
    if (!web3) return;
    // 컨트랙트 가져옴
  };

  useEffect(() => {
    if (!web3) {
      getWeb3();
    }
  }, []);
};

export default useWeb3;
