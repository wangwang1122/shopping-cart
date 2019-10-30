import React, { useEffect, useState } from 'react';
import LeftButtons from './components/leftnavigator/LeftNav';
import ProdDisp from './components/products/Products';
import {ShoppingCart} from './components/products/Products';
import Grid from '@material-ui/core/Grid';
// import TemporaryDrawer from './components/cart/shoppingcart';

const useSelection = () => {
  const [selected, setSelected] = useState({
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSelected({ ...selected, [side]: open });
  };
  return [ selected, toggleDrawer ];
};

const App = () => { 
  
  const [state,toggleDrawer]=useSelection();

  
  return(
    <ul>
    <React.Fragment>
      <Grid container spacing={2} direction="row">
        <Grid item xs={2} >
          <LeftButtons/>
        </Grid>
        <Grid item xs={9}>
          <ProdDisp state={state} toggleDrawer={toggleDrawer}/>
        </Grid>
        <Grid item xs={1}>
          <ShoppingCart state={state} toggleDrawer={toggleDrawer}/>
        </Grid>
      </Grid>
    </React.Fragment>
    </ul>
  );
};

export default App;
