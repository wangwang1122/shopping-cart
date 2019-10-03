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
    root: {
      display: 'flex',
       flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      
       width: 1000,
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
            <Card className={classes.card}>
        <CardActionArea>
          <CardMedia 
            component="img"
            alt="Contemplative Reptile"
            // height="335"
            image={"../../data/products/"+product.sku+"_2.jpg"}
            title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom={true} variant="body1"  align="center">
          {product.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p" align="center">
          {product.currencyFormat}{product.price} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography align="center">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button size="small" color="primary" align="center">
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

