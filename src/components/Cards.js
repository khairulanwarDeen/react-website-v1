import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Look at my family!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpeg'
              text='When we ate at Pasir Ris'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-19.jpg'
              text='This was makan makan at Badoque'
              label='Services'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Qaizer in Nenek lap'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Qayla Birthday'
              label='Products'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Qayla Birthday'
              label='Sign Up'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
