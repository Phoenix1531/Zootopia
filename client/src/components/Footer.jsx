import React from 'react'

const Footer = () => {

    return (
        <div style={{ position: "relative", bottom: "0",display:"flex",width:"100%",height:"30%",alignItems:"center",justifyContent:"space-around",color:"white",padding:"2vmax",backgroundImage:"linear-gradient(to bottom right,#343B84,#5151C6)",borderRadius:"30px 30px 0 0 "}}>
            <div style={{display:"flex",flexDirection:"column",gap:"2vmax",width:"30%"}}>
                <h1>About us</h1>
                <p>Welcome to our virtual zoo, where imagination meets the wild! Explore the wonders of the animal kingdom from the comfort of your screen.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"2vmax"}}>
                <h1>Contact Me</h1>
                <p>Arjun15310@gmail.com</p>
                <p>+91 7670937152</p>
            </div>
        </div>
    )
}

export default Footer