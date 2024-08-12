import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import images from "./image.jfif";
import Cards from './card';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function TrendingProduct() {
    const productList = [
        {
            "id": 1,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 2,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 3,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 4,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 5,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        }
    ];
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            margin: "0px 20px"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Typography sx={{
                    fontSize: 25,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    marginLeft: 2,
                    marginRight: 2
                }}>
                    Top Products
                </Typography>
                <Button
                    variant='contained'
                >
                    View All
                </Button>
            </Box>
            <Box>
            <Grid container justifyContent="center" gap={2}>
                    {
                        productList.map((product) => {
                            return (
                                <Cards key={product.id} product={product} />
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}
