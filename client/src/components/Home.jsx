import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import arrow from "../assets/arrow.svg"
import fauna from "../assets/fauna.svg"
import flora from "../assets/flora.svg"
const Home = () => {
    return (
        <div style={{ width: "100%", minHeight: "150vh", padding: "2vmax", display: "flex", flexDirection: "column",gap:"3vmax" }}>
            <div style={{ height: "40vmax", display: "flex" }}>
                <img src="https://img.freepik.com/free-photo/cover-history-earth-animated-nature-1820-by-oliver-goldsmith_53876-65231.jpg?t=st=1709230792~exp=1709234392~hmac=66f5fe3387215a738b722b2f19dfc7783ecded0171a56c93e105f543095b2857&w=740" alt="" width={"100%"} height={"100%"} style={{ borderRadius: "40px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2vw", textAlign: "center", width: "90vw", justifyContent: "center", padding: "2vmax 3vmax" }}>
                    <h1 style={{ fontSize: "2.5vmax" }}>WELCOME TO ZOOTOPIA</h1>
                    <p style={{ fontSize: "1.3vmax" }}>Immerse yourself in an unparalleled digital safari experience with Virtual Zoo, offering stunning visuals, informative exhibits, and interactive features that bring the magic of the animal kingdom right to your fingertips. Discover, learn, and connect with wildlife like never before!</p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column",textAlign:"center" }}>
                <h1>EXPLORE</h1>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",gap:"10vmax",padding:"2vmax 15vmax" }}>
                    <div style={{display:"flex",flexDirection:"column",gap:"2vmax",alignItems:"center"}}>
                        <p style={{fontSize:"1.3vmax"}}>Easily navigate through different animal categories, from household pets to awe-inspiring wildlife, ensuring a well-organized and user-friendly experience.</p>
                        <img src={arrow} alt="" width={"30%"} />
                        <img src={fauna} alt="" width={"80%"} height={"50%"} />
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:"2vmax",alignItems:"center"}}>
                        <p style={{fontSize:"1.3vmax"}}>Explore realistic depictions of various biomes, from lush rainforests to icy tundras, and learn about the unique ecosystems that define each environment.</p>
                        <img src={arrow} alt="" width={"30%"} style={{ transform: "scaleX(-1)" }} />
                        <img src={flora} alt="" width={"80%"} height={"50%"} style={{borderRadius:"30px"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home