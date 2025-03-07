import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import { auto } from '@popperjs/core';
// import { left } from '@popperjs/core';

// Styled Components
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(255,255,255,0.15)',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.25)',
    },
    width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', color:'white',alignItems:'center', justifyContent: 'space-between'}}>
                    {/* Menu Icon */}
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>

                    {/* Navbar Links */}
                    <div className='jus'>
                        <nav style={{ display: 'flex', color:'white',paddingLeft:'30px',gap:'40px' }}>
                            <Link to="/" style={{ display: 'flex', color:'white',textDecoration: 'none' }}>Home</Link>
                            <Link to="/about" style={{ display: 'flex', color:'white' ,textDecoration: 'none'}}>About</Link>
                            <Link to="/contact" style={{ display: 'flex', color:'white',textDecoration: 'none'}}>Contact</Link>
                            <Link to="/admin" style={{ display: 'flex', color:'white',textDecoration: 'none'}}>Admin</Link>
                        </nav>
                    </div>

                    {/* Search Bar */}
                    <Search sx={{ml:'auto'}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
