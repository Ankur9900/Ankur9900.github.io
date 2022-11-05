import React from 'react'
import styles from "./Home.module.css"
import {Box, Button, Hide, Show, SimpleGrid, Text} from "@chakra-ui/react"

import Typical from "react-typical"

import Resume from "../About/Extra/Ankur_Chauhan_Resume.pdf"
import mypic from "./Extra/mypic.jpg"
import {motion} from "framer-motion"
import { Link } from 'react-scroll'
import Icons from './Icons'
const About = () => {
  return (
    <>
   
 
    <SimpleGrid columns={[1,1,1,2]} name='Navbar' mb={'5%'} className={styles.intro}>
    <Show below='lg'>

<Box mt={'10%'}>
<motion.div   whileHover={{scale:1.1}} className={styles.right}>
<img className={styles.my_img} src={mypic} alt="my_Image" />
</motion.div>
</Box>
</Show>

        <Box className={styles.left}>
            <div className={styles.name}>
            <div className={styles.icons}>
             <Icons/>
            </div>



                <Text fontWeight='bold' fontSize='2rem' color={'#06b6d4 '}> Hello,I am Ankur Kumar Chauhan</Text>
                <Hide below='md'>
                      <Text fontWeight='normal' fontSize='2.5rem' color={'yellow'} className={styles.typical}>
                    <h1>
                            <Typical
                            loop={Infinity}
                          
                            steps={[
                                "A FRONTEND Web Developer",
                                1500,
                                "A MERN Stack Developer",
                                1500,
                             
                            ]
                            }
                            />
                        </h1>
                </Text>
                </Hide>
              
              
            </div>
            <div className={styles.hire}>
           
             <Link to="contact" spy={true} smooth={true}>
               
                <Button _focus={{outline:"none"}}  className={styles.hire_btn} width={"130%"} textColor={"black"} backgroundColor={'aqua'}>Hire</Button>
      
                
        </Link>

            <a href={Resume} download style={{textDecoration:"none"}}>
            <Button _focus={{outline:"none"}}   width={"130%"} textColor={"black"} backgroundColor={'aqua'}>Resume</Button>
            </a>
            </div>
            
        </Box>
        <Hide below='lg'>

             <Box>
            <motion.div   whileHover={{scale:1.1}} className={styles.right}>
           <img className={styles.my_img} src={mypic} alt="my_Image" />
        </motion.div>
        </Box>
        </Hide>
       
        

    </SimpleGrid >

    </>
  )
}

export default About;