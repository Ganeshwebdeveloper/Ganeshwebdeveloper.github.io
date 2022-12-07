import { PhoneIcon,EmailIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Box, Flex, Button, Heading, Image, Spacer, useColorModeValue,Stack, Text, HStack,Link } from "@chakra-ui/react"

import ganesh1 from "../Images/ganesh1.jpg"

export const Contact = () => {

  return (
    <Flex borderWidth="1px"
    borderRadius="lg" direction={["column","column","row","row"]}
    w={{ sm: '100%', md: '750px', lg:"70%" }}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    padding={4} m="auto" gap={"40px"} >

    <Box w="45%" ml={["30%","30%","0"]} >
      <Image src={ganesh1} />
    </Box>

    <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2} gap="10px" >
  
     <Text fontSize={{base:"md",sm:"lg",md:"2xl",lg:"3xl"}} mb="20px" textDecoration="2px solid underline" fontWeight="600" >Ganesh Kumar</Text>

     <Button leftIcon={<PhoneIcon />} colorScheme={"blue"} variant='solid'>
    +91 9182309552
  </Button>

    <Link _hover={{textDecoration:"none"}} target="_blank" href="mailto:kganesh011995@gmail.com"> <Button leftIcon={<EmailIcon />} colorScheme='blue' variant='solid'>
    kganesh011995@gmail.com
  </Button> </Link>

 <HStack gap={"20px"} >
 <Link  _hover={{textDecoration:"none"}} target="_blank"  href="https://github.com/Ganeshwebdeveloper/"> <Button leftIcon={<FaLinkedin />} colorScheme='blue' variant='solid'>
    Github
  </Button> </Link>
  <Link  _hover={{textDecoration:"none"}} target="_blank" href="https://www.linkedin.com/in/kganeshwebdeveloper/"> <Button leftIcon={<FaGithub />} colorScheme='blue' variant='solid'> 
    Linkedin
  </Button>     </Link>
 </HStack>

  </Stack>
    </Flex>
  )
}