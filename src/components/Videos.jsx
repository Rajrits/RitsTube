import React from 'react'
import { Stack,Box } from '@mui/material'

import {VideoCard,ChannelCard} from './'
const Videos = ({videos,direction}) => {
   if(!videos?.length) return "loading.."
  return (
    <div>
      <Stack direction={direction||"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
        {videos.map((item,indx)=>(
            <Box key={indx}>
                {item.id.videoId && <VideoCard video = {item}/>}
                {item.id.channelId && <ChannelCard channelDetails = {item}/>}
            </Box>
        ))}

      </Stack>
    </div>
  )
}

export default Videos
