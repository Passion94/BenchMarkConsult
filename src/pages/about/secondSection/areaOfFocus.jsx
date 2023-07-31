import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const AreaOfFocus = () => {
  return (
    <div>
        <Box>
        <AccountBalanceIcon fontSize="large"/>
        <Typography variant="body1"s>
        Your Text Here
      </Typography>
        </Box>
      
         {/* <CardMedia
        sx={{ borderRadius: '6px', marginTop:"200px" }}
        component="img"
        alt="learn"
        height="200px"
        width="300px"
        flexWrap="wrap"
        image="https://guardian.ng/wp-content/uploads/2021/09/office-space.jpg"
      /> */}
    </div>
  )
}
