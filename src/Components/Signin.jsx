import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
    <div style={{marginTop:"70px" }}>
     <Box style={{marginTop:"100px",marginLeft:'520px'}}
      height={600}
      width={300}
      my={4}
      display="drop"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '10px solid black' }}
    >
     <br></br><br></br>
        <Typography variant='h3'>Signin</Typography><br></br><br></br>
     <TextField label="First name" variant='outlined'/><br></br><br></br>
     <TextField label="Last name" variant='outlined'/><br></br><br></br>
     <TextField label="Email id" variant='outlined'/><br></br><br></br>
     <TextField label="Password" type='password' variant='outlined'/><br></br><br></br>
     <TextField label="Conform password" variant='outlined'/><br></br><br></br><br></br>

    <Button variant='contained' color='success'><Link to='/Cards'style={{textDecoration:"none",color:"white"}}>Sign Up</Link></Button>
</Box>
    </div>
  )
}

export default Signin