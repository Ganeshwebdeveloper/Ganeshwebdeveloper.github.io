import { Box, Image, Tooltip, WrapItem } from "@chakra-ui/react"

 export const Skill = ({img,name}) => {


  return (
    <WrapItem key={name} >
        
        <Tooltip label={name} hasArrow placement="top" >
             <Box>
              <Image boxSize={{base:"40px",sm:"50px", md:"60px",lg:"80px"}} src={img} />
             </Box>
        </Tooltip>

    </WrapItem>
  )
}
