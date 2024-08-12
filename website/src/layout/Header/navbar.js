import React from 'react';
import { Button, Box } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {[{ "name": "Home", "route": "/" }, { "name": "Category", "route": "/category" }, { "name": "Product", "route": "/product" }, { "name": "About Us", "route": "/about" }, { "name": "Contact Us", "route": "/contact" }].map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Link to={text.route} style={{textDecoration:"none",color:"black"}}>
                                {/* <ListItemIcon sx={{display:"inline"}}>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon> */}
                                <ListItemText primary={text.name}/>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (
        <div>
            <Button sx={{ display: { sm: "none", xs: "block" } }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

            <Box sx={{ display: { sm: "flex", xs: "none" }, flexDirection: "row", justifyContent: "space-evenly" }}>
                <Button><Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link></Button>
                <Button><Link to="/category" style={{ textDecoration: "none", color: "black" }}>Category</Link></Button>
                <Button><Link to="/product" style={{ textDecoration: "none", color: "black" }}>Product</Link></Button>
                <Button><Link to="/about" style={{ textDecoration: "none", color: "black" }}>About Us</Link></Button>
                <Button><Link to="/contact" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link></Button>
            </Box>
        </div>
    );
}