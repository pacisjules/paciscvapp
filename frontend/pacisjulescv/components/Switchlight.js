import React, { useState } from "react";
import {MdOutlineLightMode} from 'react-icons/md'
import { useEffect } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import style from '../pages/App.module.css';


const Switchlight = () => {

  const [change, setChange]=useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.body.classList.add('dark');
      
    } else {
      document.body.classList.remove('dark');
      
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
      setChange(false)
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
      setChange(true)
    }
  };

    return (

    <div className={style.light} 
    
    style={{
      backgroundColor:change?"white":"#172C4D"
    }}
    onClick={toggleTheme}>
        {change?<MdOutlineLightMode style={{
          color:"#172C4D"
        }}/>:<BsFillMoonStarsFill
        style={{
          color:"white"
        }}/>}
    </div>


  )
}

export default Switchlight