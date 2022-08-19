import React from "react";
import PersonalNftImage from "../../Assets/Links/Crypt3d Punks NFT Wrapper.gif";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Entherium from "../../Assets/Links/Ethereum.png";
import "./PersonalNftInfo.css";
const PersonalNftInfo = () => {
  return (
    <div className="PersonalNftInfoTable ">
      <Row
        xs={1}
        sm={1}
        lg={2}
        className="PersonalNftInfoTableWrap"
        style={{ margin: "auto" }}
      >
        <Col>
          <img width="100%" src={PersonalNftImage} alt="" />
        </Col>
        <Col>
          <div style={{ width: "100%" }}>
            <h1 className="uppercase PersonalNftInfoTitle">Mint Your Nft</h1>
            <div className="d-flex justify-content-center gap-2">
              <div className="PersonalNftINfoList">
                <p>CURRENT TIER</p>
                <p>HOW MANY? </p>
                <p>
                  EACH <img width="20px" src={Entherium} alt="" />
                </p>
                <p>
                  TOTAL <img width="20px" src={Entherium} alt="" />
                </p>
                <p>
                  SAVE <img width="20px" src={Entherium} alt="" />
                </p>
                <p>FREE LOOT</p>
                <p>CHANCE TO WIN</p>
              </div>
              <div className="PersonalNftINfoValue">
                <p>3</p>
                <p>- 3 +</p>
                <p>0.045</p>
                <p>0.135</p>
                <p>10% / 0.015</p>
                <p>Hoodie</p>
                <p>1 ETH</p>
              </div>
            </div>
            <div className="mt-3">
              <a href="#" className="Connect_wallet">
                CONNECT WALLET
              </a>
              <p className="CompletePrice">Complete Pricing Guide</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default PersonalNftInfo;
