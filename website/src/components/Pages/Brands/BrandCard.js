import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import CardB from './card';

export default function BrandCard() {
    const brandList = [
        {
            "id": 1,
            "Brand": "Fortune",
            "description": "I have best fortune brand products"
        },
        {
            "id": 2,
            "Brand": "MDH",
            "description": "I have best MDH brand products"
        },
        {
            "id": 3,
            "Brand": "India Gate",
            "description": "I have best India Gate brand products"
        },
        {
            "id": 4,
            "Brand": "Ashirvad",
            "description": "I have best Ashirvad brand products"
        },
        {
            "id": 5,
            "Brand": "Rajdhani",
            "description": "I have best Rajdhani brand products"

        },
        // {
        //     "id": 6,
        //     "Brand": "Badshah",
        //     "description": "I have best Badshah brand products"
        // },
        // {
        //     "id":7,
        //     "Brand":"Dove",
        //     "description":"I have best Dove brand products"
        // },
        // {
        //     "id":8,
        //     "Brand":"Dettol",
        //     "description":"I have best Dettol brand products"
        // },
        // {
        //     "id":9,
        //     "Brand":"Tide",
        //     "description":"I have best Tide brand products"
        // },
        // {
        //     "id":10,
        //     "Brand":"Ghadi",
        //     "description":"I have best Ghadi brand products"
        // }
    ]
    return (
        <Box sx={{ marginLeft: 2,marginRight:2, }}>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                marginBottom:4
            }}>
                <Typography>Best Brands: we have</Typography>
                <Button variant="contained" >View All</Button>
            </Box>
            <Grid
                container
                gap={2}
                justifyContent="center"
            >
                {
                    brandList.map((brand, index) => {
                        return (
                            <CardB key={index} brand={brand} />
                        )
                    })
                }

            </Grid>
        </Box>
    )
}
