import { styled } from '@mui/material/styles';
import {Box} from '@mui/system';
import { Typography, List} from '@mui/material';
import { Colors, DrawerWidth } from '../theme';
import '@fontsource/montez'
import { IconButton } from "@mui/material";

export const AppbarContainer = styled(Box)(() => ({
    
    display : 'flex',
    marginTop: 4,
    justifyContent:'center',
    alignItems : 'center',
    padding: '2px 8px',
    

}));

export const AppbarHeader = styled(Typography)(() => ({
    
    color: Colors.primary,
    fontFamily:'"Nunito Sans"',
    fontSize:'4em',
    flexGrow : 1,
    padding: '4px'

}));


export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
    
    
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,  
   
    
}));
  
export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}));


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: DrawerWidth,
    zIndex: 1999,      
  }));