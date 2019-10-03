import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Layout} from 'antd';

const useStyles = makeStyles(theme => ({
    card: {
    
      height:600,
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      
      //  width: 1000,
    //   height: 2300,
    },
  }));
const {Content}=Layout;
  
  const ProdDisp = () => {
    const [data, setData] = useState({});
    const products = Object.values(data);
    const classes = useStyles();
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('../../data/products.json');
        const json = await response.json();
        setData(json);
      };
      fetchProducts();
    }, []);
      
  return(
    
    // <ul className={classes.root}>
    <ul className={classes.root} >
    
      <GridList cellHeight={550} className={classes.gridList} cols={4}>
        {products.map(product => (
          <GridListTile key={product.sku} >
          <Card style={{height:600}} >
          <CardActionArea>
          <CardMedia 
            component="img"
            alt="product"
            // height="335"
            image={"../../data/products/"+product.sku+"_2.jpg"}
            title="product"
          />
        <CardContent>
          <Typography    align="center">
          {product.title}
          </Typography>
          <Typography  align="center">
          {product.currencyFormat}{product.price} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography align="center">
        <Button  align="center "style={{
  	       background: 'black',
  	       color: 'white',
           border: 0,
           borderRadius: 0,
           height: 35,
           width: 220, 
           }}>
          Add to Cart
        </Button>
        </Typography>
        </CardActions>
      </Card>
          </GridListTile>
        ))}
      </GridList>
    
      
      </ul>
    );
  };
  
  
  export default ProdDisp;

