import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { Colors } from "../../styles/theme";

export default function AppbarDesktop({matches}) {
  
    return (
       <AppbarContainer>
           <AppbarHeader>logo
           </AppbarHeader>
           <MyList type="row">
              
               <ListItemText primary="Brands"/>
               <ListItemText primary="Categories"/>
               <ListItemText primary="Contact us"/>
               <ListItemText primary="About Us"/>
               <ListItemButton>
                   <ListItemIcon    
                        sx={{
                        color: Colors.dark,
                    }}>
                       <SearchIcon />
                   </ListItemIcon>
               </ListItemButton>
           </MyList>
           <Actions matches={matches}/>
       </AppbarContainer>
    );
}