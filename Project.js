
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Divider, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Message, ArrowDropDown, Notifications, Search, ExitToApp } from '@mui/icons-material';

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  
  const handleLogout = () => {
    

    setLogoutDialogOpen(true);
  };

  const handleConfirmLogout = () => {
    alert("Logging out...");
    setLogoutDialogOpen(false);
  };

  const handleCancelLogout = () => {
    setLogoutDialogOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchorEl(null);
  };

  return (
  <AppBar position="static" sx={{ backgroundColor: '#343a40' }}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'flex-start', '@media (min-width: 600px)': { flexDirection: 'row', alignItems: 'center' } }}>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'sans-serif', mb: { xs: 1, sm: 0 } }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Start Bootstrap</a>
        </Typography>``
        <IconButton
          color="inherit"
          aria-label="messages"
          aria-controls="message-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Message />
        </IconButton>
        
        <IconButton color="inherit" aria-label="dropdown" onClick={handleClick}>
          <ArrowDropDown />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="notifications"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleNotificationClick}
        >
          <Notifications />
        </IconButton>
        <IconButton color="inherit" aria-label="dropdown" onClick={handleClick}>
          <ArrowDropDown />
        </IconButton>
        <Menu
          id="message-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{ width: '40%' }}
        >
          <MenuItem onClick={handleClose}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>New Messages:</Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>David Miller</Typography>
                <Typography variant="body2" sx={{ textAlign: 'right' }}>11:21 AM</Typography>
              </div>
              <Typography variant="body2">
                This is the first line of the message for David Miller.
              </Typography>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Jane Smith</Typography>
                <Typography variant="body2" sx={{ textAlign: 'right' }}>11:21 AM</Typography>
              </div>
              <Typography variant="body2">
                This is the first line of the message for Jane Smith.
              </Typography>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>John Doe</Typography>
                <Typography variant="body2" sx={{ textAlign: 'right' }}>11:21 AM</Typography>
              </div>
              <Typography variant="body2">
                This is the first line of the message for John Doe.
              </Typography>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>View all messages like this</MenuItem>
        </Menu>
        
        <div style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
        <TextField
  id="search"
  label="Search"
  variant="outlined"
  size="small"
  placeholder="Search here..."
  
  sx={{
                borderRadius: '4px',
                width: '200px',
                backgroundColor: 'white',
                mb: { xs: 1, sm: 0 },
                '& fieldset': {
                  borderColor: 'blue',
                },
              }}
 
/>
      <IconButton
        color="primary"
        aria-label="search"
        sx={{ borderRadius: '0 5px 5px 0', backgroundColor: 'blue' , color:'white'}}
      >
        <Search />
      </IconButton>
    </div>
    <IconButton sx={{ color: '#868d97', mb: { xs: 1, sm: 0 } }} aria-label="logout" onClick={handleLogout}>
            <ExitToApp />
            Logout
          </IconButton>

     
      </Toolbar>
      <Dialog
        open={logoutDialogOpen}
        onClose={handleCancelLogout}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Ready to Leave?"}</DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Select "Logout" below if you are ready to end your current session.
          </DialogContentText>
          
        </DialogContent>
        <Divider/>
        <DialogActions>
        <Button onClick={handleCancelLogout} color="inherit" sx={{ backgroundColor: 'grey', color: 'white' }}>
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="inherit" autoFocus sx={{ backgroundColor: 'blue', color: 'white' }}>
            Logout
          </Button>
         
        </DialogActions>
      </Dialog>
    </AppBar>
    
  );
};

export default Header;
