import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react';

export default function BrandCard(props) {
    return (
        <Grid item xs={10} sm={5} md={4} lg={3}>
            <Paper key={props.brand.id} elevation={3} sx={{
                display: "flex",
                flexDirection: "column",
                height: { xs: "150px", sm: "190px", md: "220px" },
                justifyContent: "space-around",
                border: "1px solid black",
                marginRight: 3
            }}>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: 25,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>{props.brand.Brand}</Typography>

                <Typography
                    sx={{
                        textAlign: "center"
                    }}
                >
                    {props.brand.description}
                </Typography>
            </Paper>
        </Grid>
    )
}
