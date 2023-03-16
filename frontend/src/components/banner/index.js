import { Typography,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";




export default function Banner(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer>
            <BannerImage src="/images/banner/banner2.jpg"/>
            <BannerContent>
                <Typography variant="h5">Lorem ipsum</Typography>  
                <BannerTitle variant="h2">dolor</BannerTitle>
                <BannerDescription variant="subtitle">
                Lorem ipsum dvoluptate velit esse cillum <br></br>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </BannerDescription>
                <BannerShopButton color="primary">Shop</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}