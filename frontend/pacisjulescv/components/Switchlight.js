import React, { useState } from "react";
import {MdOutlineLightMode} from 'react-icons/md'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import style from '../pages/App.module.css';
const Switchlight = () => {


    

    return (

    <div className={style.light}>
        <MdOutlineLightMode/>
    </div>


  )
}

export default Switchlight