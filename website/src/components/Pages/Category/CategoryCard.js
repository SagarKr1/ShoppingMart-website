import React from 'react';
import Card from './card';
import { Box, Button, Grid, Typography } from '@mui/material';

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
        }
    ]
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginRight:2
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
                <Button variant='contained'>View All</Button>
            </Box>

            <Box>
                <Grid container justifyContent="center" gap={2}>
                    {
                        categoryList.map((category) => {
                            return (
                                <Card category={category} />
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}
