import React from "react";
import "./NFT.css";

const NFT = () => {
  return (
    <div className="nft">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((fileNo) => (
        <div className="nft__img" key={fileNo}>
          <img src={`/NFT/NFT_${fileNo}.png`} alt=""></img>
        </div>
      ))}
    </div>
  );
};

export default NFT;
