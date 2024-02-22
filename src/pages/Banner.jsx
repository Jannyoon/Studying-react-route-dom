import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <Link to={'/'} style={{textDecoration : "none"}}>
      <div className='banner'>Joaquín Sorolla y Bastida Gallery</div>
    </Link>
  );
}

