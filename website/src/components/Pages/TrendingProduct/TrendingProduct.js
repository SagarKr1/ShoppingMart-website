import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import images from "./image.jfif";
import Cards from './card';
import Slider from "react-slick";

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
        },
        {
            "id": 6,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 7,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 8,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 9,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
        },
        {
            "id": 10,
            "image": { images },
            "name": "Best chakki atta",
            "brand": "Fortune",
            "price": 180,
            "size": 5,
            "unit": "KG",
            "stock": 25
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
        adaptiveHeight: false,
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
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
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
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginRight: 2,
            marginLeft: 2
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
            <Box sx={{
                paddingLeft: 3,
                paddingRight: 3
            }}>
                {/* <Grid container justifyContent="center" gap={2}> */}
                <Slider {...settings}>
                    {
                        productList.map((product) => {
                            return (
                                <Cards key={product.id} product={product} />
                            )
                        })
                    }
                </Slider>
                {/* </Grid> */}
            </Box>
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