import React from "react";
import "./UpgradedPunk.css";
const UpgradedPunk = () => {
  return (
    <div style={{ backgroundColor: "#6CB8D9" }}>
      <div
        style={{ width: "80%" }}
        className="mx-auto p-5"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <p style={{ fontSize: "1.1vw" }} className="bold-txt-1">
          GET YOUR UPGRADED PUNK
        </p>
        <div className="upgradeWrap1 pt-5 pb-5">
          <p>
            <span className="bold-txt-1">OG Pioneer's</span> that have been with
            us since the original ERC-1155 contract will need to swap their old{" "}
            <span className="bold-txt-1">ERC-1155 Crypt3d Punk NFT(s)</span>
            for the new{" "}
            <span className="bold-txt-1">ERC-721 Crypt3d Punk NFT(s).</span>
          </p>
          <p>
            The new ERC-721 Punk will be the{" "}
            <span className="bold-txt-1">
              exact Punk that you originally minted
            </span>{" "}
            , complete with all their Punky Attributes. You may also find that
            when your new, upgraded ERC-721 Punk arrives in your new wallet,
            that it comes with a{" "}
            <span className="bold-txt-1">free friend </span>- as our thank you
            to you for sticking around with us through this transition.
          </p>
          <p>
            Our new contract is keeping the Punks{" "}
            <span className="bold-txt-1">soul bound </span>until the
            <span className="bold-txt-1">mint completes.</span>
            This means that you won't be able to transfer your Punks out of your
            wallet until the mint is over. We are doing this to counter any
            nefarious activities that occur during Project mints, such as floor
            crashing bots. As such, we{" "}
            <span className="bold-txt-1">highly recommend</span> transferring
            all of your OG Pioneer Crypt3d Punk NFT's into{" "}
            <span className="bold-txt-1">one wallet </span> before doing the
            swap, so they all land in the same, safe place, together, with their
            new <span className="bold-txt-1">free friends</span> .
          </p>
          <p>
            This may all sound scary, but don't worry, it's super easy, just
          </p>
          <p className="bold-txt-1">follow these steps:</p>
          <p className="bold-txt-2">1. Connect your wallet</p>
          <p>
            This will now show how many OG ERC-1155 Crypt3d Punks NFT you are
            about to swap.
          </p>
          <p className="bold-txt-2">2. Click Approve</p>
          <p>
            This allows the contract to take your old, Manky, ERC-1155 Crypt3d
            Punks NFT(s) and swap them for the new upgraded, shiny ERC-721 ones.
            You will need to approve this transaction in your Web3 wallet.
          </p>
          <p className="bold-txt-2">3. Click SWAP</p>
          <p>
            This will allow your old <span>ERC-1155 Crypt3d Punk NFT(s)</span>
            and swap them for the new upgraded, shiny <span>ERC-721</span> ones.
            You will need to approve this transaction in your Web3 wallet.
          </p>
          <p className="bold-txt-2">
            <span>4. Receive your new Punk(s) + Friend(s)</span>
          </p>
          <p>
            Your new <span>ERC-721 Crypt3d Punk NFT(s)</span> will have now
            landed in your wallet, along with a free friend each!
          </p>
          <p>
            You can view these in your wallet at your{" "}
            <a href="#">OpenSea profile</a> .
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default UpgradedPunk;
