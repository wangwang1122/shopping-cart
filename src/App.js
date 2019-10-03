import React, { useEffect, useState } from 'react';
import LeftButtons from './components/leftnavigator/LeftNav';
import ProdDisp from './components/products/Products';
import Grid from '@material-ui/core/Grid';
import TemporaryDrawer from './components/cart/shoppingcart';


const App = () => {
  

  
  return(
    <ul>
    <React.Fragment>
      <Grid container spacing={2} direction="row">
        <Grid item xs={2} >
          <LeftButtons/>
        </Grid>
        <Grid item xs={9}>
          <ProdDisp/>
        </Grid>
        <Grid item xs={1}>
          <TemporaryDrawer/>
        </Grid>
      </Grid>
    </React.Fragment>
    </ul>
  );
};

export default App;
