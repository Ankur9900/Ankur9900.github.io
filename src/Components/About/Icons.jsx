import React from 'react'
import styles from "./Home.module.css"

import { IconButton, Link } from "@chakra-ui/react"
import { FaGithub,FaLinkedin} from "react-icons/fa"
const Icons = () => {
  return (
    <>

    <Link href="https://github.com/Ankur9900" isExternal>
       <IconButton  _focus={{outline:"none"}} size='lg'  icon={<FaGithub/>} />   
    </Link>
  <Link href="https://www.linkedin.com/in/ankur-kumar-chauhan-6793601a4/" isExternal>
   <IconButton size='lg' _focus={{outline:"none"}}   icon={<FaLinkedin/>} />  
  </Link>
           
    
    </>
  )
}

export default Icons