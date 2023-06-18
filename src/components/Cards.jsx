
      import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Cards = ({img,title,video}) => {
console.log(img,title)

  return (
    <Box overflow={"hidden"} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} borderRadius={"10px"} pb={"10px"}>
        <a href={video}> <Image w={"100%"} src={img} />
      <Text fontSize={"sm"} fontWeight={"bold"} w={"95%"} display={'block'} m={"auto"} mt={"8px"} textAlign={"center"} >{title}</Text></a>
     
    </Box>
  )
}

export default Cards
