
      import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Cards = ({img,title,video}) => {
console.log(img,title)

  return (
    <Box overflow={"hidden"}>
        <a href={video}> <Image w={"100%"} src={img} />
      <Text>{title}</Text></a>
     
    </Box>
  )
}

export default Cards
