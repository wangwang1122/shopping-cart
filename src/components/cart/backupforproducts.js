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
  }));
  
  // shoppingcart

  export function ShoppingCart() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} /> */}
              aaaa
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} /> */}
              bbb
            </ListItem>
          ))}
        </List>
      </div>
    );
    
    
    
  
    return (
      <div>
        
        <IconButton onClick={toggleDrawer('right', true)}><ShoppingCartIcon/></IconButton>
        
  
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
      </div>
    );
  };



// ProductList

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
          <Card style={{height:600} } onClick={toggleDrawer('right', true)}  >
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

