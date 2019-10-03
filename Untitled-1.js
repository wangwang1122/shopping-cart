import React, { useEffect, useState } from 'react';
import LeftButtons from './components/leftnavigator/LeftNav';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const classes = useStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <div>
    <LeftButtons />


    {products.map(product =>
      <Grid key={product.sku}><Paper className={classes.paper}>{
        <img src={"data/products/"+product.sku+"_2.jpg"} height="180" width="120"></img>}
        {<br/>}
        {product.title}
        {<br/>}
        {product.currencyFormat}
        {product.price}
        
       
      </Paper>
      </Grid>)}
    
    </div>
  );
};


export default App;





import React, { useEffect, useState } from 'react';
import LeftButtons from './components/leftnavigator/LeftNav';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import GridListTile from '@material-ui/core/GridListTile';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(5),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    
    width: 1000,
    height: 10000,
  },
}));

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const classes = useStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  // return 
  // (
  //   <div>
  //   <LeftButtons />


  //   {products.map(product =>
  //     <Grid key={product.sku}><Paper className={classes.paper}>{
  //       <img src={"data/products/"+product.sku+"_2.jpg"} height="180" width="120"></img>}
  //       {<br/>}
  //       {product.title}
  //       {<br/>}
  //       {product.currencyFormat}
  //       {product.price}
        
       
  //     </Paper>
  //     </Grid>)}
    
  //   </div>
  // );
  return(
    <div>
    <div>
      <LeftButtons />
    </div>

    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList} cols={4}>
        {products.map(product => (
          <GridListTile key={product.sku} >
            <img src={"data/products/"+product.sku+"_2.jpg"}/>
            <br/>
            {product.title}
            <br/>
            {product.currencyFormat}
            {product.price}
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
};


export default App;



import React, { useEffect, useState } from 'react';
import LeftButtons from './components/leftnavigator/LeftNav';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card:{
    maxwidth:100,
  },
}));
const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const classes = useStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <div>
    <LeftButtons />

    <div className={classes.root}>
    {products.map(product =>
      <Grid key={product.sku} container ><Card className={classes.card}>
        <CardActionArea>
          <CardMedia 
            component="img"
            alt="Contemplative Reptile"
            // height="335"
            image={"data/products/"+product.sku+"_2.jpg"}
            title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {product.currencyFormat}{product.price} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        </CardActions>
      </Card>
      </Grid>)}
    </div>
    </div>
  );
};


export default App;
