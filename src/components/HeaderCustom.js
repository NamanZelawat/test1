import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import '../App.css';

const { Header } = Layout;

class HeaderCustom extends Component 
{
  render()
  {
    return (
      <>  
        <Header style={{ position: 'fixed', zIndex: 1, width: '99%' }}>
          <PageHeader
            title="Hi Anaisha!"
            extra={[
              <SearchOutlined className="icon-style" />,
              <MenuOutlined  className="icon-style" />,
            ]}
            avatar={{ src: 'https://i.ibb.co/VDDqq4h/Avatar21.png' }}
          >
          </PageHeader>
        </Header>
      </>
    );
  }
}

export default HeaderCustom;
