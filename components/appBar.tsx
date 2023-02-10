import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import {AppBar as AppBarTitle} from '@mui/material';
import styles from '@/styles/Home.module.css'
export default function AppBar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBarTitle position="static">
        <Toolbar  style={{background:"black"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" fontFamily={'monospace'} sx={{ flexGrow: 1 }}>
            Cali - Colombia
          </Typography>
        
        </Toolbar>
      </AppBarTitle>
    </Box>
  )
}
