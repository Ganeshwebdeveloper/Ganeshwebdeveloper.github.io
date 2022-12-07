
  import {
    Badge,
    Button,
    Center,
    color,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
  } from '@chakra-ui/react';


export const Projects = ({img,title,about,gitLink,netlifyLink,techStack})=>{
    
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode)

    return (
      <Center py={6} key={title} >
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '750px', lg:"70%" }}
          height={{ sm: '476px', md: '20rem' ,lg:"400px" }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1}  w="65%" borderRadius={"6px"} >
            <Image ml={{base:"30%",sm:"30%",md:"0%"}}
              objectFit="cover"
              boxSize="100%"
              blur={"2px"}  filter="auto"
              brightness="70%"
              _hover={{padding:"0.5%", brightness:"100%" }}
              src={
                img
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {title}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
             {about}
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>

              {techStack.map((el)=>{
                return (<Badge key={el}
                px={2}
                py={1}
                bg={(colorMode=="dark") ? 'gray.800' : 'gray.200'}
                fontWeight={'400'}>
                #{el}
              </Badge>)
              })}         

            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
               <Link target={"_blank"} href={gitLink}> GitHub Link </Link>
              </Button>  
             
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                <Link target={"_blank"} href={netlifyLink}> Deployed Link
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }
