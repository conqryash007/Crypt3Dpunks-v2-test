import React from "react";
import "./OgQuestions";
const OgQuestions = () => {
  return (
    <div style={{ backgroundColor: "#4686A1" }}>
      <div className="pt-5" data-aos="fade-left" data-aos-duration="2000">
        <h1>YOU HAVE OG QUESTIONS.</h1>
        <h1>WE HAVE OG ANSWERS.</h1>
      </div>
      <div
        className="w-75 mx-auto upgradeWrap1 text-start pt-5 pb-5"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div>
          <p className="bold-txt">Do I get the same Punk back?</p>
          <p>
            Yes, you will get the new ERC-721 version of the ERC-1155 Punk that
            you originally minted.
          </p>
          <p className="bold-txt">Where does my ERC-1155 Punk go?</p>
          <p>
            It gets banished to a null wallet, with all of the other ERC-1155
            Punks, where they will spend the rest of eternity, never able to
            escape.
          </p>
          <p className="bold-txt">What is Soul bound and what does it mean?</p>
          <p>
            The new ERC-721 Crypt3d Punk NFT's will be soul bound until the
            minting closes. This measn that the they will not be able to leave
            your wallet or be traded until this time.
          </p>
          <p>
            This is done as a means to negate any nefarious activites, such as
            floor crashing bots, that have been hindering the success of project
            Mints.
          </p>
          <p>
            We believe that this is the best path of action for both the Project
            and Community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OgQuestions;
