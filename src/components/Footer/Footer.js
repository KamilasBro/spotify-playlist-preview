import fb from "../../images/fb.png"
import twitter from "../../images/twitter.png"
import ig from "../../images/ig.png"
import home from "../../images/secondNavbar/home.png"
import search from "../../images/secondNavbar/search.png"
import library from "../../images/secondNavbar/library.png"
import likedSongs from "../../images/secondNavbar/liked.png"
import React from "react"

import "./footer.css"
export default function Footer(){
    return(
        <footer>
            <section className="second-navbar">
                <div className="second-navbar-btn">
                    <div><img src={home} alt="home"/></div>
                    <span>Home</span>
                </div>
                <div className="second-navbar-btn">
                    <div><img src={search} alt="home"/></div>
                    <span>Search</span>
                </div>
                <div className="second-navbar-btn">
                    <div><img src={library} alt="home"/></div>
                    <span>Library</span>
                </div>
                <div className="second-navbar-btn">
                    <div><img src={likedSongs} alt="home"/></div>
                    <span>Liked songs</span>
                </div>
            </section>
            <section className="footer">
                <div className="footer-inner">
                    <div className="footer-inner-nav">
                        <div className="footer-inner-nav-list">
                            <ul>
                                <label>Business</label>
                                <li>Information</li>
                                <li>Work</li>
                                <li>Address</li>
                            </ul>
                            <ul>
                                <label>Society</label>
                                <li>Advertisement</li>
                                <li>Investors</li>
                                <li>Suppliers</li>
                            </ul>
                            <ul>
                                <label>Useful links</label>
                                <li>Help</li>
                                <li>Contact</li>
                                <li>Mobile Applications</li>
                            </ul>
                        </div>
                        <div className="footer-inner-nav-socials">
                            <div className="social">
                                <img src={fb} alt="Facebook"/>
                            </div>
                            <div className="social">
                                <img src={twitter} alt="Twitter"/>
                            </div>
                            <div className="social">
                                <img src={ig} alt="Instagram"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <span className="tradeMark">© 2023 Spotify</span>
                </div>
            </section>
        </footer>
    )
}