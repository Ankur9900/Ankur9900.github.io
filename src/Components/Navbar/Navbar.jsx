import React from 'react'
import styles from "./Nav.module.css"
import {
    Box, Button, Flex, IconButton, Text, useColorMode,
    Hide,
    Show,
} from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa"
import { Link } from "react-scroll"
import Sidebar from './Sidebar'
 import Resume from "../About/Extra/Ankur_Chauhan_Resume.pdf"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"
    return (
        <>

            <Box  className={styles.main}>
                <Box className={styles.left}>
                    <Box className={styles.name}>
                        <Flex>
                            <span>
                                <Link to='Navbar'   spy={true} smooth={true}>
                                 <Text  cursor= "pointer"  color={'yellow'}>ANKUR</Text>
                                </Link>
                               
                            </span>
                            <span>
                            <Link to='Navbar'  spy={true} smooth={true}>
                                <Text   cursor= "pointer" color={'#075985 '}>KUMAR</Text>
                                </Link>
                                
                            </span>
                        </Flex>


                    </Box>


                </Box>





                <Box  className={styles.right}>
                    <Hide below='md'>
       <Box className={styles.list}>
                        <ul>
                            <li>
                                <Link activeClass='active' to="Navbar" offset={-55} spy={true} smooth={true}>
                                    Home
                                </Link>


                            </li>
                            <li>
                                <Link to="aboutme"  spy={true} smooth={true} offset={-50} >
                                    AboutMe
                                </Link>


                            </li>
                            <li>
                                <Link to="Skills" spy={true} offset={-50} smooth={true}>
                                    Skills
                                </Link>


                            </li>
                            <li>
                                <Link to="project" offset={-175} spy={true} smooth={true}>
                                    Project
                                </Link>


                            </li>

                        </ul>
                    </Box>
                    </Hide>
             
                    <Hide below='sm' >
                        <Link to="contact" spy={true} smooth={true}>
                        <Button size={'sm'} mt={2} outline='none' _focus={{outline:"none"}}>CONTACT ME</Button>
                    </Link>
                    </Hide>
                    <Hide below='sm' >
                    <a href={Resume} download style={{textDecoration:"none"}}>
            <Button size={'sm'} mt={2} outline='none' _focus={{outline:"none"}}>Resume</Button>
            </a>
                    </Hide>
                    
                    <IconButton _focus={{outline:"none"}} size='sm' m={2} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />} />

{/* ----------------------------------------------------------------------------------------- */}

<Show below='md'>
<Sidebar/>
</Show>


                </Box>

            </Box>


        </>
    )
}

export default Navbar