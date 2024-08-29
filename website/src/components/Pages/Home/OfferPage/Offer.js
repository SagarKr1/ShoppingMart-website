import React from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import img1 from "./img1.jpg";
import img2 from './img2.webp';
import img3 from './img3.jfif';

export default function Offer() {
    return (
        <Box>
            <Grid
                container
                spacing={2}
                gap={2}
                justifyContent="center">

                <Grid item xs={8}>
                    <Card sx={{
                        height: { sm: "350px", xs: "200px" },
                        backgroundImage: `url(${img1})`,
                        position: "relative",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}>
                        <Box sx={{

                        }}>
                            <Typography sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                textAlign: "center",
                                color:"white",
                                margin: "25%"
                            }}>
                                Get 20% Discount<br />
                                In your first shopping
                            </Typography>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={8} sm={4}>
                    <Card
                        sx={{
                            height: { sm: "250px", xs: "125px" },
                            backgroundImage: `url(${img2})`,
                            position: "relative",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    >
                        <Box>
                            <Typography sx={{color:"white", backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: "center", marginTop: "25%" }}>
                                Get 20% Discount<br />
                                In your first shopping
                            </Typography>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={8} sm={4}>
                    <Card
                        sx={{
                            height: { sm: "250px", xs: "125px" },
                            backgroundImage: `url(${img3})`,
                            position: "relative",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    >
                        <Box>
                            <Typography sx={{ color:"white", backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: "center", marginTop: "25%" }}>
                                Get 20% Discount<br />
                                In your first shopping
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
