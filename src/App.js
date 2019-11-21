import React, { useEffect, useState } from 'react';
import LeftButtons from './components/leftnavigator/LeftNav';
import ProdDisp from './components/products/Products';
import {ShoppingCart} from './components/products/Products';
import Grid from '@material-ui/core/Grid';
// import TemporaryDrawer from './components/cart/shoppingcart';
import { Button } from "rbx";


const useSelection = () => {
  const [selected, setSelected] = useState({
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    console.log("called in the function");

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSelected({ ...selected, [side]: open });
  };
  return [ selected, toggleDrawer ];
};



// const SizeSelector = ({ size }) => (
//   <Button.Group hasAddons>
//   { Object.values(size)
//       .map(value => 
//         <Button key={value}
//           color={ buttonColor(value === size) }
//           >
//           { value }
//         </Button>
//       )
//   }
//   </Button.Group>
// );


// const getProductSize = product => (
//   product.size
//   );

const getProductId = product => (
    product.sku
    );


const App = () => { 
  
  const [state,toggleDrawer]=useSelection();

  const [size,setSize]=useState('');
  // const [data, setData] = useState({"12064273040195392": {
  //   "sku": "test",
  //   "title": "",
  //   "description": "",
  //   "style": "",
  //   "price": 0,
  //   "currencyId": "",
  //   "currencyFormat": "",
  //   "isFreeShipping": true,
  //   "instock": 0,
  //   "incart": 0
  // }});
  const [data, setData] =useState({
    arr:[],
    cart:[],
    totalprice: 0,
    size:[],
    });
  
  const handleCart= (product,incart)=>{
    const cartproduct= incart;
    const id=product.sku;
    let flag=1;
    let count=0;
    for (let i=0;i<incart.length;i++){
      if(incart[i].sku===id){
        cartproduct[i].incart=cartproduct[i].incart+1;
        flag=0;
      }
    }
    if(flag){
      cartproduct.push(product);
    }
    for (let i=0;i<incart.length;i++){
        // console.log(count);
        count=count+(cartproduct[i].incart+1)*cartproduct[i].price;
        // console.log(cartproduct[i].price);
        
    }
    setData({...data,cart:cartproduct,totalprice:count});
  }
  
  const handlePlus= (product,incart)=>{
    const cartproduct= incart;
    const id=product.sku;
    let count=0;
    for (let i=0;i<incart.length;i++){
      if(incart[i].sku===id){
        cartproduct[i].incart=cartproduct[i].incart+1;
      }
    }
    for (let i=0;i<incart.length;i++){
        count=count+(cartproduct[i].incart+1)*cartproduct[i].price;
    }
    setData({...data,cart:cartproduct,totalprice:count});
  }
  const handleMinus= (product,incart)=>{
    const cartproduct= incart;
    const id=product.sku;
    let count=0;
    for (let i=0;i<incart.length;i++){
      if(incart[i].sku===id&&cartproduct[i].incart>0){
        cartproduct[i].incart=cartproduct[i].incart-1;
      }
    }
    for (let i=0;i<incart.length;i++){
        count=count+(cartproduct[i].incart+1)*cartproduct[i].price;
    }
    setData({...data,cart:cartproduct,totalprice:count});
  }

  const deleteItem= (product,incart)=>{
    const cartproduct= incart;
    const id=product.sku;
    let count=0;
    for (let i=0;i<incart.length;i++){
      if(incart[i].sku===id){
        cartproduct.splice(i,1);
      }
    }
    for (let i=0;i<incart.length;i++){
        count=count+(cartproduct[i].incart+1)*cartproduct[i].price;
    }
    setData({...data,cart:cartproduct,totalprice:count});
  }



  const products = Object.values(data.arr);
  // const cartproducts = Object.values(data.arr);


  // const sizeClothes = products.filter(product => size === getProductSize(product));
//   console.log(products);
//   console.log(data.cart[0]);
//   // let sku=products[1];
// console.log(data.arr);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const sizeresponse = await fetch('./data/inventory.json');

      const json = await response.json();
      const sizejson = await sizeresponse.json();

      let a='51498472915966370';
      setData({arr:json,
              cart:[],
              size:sizejson});
      // setData({incart:json});
      // let a=Object.values(json);
      // console.log(a[1].sku);

    };
    fetchProducts();
  }, []);
  
  

  return(
    <ul>
    <React.Fragment>
      <Grid container spacing={2} direction="row">
        <Grid item xs={2} >
          <LeftButtons/>
        </Grid>
        <Grid item xs={9}>
          <ProdDisp products={products} state={state} toggleDrawer={toggleDrawer} incart={data.cart} handleCart={handleCart}/>
        </Grid>
        <Grid item xs={1}>
          <ShoppingCart products={data.cart} state={state} toggleDrawer={toggleDrawer} totalprice={data.totalprice} handlePlus={handlePlus} handleMinus={handleMinus} deleteItem={deleteItem}/>
        </Grid>
      </Grid>
    </React.Fragment>
    </ul>
  );
};

export default App;
