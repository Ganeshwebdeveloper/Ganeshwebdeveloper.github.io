
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Image,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Spacer,
} from '@chakra-ui/react';
import gk from "../Images/gk.png"
import Typed from "react-typed";
import { MobileMenu } from './mobileOptions';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  return (
    <>
      <Box>

        <Flex  h={["70px","80px","90px"]} w={{base:"100%",sm:"100%",md:"100%",lg:"70%"}}
         background={"rgba(42,43,56,.6)"} paddingX={{sm:"30px",md:"40px",lg:"50px"}} border={{base:"none",sm:"none",md:"none",lg:".25rem solid #2a2b37"}} borderBottom=".25rem solid #2a2b37" backdropFilter={"blur(20px)"} borderRadius={{base:"0",sm:"0",md:"0",lg:"40px"}} zIndex={"5"} pos="fixed" mt={{base:"0",sm:"0",md:"0",lg:"30px"}} left={{base:"0",sm:"0",md:"0",lg:"15%"}} alignItems="center">

        <Box alignItems="center"  >
          <Image src={gk} w={["60px","75px"]} h={["55px","70px"]} borderRadius="50%" />
       </Box>
   
       <Box ml="5%" alignItems="center" textAlign="left" >
        <Box fontSize={{sm:"20px",md:"sm",lg:"lg"}} fontWeight={"700"} >
             <Typed strings={["FRONTEND DEVELOPER","BACKEND DEVELOPER",'FULLSTACK DEVELOPER']} typeSpeed={50} />
          </Box>
             <Text fontSize={"md"} fontWeight="600" color={'blue.500'}  > PortFolio</Text>
          </Box>
          
          <Spacer />

          <Box display={{base:"flex",sm:"flex",md:"none"}} >
            <MobileMenu />
          </Box>
          
          <Flex   alignItems={'center'} display={{base:"none",sm:"none",md:"flex"}}  w={{base:"0",sm:"0",md:"50%",lg:"40%"}} >
           
              <Box className='link' fw="700"  _hover={{color:'blue.500',fontWeight:"700",textDecoration:"underline",cursor:"pointer"}} >
                About
              </Box>
              <Spacer/>
              <Box className='link'   _hover={{color:'blue.500',fontWeight:"700",textDecoration:"underline",cursor:"pointer"}} >
                <Link href='#projects' >Projects</Link>
              </Box>
              <Spacer />
              <Box className='link'   _hover={{color:'blue.500',fontWeight:"700",textDecoration:"underline",cursor:"pointer"}}  >
                Contact me
              </Box>
              <Spacer/>
             <Box>
             <Button onClick={toggleColorMode}>
                {/* {colorMode === 'light' ? <MoonIcon /> : <SunIcon />} */}
              </Button>
             </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}