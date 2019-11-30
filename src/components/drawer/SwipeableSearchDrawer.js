import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import searchIcon from '../../assets/icons/search.svg';
// import menuIcon from '../../assets/icons/menu.svg';
// import ListItemText from '@material-ui/core/ListItemText';
import './SwipeableDrawer.scss';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  
  export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    // const sideList = side => (
    //   <div
    //     className={classes.list}
    //     role="presentation"
    //     onClick={toggleDrawer(side, false)}
    //     onKeyDown={toggleDrawer(side, false)}
    //   >
    //     <List>
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </div>
    // );
  
    const fullList = side => (
      <div
        className={classes.fullList}
        role="presentation"
        // onClick={toggleDrawer(side, false)}
        // onKeyDown={toggleDrawer(side, false)}
      >
        <List>
        <div className="navbar__searchbar-wrapper">
                <input className="navbar__search" type="text" name="search" placeholder="Search"></input>
        </div>
        </List>
      </div>
    );
  
    return (
      <div className="navbar__search-icon">
        <Button onClick={toggleDrawer('top', true)}><img src={searchIcon} alt="search-menu" /></Button>
        <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {fullList('top')}
      </SwipeableDrawer>
      </div>
    );
  }
  