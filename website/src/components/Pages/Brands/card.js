import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CardB(props) {
    return (
        <Grid item xs={10} sm={5}  md={4} lg={2}>
            <Paper key={props.brand.id} elevation={3} sx={{
                display:"flex",
                flexDirection:"column",
                height: { xs:"150px",sm: "190px", md:"230px" },
                justifyContent:"space-around"
            }}>
                <Typography sx={{
                    textAlign: "center"
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
