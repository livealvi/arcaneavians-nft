import React from "react";
import "./NFT.css";

const NFT = () => {
  return (
    <div className="nft">
      {[...Array(15).keys()].map((fileNo) => (
        <div className="nft__img" key={fileNo}>
          <img src={`/NFT/NFT_${fileNo+1}.png`} alt=""></img>
        </div>
      ))}
    </div>
  );
};

export default NFT;
