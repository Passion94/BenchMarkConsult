import React from 'react'
import Founders from './founders/founderCard'
import { Summary } from './others/summary'
import { Box } from '@mui/material'

export const FirstSection = () => {
  return (
    <Box sx={{display:{xs:"row", sm:"row", md:"flex"}}}>
      <Founders/>
      <Summary/>
    </Box>
  )
}
