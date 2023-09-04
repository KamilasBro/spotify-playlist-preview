import arrow from "../../images/arrow.png"
import avatar from "../../images/avatar.png"
import play from "../../images/playButton.png"
import React,{useState} from "react"
import "./navbar.css"
export default function Navbar(){
    const [Ypos, setYPos]=useState(false)
    document.addEventListener("scroll", ()=>{
        if(window.pageYOffset>=document.getElementById("playlist").offsetTop){
            setYPos(true)
        }else{
            setYPos(false)
        }
    })
    const [hover, setHover]=useState(false)//to determine when profile info should display
    return(
        <nav style={Ypos===true?
            {backgroundColor: "black"}
            :
            {backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <div className="navbar-arrows">
                <img src={arrow} alt="arrow-left" className="navbar-arrow-left navArrow"/>
                <img src={arrow} alt="arrow-right" className="navbar-arrow-right navArrow"/>
            </div>
            <div 
                className="navbar-playlist-panel" 
                style={Ypos===true?
                {display: "flex"}
                :
                {display: "none"}}>
                <img src={play} alt="playlist-button" className="navbar-playlist-button"/>
                Top songs of the world
                </div>
            <div className="navbar-avatar-wrap" onMouseLeave={()=>{setHover(false)}}>
                <div className="navbar-avatar" onMouseEnter={()=>{setHover(true)}}>
                    <img src={avatar} alt="avatar-img" className="navbar-avatar-img"/>
                    <p className="navbar-avatar-name">Julita Gomez</p>
                </div>
                {//if hover is true we change class to display profile info
                }
                <div className={hover===true?"navbar-avatar-hovered":"navbar-avatar-nonhover"}>
                    Julita Gomez
                </div>
            </div>
        </nav>
    )
}