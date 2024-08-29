import React from 'react';
import Card from './card';
import { Box, Button, Grid, Typography } from '@mui/material';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function CategoryCard() {
    const categoryList = [
        {
            "id": 1,
            "category": "Atta"
        },
        {
            "id": 2,
            "category": "Rice"
        },
        {
            "id": 3,
            "category": "Masala"
        },
        {
            "id": 4,
            "category": "Oil"
        },
        {
            "id": 5,
            "category": "Shop"
        },
        {
            "id": 6,
            "category": "Atta"
        },
        {
            "id": 7,
            "category": "Rice"
        },
        {
            "id": 8,
            "category": "Masala"
        },
        {
            "id": 9,
            "category": "Oil"
        },
        {
            "id": 10,
            "category": "Shop"
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
                justifyContent: "space-between",
            }}>
                <Typography sx={{
                    fontSize: 25,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    marginLeft: 2,
                    marginRight: 2
                }}>Category</Typography>
                <Link to="/category"> <Button variant='contained'>View All</Button></Link>
            </Box>

            <Box sx={{
                paddingLeft: 3,
                paddingRight: 3
            }}>
                {/* <Grid container justifyContent="center" gap={2}> */}
                <Slider {...settings}>
                    {
                        categoryList.map((category) => {
                            return (
                                <Card key={category.id} category={category} />
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