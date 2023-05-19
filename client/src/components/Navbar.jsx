import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: (customStyle) => ({
    marginBottom: theme.spacing(2),
    ...customStyle,
  }),
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const { items, customStyle } = props;
  const classes = useStyles(customStyle);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
         
        </Typography>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginLeft: '10px' }}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </Toolbar>
    </AppBar>
  );
}

Navbar.defaultProps = {
  items: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Contact', url: '/contact' },
  ],
  customStyle: {},
};

export default Navbar;
