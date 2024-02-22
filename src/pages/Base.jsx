import React from 'react';
import baseUrl from './img/baseImg.jpg';

export default function Base() {
  return (
    <div className='photoContainer'>
      <img src={baseUrl}/>
      <p>호아킨 소로야 이 바스티다 (Joaquin Sorolla y Bastida, 1863-1923)</p>
    </div>
  );
}

