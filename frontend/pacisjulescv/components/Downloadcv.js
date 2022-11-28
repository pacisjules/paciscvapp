import React, { useState } from "react";
import {MdOutlineLightMode} from 'react-icons/md'
import {BsFileEarmarkArrowDownFill} from 'react-icons/bs'
import style from '../pages/App.module.css';
const Downloadcv = () => {


    

    return (
        <>
    <a href="./Resume-IshimweJulesPacis.pdf" ><div className={style.cvdown}>
        <p>Get my Resume here </p>
        <BsFileEarmarkArrowDownFill style={{
            fontSize:"23px",
            marginLeft:"10px"
        }}/>
    </div></a>
</>

  )
}

export default Downloadcv