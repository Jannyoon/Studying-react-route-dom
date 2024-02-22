import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [text, setText] = useState("");
  //const [photoNum, setPhotoNum] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    if (isNaN(Number(e.target.value))) return;
    setText(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(text);
    //setPhotoNum(text);
    setText('');
    navigate(`/:${text}`)

  }

  return (
    <div className='navbar'>
      <span>목록</span>
      <form onSubmit={handleSubmit}>
        <div>
          GO TO 
          <input 
          value={text}
          placeholder='Number'
          onChange={handleChange}
          />
          <button type="submit">확인</button>
        </div>
      </form>

      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>

    </div>
  );
}

