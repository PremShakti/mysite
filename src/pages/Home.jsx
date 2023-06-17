import React from 'react'
import '../App.css'
import {Box,SimpleGrid,Image,Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import { useState } from 'react'
const Home = () => {
  const [mdatta,Setmdata]=useState([])

  useEffect(()=>{

 axios.get(`https://alldata.onrender.com/`)
 .then((da)=>Setmdata(da.data))
.catch((error)=>console.log(error))
console.log(mdatta)
  },[])


  return (
    <>
  
      <div className='grid'>
         {mdatta?.map((e)=>(<Cards  {...e} />)) }


    
      </div>
    </>
  )
}

export default Home
