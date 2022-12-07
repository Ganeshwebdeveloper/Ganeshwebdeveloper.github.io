
import './App.css';
import { Navbar } from './Components/Navbar';
import Nav from './Components/Nav';
import { useState } from 'react';
import { Box,Text,Stack,Image,Spacer, Button, Flex, Link,useColorModeValue, Heading,Wrap, HStack } from '@chakra-ui/react';
import { Projects } from './Components/Projects';
import { About } from './Components/About';
import {Skill }  from './Components/Skills';
import { Contact } from './Components/Contact';
import { FaHeart,FaSmile } from 'react-icons/fa';
function App() {

  var arr = [
    {
      img : "Booking.com.jpg",title : "Clone of Booking.com",about : "Booking.com is a Dutch online travel agency for lodging reservations & other travel products.", techStack : ["html","css","javascript","Postman API"],netlifyLink:"https://frolicking-elf-dd1919.netlify.app/",gitLink:"https://github.com/gaurav7ingh/Booking.com"
    }, {
      img : "kfcscreenshot-2.jpg",title : "Clone of KFC",about : "The KFC website is an online food ordering and delivery platform from your nearby Restaurants.", techStack : ["html","css","javascript"],netlifyLink:"https://ganesh-onlinekfc.netlify.app/",gitLink:"https://github.com/anuragg0107/busy-channel-5933"
    }
  ]

  const skillsArr = [
    { img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name : "HTML"  }, {
      img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name : "CSS"
    }, {
      img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" ,name : "JavaScript"
    }, {
      img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" ,name : "BootStrap"
    }, {
      img :"https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" , name : "React"
    } , {
      img :"https://www.svgrepo.com/show/303557/redux-logo.svg" , name : "Redux"
    }, {
      img : "https://avatars.githubusercontent.com/u/54212428?s=280&v=4" , name : "Chakra UI"
    }, {
      img : "https://ankurm.com/wp-content/uploads/2013/06/Git-Logo.jpg" , name : "Git"
    }
  ]

  return (
    <Box className="App" bg={useColorModeValue("#ECF0F1","10101a")} color={useColorModeValue("black","white")} >   
     <Box pb={"50px"} >
     <Nav />
     </Box>
     
        <Box className='home' w={{sm:"90%",md:"70%",lg:"60%"}} m="auto" pt={["20px","30px","60px"]} >
             
             <Stack w={"100%"} direction={{base:"column",sm:"column",md:"row",lg:"row"}} fontWeight="700" mt="80px" >
              <Box mt={{base:"-50px",sm:"",md:"40px",lg:"50px"}} w={["70%","70%","50%","90%"]} m={["auto","none"]} >
              <Text fontSize={["13px","lg"]} align="left" >HI, THIS IS</Text>
                <Text color='blue.500' fontSize={{base:"2xl",sm:"3xl",md:"4xl",lg:"5xl"}} m={["0px","0px","-10px"]} >GANESH KUMAR</Text>
                <Text align="left" fontSize={["12px","lg"]} >I AM A FULL STACK WEBDEVELOPER  </Text>

               <Flex w={["100%","100%","100%","70%"]} m={"auto"} mt={["20px","30px","40px"]}>
                <Link color='blue.500' h="40px" w="40%" href="mailto:kganesh011995@gmail.com" isExternal ><Button  h="40px" w="100%"  background={"rgba(42,43,56,.2)"} paddingX={{sm:"30px",md:"40px",lg:"50px"}} border={{base:"none",sm:"none",md:"none",lg:".15rem solid #2a2b37"}} borderBottom=".25rem solid #2a2b37"  _hover={{background:"rgba(42,43,56,.9)"}} backdropFilter={"blur(20px)"} >Get In Touch</Button></Link>
               <Spacer/>
               <Link color='blue.500' h="40px" target={"_blank"} w="40%"  href="https://drive.google.com/file/d/1quHN3On1pOT_FTetIwSS-FcVrgkudJVx/view?usp=share_link" isExternal >
                <Button h="40px" w="100%" background={"rgba(42,43,56,.2)"} paddingX={{sm:"30px",md:"40px",lg:"50px"}} border={{base:"none",sm:"none",md:"none",lg:".15rem solid #2a2b37"}}  _hover={{background:"rgba(42,43,56,.9)"}} borderBottom=".25rem solid #2a2b37" textDecorationColor={'blue.500'} backdropFilter={"blur(20px)"}  >Resume</Button></Link>
                </Flex>
              </Box>
                      <Spacer/>
             
                     <Box w={["70%","70%","60%","60%"]} margin={["auto"]} pl={["20%","20%","0px","0px"]} > 
                <Image w="100%" src="pngItem_1.png" />
              </Box>
             </Stack>

        </Box>

        <Box className='about' mt={"100px"} >
        <Heading marginLeft={{base:"20px",sm:"30px",md:"15%"}} mb={{base:"10px",sm:"15px",md:"30px",lg:"50px"}} size='lg' textAlign={"left"} color="blue.500" >About Me:</Heading>
            <About/>
        </Box>

        <Box className='skills' mt={"100px"} >
        <Heading marginLeft={{base:"20px",sm:"30px",md:"15%"}} mb={{base:"10px",sm:"15px",md:"30px",lg:"50px"}} size='lg' textAlign={"left"} color="blue.500" >Skills:</Heading>
           <Wrap borderWidth="1px"
    borderRadius="lg"
    w={{ sm: '100%', md: '750px', lg:"70%" }}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    padding={10} m="auto" spacing={"35px"} >
           { skillsArr.map((el) => {
              return <Skill {...el} />
           }) }
           </Wrap>
        </Box>

        <Box className='projects' mt={"100px"}>
        <Heading marginLeft={{base:"20px",sm:"30px",md:"15%"}} mb={{base:"10px",sm:"15px",md:"30px",lg:"50px"}} size='lg' textAlign={"left"} color="blue.500" >Projects:</Heading>
             
           {arr.map((el)=>{
            return <Projects {...el} />
           })}
        </Box>

        <Box className='contact' mt={"100px"} pb="100px"  >
        <Heading marginLeft={{base:"20px",sm:"30px",md:"15%"}} my="50px" size='lg' textAlign={"left"} color="blue.500" >Contact me:</Heading>

        <Contact />

        </Box>
       <HStack marginLeft={"75%"} color={"skyblue"} pb={"100px"} >
       <FaHeart color='red' />  <Text>Made by Ganesh  </Text><FaSmile color='white' />
       </HStack>
    </Box>
  );
}

export default App;
