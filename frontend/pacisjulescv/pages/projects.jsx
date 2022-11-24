import React from 'react'
import Head from "next/head";
import style from './App.module.css';
 const projects = () => {
  return (
    <div>
      <Head>
    <title>(CV) My Projects</title>
    <meta name='keywords' content='web pro' />
</Head>
<center>
<iframe width="200px" height="200px" name="INLINE"></iframe><a HREF="http://www.html5.com" target="INLINE">Click me</a>
<div className={style.tester}>
  Learning CSS3 is fun
</div>
</center>
</div>
  )
}

export default projects
