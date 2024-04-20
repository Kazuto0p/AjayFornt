import { Box, Button, CardHeader, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div style={{marginTop:"60px"}}>
       <Box style={{marginTop:"100px",marginLeft:'550px'}}
      height={350}
      width={300}
      my={4}
      display="drop"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '10px solid black' }}
    >
     <br></br><br></br>
    
      <Typography variant="h4"> Login Page</Typography><br></br>
      <TextField label="Username" variant='outlined'/><br></br><br></br>
      <TextField label="Enter password" type='password' variant='outlined'/><br></br><br></br>
      
        <Button variant='contained' color='secondary'> <Link to='/Cards'style={{textDecoration:"none",color:"white"}}>Login</Link></Button><br></br><br></br>
        </Box>
    </div>
  )
}

export default Login