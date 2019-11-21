import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "rbx";
import Fab from '@material-ui/core/Fab';
import {Layout} from 'antd';
import './style.scss';
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
    <Button.Group>
    <input
            type="checkbox"
            value="s"
           />
          <span className="checkmark">s</span>

    <Button size="large">
      m
    </Button>
    <Button >
      l
    </Button>  
    <Button size="medium" className={classes.fab}>
      xl
    </Button>
    </Button.Group>
    </ul>
  );
}