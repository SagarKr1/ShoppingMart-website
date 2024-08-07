import React from 'react';
import { Box } from '@mui/material';
import LogoW from "./png/logo.png";
// import No from "./svg/logo-no-background.svg";

export default function Logo() {
    return (
            <img src={LogoW} alt='Logo' style={{height:"25px"}}></img>
    )
}
