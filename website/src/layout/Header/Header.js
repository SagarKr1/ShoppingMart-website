import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material"
import Navbar from './navbar';
import SearchBar from './searchBar';
import Logo from './logo';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <Box sx={{ marginTop: 2 }}>
            {/* Search Bar */}
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: { xs: "space-around", }, marginBottom: 2 }}>
                <Logo />
                <Box sx={{ display: { lg: "flex", xs: "none" } }} >
                    <SearchBar />
                </Box>

                <Typography sx={{ display: { sm: "inline", xs: "none" }, fontSize: 10 }}>
                    For Support <br />
                    +91 9876543210
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
                    <Box>
                        <Link to="/cart" style={{color:'black'}}> <AddShoppingCartIcon /></Link>
                    </Box>
                    <Box>
                        <Link to="/account" style={{color:'black'}}> <AccountCircleIcon /></Link>
                    </Box>
                </Box>

            </Box>

            <Box sx={{ display: { lg: "none", xs: "flex" }, justifyContent: "center" }} >
                <SearchBar />
            </Box>

            {/* Menu */}
            <hr style={{ width: "90%", backgroundColor: "#D2D6DC" }} />
            <Navbar />

        </Box>
    )
}
