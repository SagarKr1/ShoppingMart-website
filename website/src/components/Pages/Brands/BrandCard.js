import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import CardB from './card';

import Slider from "react-slick";

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
        {
            "id": 6,
            "Brand": "Badshah",
            "description": "I have best Badshah brand products"
        },
        {
            "id": 7,
            "Brand": "Dove",
            "description": "I have best Dove brand products"
        },
        {
            "id": 8,
            "Brand": "Dettol",
            "description": "I have best Dettol brand products"
        },
        {
            "id": 9,
            "Brand": "Tide",
            "description": "I have best Tide brand products"
        },
        {
            "id": 10,
            "Brand": "Ghadi",
            "description": "I have best Ghadi brand products"
        }
    ];
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1114,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Box sx={{ marginLeft: 2, marginRight: 2, }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 4
            }}>
                <Typography sx={{
                    fontSize: 25,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>Best Brands: we have</Typography>
                <Button variant="contained" >View All</Button>
            </Box>
            {/* <Grid
                container
                gap={2}
                justifyContent="center"
                sx={{}}
            > */}
            <Box sx={{ paddingLeft: 3, paddingRight: 3 }}>
                <Slider {...settings}>
                    {
                        brandList.map((brand, index) => {
                            return (
                                <CardB key={index} brand={brand} />
                            )
                        })
                    }
                </Slider>
            </Box>
            {/* </Grid> */}
        </Box>
    )
}


function SampleNextArrow(props) {
    { console.log("Props from next Arrow ", props) }
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}