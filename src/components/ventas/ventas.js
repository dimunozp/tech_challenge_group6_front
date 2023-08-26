import {
    Box,
} from "@chakra-ui/react";
import React from "react";
import DropDownOption from "components/dropDownOption/DropDownOption";

export default function Ventas(props) {

    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <DropDownOption/>
            <br/>
            <iframe
                src="https://app.explo.co/iframe/R81Vj081ZP/d7b637f2361b58480c42ae87463d0b840ab1c8a16ccd440912dc8b12126c6bd8"
                style={{width: "100%",border: "none", height: "100vh"}}>
            </iframe>
        </Box>
    );
}
