import React from 'react';
import './footer.css';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function Footer() {
    return (
      <footer className="footer">
        <Container fixed sx={{ mt: 3 }}>
        <Stack direction="column"
               justifyContent="space-around"
               alignItems="center"
               spacing={0}>
        <a>This is a footer</a>
        <p>Our footer is somewhat of a blog itself, you know. Ok now I'm getting lazy to write anything slightly interesting, so get the lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Stack>
          
        
           
        </Container>
        </footer>
    );
  }
  
  export default Footer;