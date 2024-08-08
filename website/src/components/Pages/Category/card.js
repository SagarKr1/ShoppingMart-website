import { Box, Grid,Icon,Paper, Typography } from '@mui/material'
import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Card(props) {
    return (
        <Grid key={props.category.id} item xs={4} sm={2} >
            <Paper sx={{
                display:"flex",
                flexDirection:"column",
                height:{xs:"80px",sm:"100px",md:"150px"},
                alignItems:"center",
                justifyContent:"space-around"
            }}>
                <ShoppingBagIcon/>
                <Typography sx={{
                    fontSize:20,
                    textShadow:"2px 2px 4px rgba(0,0,0,0.5)"
                }}>
                    {props.category.category}
                </Typography>
            </Paper>
        </Grid>
    )
}
