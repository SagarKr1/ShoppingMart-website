import { Box, Divider, Typography } from '@mui/material'
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <Box sx={{
            marginTop:3
        }}>
            <Divider/>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                bgcolor:"grey",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    gap:4
                }}>
                    <FacebookIcon sx={{
                        fontSize:60
                    }}/>
                    <InstagramIcon sx={{
                        fontSize:60
                    }}/>
                    <ContactMailIcon sx={{
                        fontSize:60
                    }}/>
                </Box>
                <Box>
                    <Typography>copyright <CopyrightIcon/>2024; Designed by SAGAR </Typography>
                </Box>
            </Box>
        </Box>
    )
}
