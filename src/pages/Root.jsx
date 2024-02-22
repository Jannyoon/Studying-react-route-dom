import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Navbar from './Navbar';

export default function Root() {
  return (
    <div className='container'>
      <Banner/>
      <section>
        <Navbar/>
        <div id="detail">
          <Outlet/>
        </div>
      </section>
    </div>
  );
}

