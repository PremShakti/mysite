import React from 'react'
import {Text,Box} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <>
    <Box display={'flex'} alignItems={'center'} justifyContent={"center"} h={"60px"}bg={"#3c11ff"} >
     <Text fontWeight={"bold"} color={"white"} fontStyle={"25px"}  >Movie Adda</Text> 
    </Box>
      
    </>
  )
}

export default Navbar
