import React, { Component } from 'react';
import './App.css';

import HeaderCustom from './components/HeaderCustom';
import CarouselCustom from './components/CarouselCustom';
import Contests from './components/Contests';
import Categories from './components/Categories';
import Upcoming from './components/Upcoming';

class App extends Component 
{
  render()
  {
    return (
      <>  
        <HeaderCustom />
        <CarouselCustom />
        <Contests />
        <Categories />
        <Upcoming />
      </>
    );
  }
}

export default App;
