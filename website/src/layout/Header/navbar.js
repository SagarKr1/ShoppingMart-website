import React from 'react';
import { Button, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
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
            </List>
        </Box>
    );

    return (
        <div>
            <Button sx={{display:{lg:"none",xs:"block"}}} onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer  open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

            <Box sx={{ display: {lg:"flex",xs:"none"}, flexDirection: "row", justifyContent: "space-evenly" }}>
                <Button>Home</Button>
                <Button>Category</Button>
                <Button>Product</Button>
                <Button>About Us</Button>
                <Button>Contact US</Button>
            </Box>
            <Outlet />
        </div>
    );
}

// export default function Navbar() {
//     return (
//         <>
//             <div>
//                 <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//                 <Drawer open={open} onClose={toggleDrawer(false)}>
//                     {DrawerList}
//                 </Drawer>
//             </div>
//             <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
//                 <Button>Home</Button>
//                 <Button>Category</Button>
//                 <Button>Product</Button>
//                 <Button>About Us</Button>
//                 <Button>Contact US</Button>
//             </Box>
//             <Outlet />
//         </>
//     )
// }