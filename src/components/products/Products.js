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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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
    list: {
      width: 350,
    },
    fullList: {
      width: 'auto',
    },
    button:{
      height: "10px",

    },
  }));
  
  const div1 = {
    width: "30px",
    minHeight: "40px",
    boxSizing: "border-box"
  };

  


  export function ShoppingCart({products,state,toggleDrawer,totalprice,handlePlus}) {
    const classes = useStyles();
  

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        >
        <List>
        {products.map(product => (
        // if(product.sku) {
        <ListItem alignItems="flex-start" key={product.sku}>
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src={"../../data/products/"+product.sku+"_1.jpg"} /> */}
          <img src={"../../data/products/"+product.sku+"_1.jpg"} style={div1}/>
        </ListItemAvatar>
        <ListItemText
          primary={product.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {product.style}
              </Typography>
             {product.incart+1}
             <br/>
                <input type="button" className="counterLeftButton" value="-" />
                {/* <input type="text" value={product.incart+1}/> */}
                <input type="button" className="counterRightButton" value="+" />
                <button onCilck={()=>{console.log("test if clicked")}}>
                  test
                  </button>
            </React.Fragment>
          }
        />
      </ListItem>
      
      ))}
        </List>

        <Divider />
        <List>
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              {totalprice}}
            </ListItem>
          ))} */}
           <ListItem  >
            SUBTOTAL:{totalprice}
            </ListItem>
        </List>
      </div>
    );
    
    
    
  
    return (
      <div>
        <IconButton onClick={toggleDrawer('right', true)}><ShoppingCartIcon/></IconButton>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {sideList('right') }
        </Drawer>
      </div>
    );
  };



// ProductList

  const ProdDisp = ({products,state,toggleDrawer,incart,handleCart}) => {
    // const [data, setData] = useState({});
    // const products = Object.values(data);
    const classes = useStyles();
    // const [state,toggleDrawer]=useSelection();

    // useEffect(() => {
    //   const fetchProducts = async () => {
    //     const response = await fetch('../../data/products.json');
    //     const json = await response.json();
    //     setData(json);
    //   };
    //   fetchProducts();
    // }, []);
      
  return(
    // <ul className={classes.root}>
    <ul className={classes.root} >
    
      <GridList cellHeight={550} className={classes.gridList} cols={4}>
        {products.map(product => (
          <GridListTile key={product.sku} >
            {/* onClick={toggleDrawer('right', true)} */}
          <Card style={{height:600} }  onClick={function(event){toggleDrawer('right', true);handleCart(product,incart);console.log("card clicked")} }>
          <CardActionArea>
          <CardMedia 
            component="img"
            alt="product"
            // height="335"
            image={"../../data/products/"+product.sku+"_1.jpg"}
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

