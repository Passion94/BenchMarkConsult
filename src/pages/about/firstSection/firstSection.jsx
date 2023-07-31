import React from 'react'
import Founders from './founders/founderCard'
import { Summary } from './others/summary'
import { Box } from '@mui/material'

export const FirstSection = () => {
  return (
    <Box sx={{display:"flex", background:"rgba(51, 153, 255, 0.2)"}}>
      <Founders/>
      <Summary/>
    </Box>
  )
}
