import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
           <AppBar position="static" sx={{background:"#000000"}}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ToDo!
            </Typography>
            </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;