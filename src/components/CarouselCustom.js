import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../App.css';


class CarouselCustom extends Component 
{
  render()
  {
    return (
      <>  
        <Carousel autoplay>
          <div>
            <img alt="Carousel supernova" src='https://i.ibb.co/JdGdTnr/Group-34.png'/>
          </div>
          <div>
            <img alt="Carousel supernova" src='https://i.ibb.co/JdGdTnr/Group-34.png'/>
          </div>
          <div>
            <img alt="Carousel supernova" src='https://i.ibb.co/JdGdTnr/Group-34.png'/>
          </div>
          <div>
            <img alt="Carousel supernova" src='https://i.ibb.co/JdGdTnr/Group-34.png'/>
          </div>
        </Carousel>
      </>
    );
  }
}

export default CarouselCustom;
