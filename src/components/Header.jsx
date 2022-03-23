import React from 'react';
import { AppBar,Button,Tab,Tabs,Typography,Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return (
  <>
   <AppBar sx={{background:"#063970"}}>
       <Toolbar>
           <Typography>STEP BY STEP</Typography>

            <Tabs textColor='inherit'>
                <Tab label='Calzado Hombre'/>
                <Tab label='Calzado Mujer'/>
                <Tab label='Calzado Unisex'/>
                <Tab label='Contacto'/>
            </Tabs>
            <Button sx={{marginLeft:'auto'}} variant='contained'>Ingresar</Button>
            <Button sx={{marginLeft:'10px'}} variant='contained'>Registrarse</Button>

            <ShoppingCartIcon sx={{marginLeft:'3rem'}}/>
       </Toolbar>
   </AppBar>
  </>
  )
}
