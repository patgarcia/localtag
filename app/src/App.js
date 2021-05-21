import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext'
import Header from './components/Header'
import Main from './components/Main'
import './App.css';
import DrawerSolo from './components/DrawerSolo';

//Material UI Imports
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


function App() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  const [view, setView] = useState('all')
  const [id, setId] = useState('')
  return (
    <div className={classes.root}>
    <DataContext.Provider value={{search, setSearch, open, setOpen}}>
      <main className={clsx(classes.content, {[classes.contentShift]: open, })}>
        <Header />
        <Main/>
      </main>
      <DrawerSolo/>
    </DataContext.Provider>
  </div>
  );
}

export default App;
