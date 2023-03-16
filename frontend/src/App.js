import { ThemeProvider } from '@mui/system';
import {Box,Button, Container, Typography} from '@mui/material';
import {useEffect} from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Slider from './components/promotions'
import Products from './components/products'
import Footer from './components/footer';


function App() {
  
  useEffect(() => {
    document.title ='Homepage';
  });
  
  return (
    <ThemeProvider theme={theme}>
    <Container 
      maxWidth='xl'
      sx={{
        background: "#fff",
      }}
    >
      <Slider />
      <Appbar/>
      <Banner/>
      
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Shop our Bestsellers</Typography>
            </Box>
      <Products/>
      <Box display="flex" justifyContent="center"  sx={{ p: 4   }}>
              <Button variant="h4" >View all products</Button>
            </Box>
      <Footer/>
      {
        /*
      
        promotions
        title
        products
        footer
        drawer
        */
      }
     
    </Container>

    </ThemeProvider>
 
      
 );
}

export default App;
