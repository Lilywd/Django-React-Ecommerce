import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Box } from "@mui/system";
import {useEffect, useRef, useState } from "react";
import { Slide } from "@mui/material";



const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    
];

export default function Slider() {
    const containerRef = useRef();
    const [show, setShow] = useState(true);
    const [messageIndex,setMessageIndex]= useState(0)

    useEffect(() => {
        setTimeout(() => {setShow(false);}, 3000);
    
    const intervalId = setInterval(() => {
        // get next message
        setMessageIndex((i) => (i + 1) % messages.length);

        // slide the message in
        setShow(true);

        setTimeout(() => {setShow(false);}, 3000);
    }, 4000);

    return () => {clearInterval(intervalId);
    };
}, []);

    return (
        <PromotionsContainer>
            <Slide 
                 direction={show ? "left" : "right"}
                 in={show}
                 container={containerRef.current}
                 timeout={{
                   enter: 50,
                   exit: 50,
                 }}
            >
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>

            </Slide>
           
        </PromotionsContainer>
    );
}