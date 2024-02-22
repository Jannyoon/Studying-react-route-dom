import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e)=>{
    if (isNaN(Number(e.target.value))) return;
    setText(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(text);
    setText('');
    if (text>=1 && text<=5) navigate(`/${text}`); //해당 숫자까지만 입력 가능
    else return;
  }

  return (
    <div className='navbar'>
      <span className='listFont'>LIST</span>
      <form onSubmit={handleSubmit}>
        <div className='goto'>
          <input 
          value={text}
          placeholder='Number'
          onChange={handleChange}
          />
          <button type="submit">GO</button>
        </div>
      </form>
      <ul>
        <li><Link to={'/1'} style={{textDecoration : "none"}} className='photoList'>Picture 1</Link></li>
        <li><Link to={'/2'} style={{textDecoration : "none"}} className='photoList'>Picture 2</Link></li>
        <li><Link to={'/3'} style={{textDecoration : "none"}} className='photoList'>Picture 3</Link></li>
        <li><Link to={'/4'} style={{textDecoration : "none"}} className='photoList'>Picture 4</Link></li>
        <li><Link to={'/5'} style={{textDecoration : "none"}} className='photoList'>Picture 5</Link></li>
      </ul>

    </div>
  );
}

