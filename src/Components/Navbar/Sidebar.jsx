import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    
    Box,
    Flex,
    Text,
    IconButton,
    
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from "./Sidebar.module.css";





export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button size={"sm"} m='auto' right={3} onClick={onOpen}>
                <HamburgerIcon boxSize={4} />
            </Button>
            <Drawer
                width="100%"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}


            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader backgroundColor='black' textDecoration='underline'>
                        <Flex gap={2}>
                            <span>
                                <Text color={'teal'}>WEB</Text>
                            </span>

                            <Flex>
                                <span>
                                    <Text color={'yellow'}>DEV</Text>
                                </span>
                                <span>
                                    <Text color={'blue'}>ELOPER</Text>
                                </span>
                            </Flex>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody bg='blackAlpha.200'>
                        <Box>
                            <Box ><Text className={styles.text}  cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='Navbar' spy={true} smooth={true}>Home</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='aboutme' spy={true} smooth={true}>About-Me</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='skills' spy={true} smooth={true}>Skills</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='project' spy={true} smooth={true}>Project</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='contact' spy={true} smooth={true}>CONTACT ME</Link></Text></Box>

                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                    <Flex columnGap={11} justifyContent="space-around">
                    <a href={"/"} download style={{textDecoration:"none"}}>
            <Button size='lg' colorScheme='teal' _focus={{outline:"none"}} >Resume</Button>
            </a>
                            <a href="arya.ankur99@gmail.com">

                            <IconButton size='lg' colorScheme='teal' _focus={{ outline: "none" }} icon={<EmailIcon/>} />

                            </a>

                            
                            <a href='https://github.com/Ankur9900'  target="_blank">
                                <IconButton size='lg' colorScheme='teal' _focus={{outline:"none"}} icon={<FaGithub />} />
                            </a>

                            <a href='https://www.linkedin.com/in/ankur-kumar-chauhan-6793601a4/'  target="_blank"><IconButton size='lg' _focus={{outline:"none"}} colorScheme='teal' icon={<FaLinkedin />} /></a>
                            </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}