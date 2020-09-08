import React from 'react';
import './Navbar.css';
import {AppBar,Toolbar,IconButton, Typography,InputBase} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
    
    return (
        <div>
             <AppBar position="static">
                 <Toolbar>
                     <IconButton color='inherit' edge='start' aria-label='menu'>
                        <MenuIcon />
                     </IconButton>
                     <Typography variant='h6' style={{flexGrow:1}}>
                         Placeholder
                     </Typography>
                     <div className='search-box'>
                        <div className="search">
                            <InputBase
                            placeholder="Search…"
                            className="form-control"
                            />
                        </div>
                         <div className="search-icon">
                            <SearchIcon />
                        </div>
                     </div>
                 </Toolbar>
            </AppBar>
        </div>
    ); 
};

export default Navbar;