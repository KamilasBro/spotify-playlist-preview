import play from "../../images/playButton.png"
import heart from "../../images/heart.png"
import options from "../../images/moreOptions.png"
import data from "../../data/Data"
import playSong from "../../images/playSong.png"
import listArrow from "../../images/listArrow.png"
import React,{useState} from "react"
import "./playlist.css"
//we don't use useEffect as we don't fetch data from API
//instead we use local data file as it's preview version and we have only 8 songs as example
//however the whole program is coded around any number of songs
//so changing to real data would not cause any big problems
//we might only adapt code to data structure if needed which is not a big deal
export default function Playlist(){
    const [currentSong, setCurrentSong]=useState()//to determine current song
    const [isOptVis, setIsOptVis]=useState(false)// to determine is options list is visible
    const [currentOpt, setCurrentOpt]=useState()// to determine which button showed option list
    function handleChange(){//specifically for document event listener
        setIsOptVis(false)
        moreOpt()
        document.removeEventListener("click", handleChange, true)
    }
    function handleScroll(){//to hide option list on scroll
        setIsOptVis(false)
        moreOpt()
        document.removeEventListener("scroll", handleScroll, true)
    }
    function hidePlay(){//hide all play buttons
        for(let i=0;i<(data.length);i++){
            document.getElementById("indexBtn"+(i+1)).style.display="none"
            document.getElementById("indexNr"+(i+1)).style.display="block"
        }
    }
    function moreOpt(){//hide all option lists
        for(let i=0;i<(data.length);i++){
            document.getElementById("optionsList"+(i+1)).style.display="none"
        }
    }
    return(
        <section className="playlist" id="playlist">
            <div className="playlist-panel">
                <img src={play} alt="Play"/>
                <img src={heart} alt="Heart"/>
                <img src={options} alt="More Options"/>
            </div>
            <div className="playlist-items">
                {//most of conditional rendering is based on index of the element
                }
                {data.map((data,index)=>{
                    return(
                    <div
                        style={currentSong===(index+1)?{backgroundColor:"#444444"}:{}}
                        className="playlist-item"
                        key={index+1}
                        //hover effect that shows/hide playSong button
                        onMouseEnter={()=>{
                            document.getElementById("indexBtn"+(index+1)).style.display="block"
                            document.getElementById("indexNr"+(index+1)).style.display="none"
                        }}
                        onMouseLeave={()=>{
                            //checks if element is the current song and if not it hides play button
                            if(currentSong!==(index+1)){
                                document.getElementById("indexBtn"+(index+1)).style.display="none"
                                document.getElementById("indexNr"+(index+1)).style.display="block"
                            }
                        }}
                    >
                    <div className="playlist-item-content-wrap">
                        <div className={"playlist-item-index"+(index+1)}>
                            <span
                            //if current index is lower that 10 we add 0 before our index in DOM
                                className="indexNr" 
                                id={"indexNr"+(index+1)}>
                                {index+1<10?`0${index+1}`:index+1}
                            </span>
                            <img 
                                className="indexBtn" 
                                id={"indexBtn"+(index+1)} 
                                src={playSong}
                                alt="playSong"
                                //sets current song and shows button
                                onClick={()=>{
                                    hidePlay()
                                    setCurrentSong(index+1)
                                    document.getElementById("indexNr"+(index+1)).style.display="none"
                                    document.getElementById("indexBtn"+(index+1)).style.display="block"
                                }}
                            />
                        </div>
                        <img className="playlist-item-img" src={data.imgUrl} alt="Song"/>
                        <div className="playlist-item-names song-name">
                            <span className="text1">{data.albumName}</span>
                            <br/>
                            <span className="text2">{data.songName}</span>
                        </div>
                    </div>
                    <div className="playlist-item-content-wrap">
                        <div className="playlist-item-names song-artist">
                            <span className="text1">Artist</span>
                            <br/>
                            <span className="text2">{data.artist}</span>
                        </div>
                    </div>
                    <div className="playlist-item-content-wrap">
                        <div className="playlist-item-names song-time">
                            <span className="text1">Time</span>
                            <br/>
                            <span className="text2">{data.songLength}</span>
                        </div>
                    </div>
                    <div className="playlist-item-options">
                        <img src={heart} alt="Heart" className="favSong"/>
                        <img
                            id={"options"+(index+1)}
                            src={options} 
                            alt="More Options" 
                            className="options"
                            //when we hover the btn we 
                            //prevent document event listener in order to make this button work
                            onMouseEnter={()=>{
                                document.removeEventListener("click", handleChange, true)
                            }}
                            onMouseLeave={()=>{
                                document.addEventListener("click", handleChange, true)
                            }}
                            //we click the button and correct options list appear on screen
                            //then we make document click event and scroll event to hide option list adn set isOptVis to false
                            onClick={(event)=>{
                                if(isOptVis===true){
                                    if(currentOpt===event.target.id){//if we clicked the same btn again we moving back to starting state
                                        setIsOptVis(false)
                                        moreOpt()
                                    }else{//else it's working the same as we clicked/scroll first time
                                        setCurrentOpt(event.target.id)
                                        setIsOptVis(true)
                                        moreOpt()
                                        document.getElementById("optionsList"+(index+1)).style.display="block"
                                        document.addEventListener("scroll", handleScroll, true)
                                    }
                                }else{//if clicked/scroll first time we set isOptVis to true and show correct option list
                                    setCurrentOpt(event.target.id)
                                    setIsOptVis(true)
                                    moreOpt()
                                    document.getElementById("optionsList"+(index+1)).style.display="block"
                                    document.addEventListener("scroll", handleScroll, true)
                                }
                            }}
                        />
                    </div>
                    <ul 
                        className="optionsList" 
                        id={"optionsList"+(index+1)}
                        //on hover we disable document event listener to make list not disappear on clicking
                        onMouseEnter={()=>{
                            document.removeEventListener("click", handleChange, true)
                        }}
                        onMouseLeave={()=>{
                            document.addEventListener("click", handleChange, true)
                        }}
                    >
                        <li>Add to queue</li>                            
                        <hr/>
                        <li>Go to the track</li>
                        <li>Go to the artist</li>
                        <li>Go to album</li>
                        <li>Show content authors</li>
                        <hr/>
                        <li>Add to playlist</li>
                        <li>
                            Show content authors 
                            <img className="optionList-arrow" src={listArrow} alt="arrow"/>
                        </li>
                        <hr/>
                        <li>
                            Share 
                            <img className="optionList-arrow" src={listArrow} alt="arrow"/>
                        </li>
                    </ul>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}