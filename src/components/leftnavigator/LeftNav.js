import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import {Layout} from 'antd';
const {Sider}=Layout;
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  
}));

export default function LeftButtons() {
  const classes = useStyles();

  return (
    
    <ul>
    <p>Sizes:</p>
    <Fab size="small"  className={classes.fab}>
      xs
    </Fab>
    <Fab size="small"  className={classes.fab}>
      s
    </Fab>
    <Fab size="small"  className={classes.fab}>
      m
    </Fab>
    <Fab size="small"  className={classes.fab}>
      ml
    </Fab>
    
    <Fab size="small"  className={classes.fab}>
      l
    </Fab>
    
    <Fab size="small" className={classes.fab}>
      xl
    </Fab>
    <Fab size="small"  className={classes.fab}>
      xxl
    </Fab>
    </ul>
  );
}