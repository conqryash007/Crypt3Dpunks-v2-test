import React from 'react';
import './SocialLConnect.css'
import Instragram from '../../Assets/Links/Footer-insta.png' 
import discord from '../../Assets/Links/Footer-discord.png'
import medium from '../../Assets/Links/Footer-medium.png'
import youtube from '../../Assets/Links/Footer-youtube.png'
import twitter from '../../Assets/Links/Footer-twitter.png'
import boat from '../../Assets/Links/boat.webp'
import ethScan from   "../../Assets/Links/etherscan.png"
const SocialConnect = () => {
    return (
        <div className="footer wf-section">
            <div className="container-wrraper">
                <div className="div-block-38">
                    <div>
                        <a href="https://www.instagram.com/crypt3dpunks/" target="_blank" className="footer-icon-linkblock sp w-inline-block">
                            <img src={Instragram} loading="lazy" alt="Instagram" className="footer-icon-image" />
                        </a>
                        <a href="https://discord.gg/9p3VhXPup5" target="_blank" className="footer-icon-linkblock sp w-inline-block">
                            <img src={discord} loading="lazy" alt="discord" className="footer-icon-image" />

                        </a>
                        <a href="https://crypt3dpunks.medium.com/" target="_blank" className="footer-icon-linkblock sp w-inline-block">
                            <img src={medium} loading="lazy" alt="medium" className="footer-icon-image" />

                        </a>
                        <a href="https://www.youtube.com/channel/UCdABc-BeKP9rzdAsuu4KaXw" target="_blank" className="footer-icon-linkblock sp w-inline-block">
                            <img src={youtube} loading="lazy" alt="youtube" className="footer-icon-image" />

                        </a>
                        <a href="https://www.twitter.com/crypt3d_punks" target="_blank" className="footer-icon-linkblock sp w-inline-block">
                            <img src={twitter} loading="lazy" alt="twitter" className="footer-icon-image" />

                        </a>
                        <a href="#" target="_blank" className="footer-icon-linkblock sp w-inline-block">
                            <img src={boat} loading="lazy" alt="boat" className="footer-icon-image" />

                        </a>
                        <a href="#" target="_blank" className="footer-icon-linkblock sp w-inline-block">
                            <img src={ethScan} loading="lazy" alt="boat" className="footer-icon-image" />

                        </a>
                    </div>
                    <div className="footer"><a href="/license" className="link-thin">EULA</a><br/>
                        2021 Copyright. All Rights Reserved.<br/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SocialConnect;