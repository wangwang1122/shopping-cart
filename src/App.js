import React, { useEffect, useState } from 'react';
import LeftButtons from './components/leftnavigator/LeftNav';
import ProdDisp from './components/products/Products';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;



const App = () => {
  

  
  return(
    <div>
    
      {/* <LeftButtons />
      <ProdDisp /> */}
 
      <Layout>

         <Content>
           <Layout>
             <Sider width={250} style={{ background: '#fff' }}>
          
             <LeftButtons />
             </Sider>
             <Content style={{ padding: '0 24px', minHeight: 280 }}>
             <Header className="header">16 Product(s) found.</Header>

             <ProdDisp />
            </Content>
           </Layout>
          </Content>
      </Layout>

    
    </div>
  );
};

export default App;
