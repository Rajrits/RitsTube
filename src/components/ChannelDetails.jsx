import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import{Videos,ChannelCard} from './'
import { FetchFromApi } from '../utils/FetchFromApi'
const ChannelDetails = () => {
  const [channelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([]);
  console.log(channelDetail,videos);
  const {id} = useParams();
  useEffect(()=>{
      FetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data)=>{setChannelDetail(data?.items[0])})
      FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>{setVideos(data?.items)})
},[id])
  return (
    <Box minHeight={"95vh"}>
     <Box>
      <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',zIndex:10,height :"300px"}}/>
      <ChannelCard channelDetails={channelDetail} marginTop = "-130px"/>
     </Box>
     <Box display="flex" p={"2"}>
      <Box sx = {{mr:{sm:"100px"}}}/>
      <Videos videos={videos}/>
     </Box>
    </Box>
  )
}

export default ChannelDetails
