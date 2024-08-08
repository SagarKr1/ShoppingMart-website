import React from 'react';
import Offer from './OfferPage/Offer';
import { Box } from '@mui/material';
import CategoryCard from './Category/CategoryCard';
import TrendingProduct from './TrendingProduct/TrendingProduct';
import BrandCard from './Brands/BrandCard';

export default function Home() {
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:6,marginTop:2}}>
            <Box>
                <Offer />
            </Box>

            <Box >
                <BrandCard />
            </Box>

            <Box >
                <CategoryCard />
            </Box>
            
            <Box >
                <TrendingProduct />
            </Box>
        </Box>
    )
}
