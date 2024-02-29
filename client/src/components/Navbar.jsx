import { Button } from '@chakra-ui/button'
import { CloseButton } from '@chakra-ui/close-button'
import { Icon } from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import Logo from '../assets/logo.png'
import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AppContext } from '../context/ParentContext'

const Navbar = () => {
    const { signin, setSignin } = useContext(AppContext)
    return (
        <div style={{ position: "relative", top: "0", display: "flex", width: "100%", height: "10%", alignItems: "center", color: "#343B84", justifyContent: "space-between", padding: "2vmax 14vmax",borderRadius:"50px",backgroundColor:"white",borderRadius:"0 0 30px 30px"}}>
            <Link style={{textDecoration:"none",color:"inherit"}} to={"/"}>
                <h1 >ZOOTOPIA</h1>
            </Link>
            <Button style={{ width: "8vmax", height: "2.5vmax",borderRadius:"20px",backgroundColor:"#343B84",color:"white"}}>
                <h2>Signup</h2>
            </Button>
        </div>
    );
};

export default Navbar;