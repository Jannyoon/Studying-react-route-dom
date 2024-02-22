import React from 'react';
import { useParams } from 'react-router-dom';
import photo1Url from './img/1.jpg';
import photo2Url from './img/2.jpg';
import photo3Url from './img/3.jpg';
import photo4Url from './img/4.jpg';
import photo5Url from './img/5.jpg';

export default function Photo() {
  const photoId = useParams().photoId;
  
  const urlList = ['', photo1Url, photo2Url, photo3Url, photo4Url, photo5Url]
  return (
    <div className='photoContainer'>
      <img src={urlList[photoId]}/>
    </div>
  );
}

