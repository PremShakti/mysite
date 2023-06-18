import React from 'react'
import '../App.css'
import {Box,SimpleGrid,Image,Text,Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import { useState } from 'react'
const Home = () => {
  const [mdatta,Setmdata]=useState([])
  const [spinner,Setspinner]=useState(false)

  useEffect(()=>{
    Setspinner(true)
 axios.get(`https://alldata.onrender.com/`)
 .then((da)=>{
  Setmdata(da.data)
  Setspinner(false)
})
.catch((error)=>console.log(error))
console.log(mdatta)
  },[])


  return (
    <>
     {spinner? <Box textAlign={"center"} mt={"20px"}> <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
 
/>  </Box> :  <div className='grid'>
         {mdatta?.map((e)=>(<Cards  {...e} />)) }
      </div>}
     
    </>
  )
}

export default Home
