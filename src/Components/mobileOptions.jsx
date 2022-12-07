import { Menu,MenuButton,MenuItem ,MenuList,IconButton} from "@chakra-ui/react"

import { HamburgerIcon } from "@chakra-ui/icons"


function MobileMenu(){


  return (
  <Menu>
    <MenuButton as={IconButton} colorScheme="yellow" icon={<HamburgerIcon/> } >
    </MenuButton>
    <MenuList>
        <MenuItem  fw="700"  _hover={{color:"goldenrod",fw:"700",textDecoration:"underline",cursor:"pointer"}} >About</MenuItem>
        <MenuItem  fw="700"  _hover={{color:"goldenrod",fw:"700",textDecoration:"underline",cursor:"pointer"}} >Projects </MenuItem>
  
        <MenuItem  fw="700"  _hover={{color:"goldenrod",fw:"700",textDecoration:"underline",cursor:"pointer"}} >Contact Me</MenuItem>
    
    </MenuList>
  </Menu>
  )
}


export {MobileMenu}