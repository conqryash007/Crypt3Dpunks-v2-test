import React from "react";
import "./SocialLConnect.css";
import Instragram from "../../Assets/Links/Footer-insta.png";
import discord from "../../Assets/Links/Footer-discord.png";
import medium from "../../Assets/Links/Footer-medium.png";
import youtube from "../../Assets/Links/Footer-youtube.png";
import twitter from "../../Assets/Links/Footer-twitter.png";
import boat from "../../Assets/Links/boat.webp";
import ethScan from "../../Assets/Links/etherscan.png";
const SocialConnect = () => {
  return (
    <div className="container-wrraper">
      <div>
        <a
          href="https://www.instagram.com/crypt3dpunks/"
          className="footer-icon-linkblock sp w-inline-block"
        >
          <img
            data-aos="fade-up"
            src={Instragram}
            loading="lazy"
            alt="Instagram"
            className="footer-icon-image"
          />
        </a>
        <a
          href="https://discord.gg/9p3VhXPup5"
          className="footer-icon-linkblock sp w-inline-block"
        >
          <img
            data-aos="fade-up"
            src={discord}
            loading="lazy"
            alt="discord"
            className="footer-icon-image"
          />
        </a>
        <a
          href="https://crypt3dpunks.medium.com/"
          className="footer-icon-linkblock sp w-inline-block"
        >
          <img
            data-aos="fade-up"
            src={medium}
            loading="lazy"
            alt="medium"
            className="footer-icon-image"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdABc-BeKP9rzdAsuu4KaXw"
          className="footer-icon-linkblock sp w-inline-block"
        >
          <img
            data-aos="fade-up"
            src={youtube}
            loading="lazy"
            alt="youtube"
            className="footer-icon-image"
          />
        </a>
        <a
          href="https://www.twitter.com/crypt3d_punks"
          className="footer-icon-linkblock sp w-inline-block"
        >
          <img
            data-aos="fade-up"
            src={twitter}
            loading="lazy"
            alt="twitter"
            className="footer-icon-image"
          />
        </a>
        <a href="#" className="footer-icon-linkblock sp w-inline-block">
          <img
            data-aos="fade-up"
            src={boat}
            loading="lazy"
            alt="boat"
            className="footer-icon-image"
          />
        </a>
        <a href="#" className="footer-icon-linkblock sp w-inline-block">
          <img
            data-aos="fade-up"
            src={ethScan}
            loading="lazy"
            alt="boat"
            className="footer-icon-image"
          />
        </a>
      </div>
      <div className="copyright" data-aos="fade-up">
        <a href="/license" className="link-thin">
          EULA
        </a>
        <br />
        2021 Copyright. All Rights Reserved.
        <br />
      </div>
    </div>
  );
};

export default SocialConnect;
