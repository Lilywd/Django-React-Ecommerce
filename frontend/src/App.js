import { ThemeProvider } from '@mui/system';
import {Box,Button, Container, Typography} from '@mui/material';
import {useEffect} from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Slider from './components/promotions'
import Products from './components/products'
import Footer from './components/footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import AppDrawer from './components/drawer';
import { UIProvider } from "./context/ui";
import SearchBox from "./components/search";


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
      <UIProvider>
      <Slider />
      <Appbar/>
      <Banner/>
      
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Shop our Bestsellers</Typography>
            </Box>
      <Products/>
      <Box display="flex" justifyContent="center"  sx={{ p: 4   }}>
              <Button   sx={{ mt: 4, mb: 4 }}
              variant="contained" >View all products</Button>
      </Box>
      
      <Footer/>
      <AppDrawer/>
      <SearchBox />
      </UIProvider>
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

