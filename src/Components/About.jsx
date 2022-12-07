import { Box, Card,Text,useColorModeValue, CardBody, CardHeader, Heading, CardFooter,Link } from "@chakra-ui/react"

export const About = ()=>{

  return (
    <Card borderWidth="1px"
    borderRadius="lg"
    w={{ sm: '100%', md: '750px', lg:"70%" }}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    padding={4} m="auto" variant={"elivated"} >

  <CardBody>
      <Box>
        <Heading size='lg' >
          I'm Ganesh Kumar
        </Heading>
        <Text px={["3"]} p={["","5","5","10"]} color={useColorModeValue("black","grey.300")} fontSize={["sm","sm",'lg']}>
        An Aspiring Full Stack Web developer who has an
immense interest in web development with knowledge of
Frontend, APIs, and Backend technologies. Learned the
MERN stack, and seeking to further improve my web
development skills as the future lead developer.
        </Text>
      </Box>
  </CardBody>
  <CardFooter mt={"-40px"} mb="30px" justifyContent={"center"} >
     <Link color='blue.500' href="mailto:kganesh011995@gmail.com" target={"blank"} ><Text color={"blue.400"} textDecorationColor={"blue.400"} >kganesh011995@gmail.com</Text></Link>
  </CardFooter>
</Card>
  )
}