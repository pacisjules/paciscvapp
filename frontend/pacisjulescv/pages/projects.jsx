import React,{use, useState} from 'react'
import Head from "next/head";
import style from './App.module.css';
import {MdSkipNext,MdSkipPrevious} from 'react-icons/md'
import danne  from "../components/danne";
import Link from 'next/link'

const projects = () => {
  const[currentId, setCurrentID] = useState(1);

  const [name, setName] = useState('React Js Light switch');
  const [description, setdescription] = useState('This is the dark mode before click the toggle css button');
  const [type, settype] = useState('Javascript');
  const [gitlink, setgitlink] = useState('https://github.com/pacisjules/reactjs_togglecss');
  const [link, setlink] = useState('https://loquacious-travesseiro-68f5c6.netlify.app/');
  const [photo, setPhoto]= useState('https://user-images.githubusercontent.com/51479761/177051259-b9091d12-8bc6-40de-8217-274de9657569.PNG');
  

  const see = ()=>{
    setCurrentinfos([]);

    const arrysize = danne.length;
    const lastObj = arrysize-1;
    
    currentInfos.push(
      danne[lastObj]
    )
    
    console.log(currentInfos)
  }


  const nextObject = () => {
    const arrysize = danne.length;
    setCurrentID(currentId+1);

    if(currentId>arrysize){
      setCurrentID(1)
    }else{
      const carray=[];
      const index = danne.filter((item)=>{
        return item.id==currentId;
      });
      setName(index[0].name);
      setdescription(index[0].description);
      settype(index[0].type);
      setPhoto(index[0].image);
    }
    
  }

  const prevObject = () => {
    const arrysize = danne.length;
    setCurrentID(currentId-1);
    
    if(currentId<1){
      setCurrentID(arrysize)
    }else{
      const carray=[];
      const index = danne.filter((item)=>{
        return item.id==currentId;
      });
      setName(index[0].name);
      setdescription(index[0].description);
      settype(index[0].type);
      setPhoto(index[0].image);
    }
  }


  return (
    <div>
      <Head>
        <title>(CV) My Projects</title>
        <meta name='keywords' content='web pro' />
      </Head>

      <div className={style.projectMaintener}>
        <div className={style.projectpanel}>
          
          <div className={style.prev} onClick={prevObject}>
            <div className={style.innholder}>
              <MdSkipPrevious />
            </div>
         
          </div>

          <div className={style.middle}>
          <div className={style.image}>
            <img src={photo} alt="" />
          </div>
          <div className={style.infos}>
            <div className={style.description}>
              <p style={{
                fontWeight:"bold"
              }}>{name}</p>
              <p>{description}</p>
              <p style={{
                fontWeight:"bold",
                color:"orange"
              }}>Tech: {type}</p>
            </div>

            <div className={style.btn_actions}>
            <Link href={gitlink} target="_blank"><button>View source code</button></Link>
              <p>⚡</p>
              <Link href={link} target="_blank"><button>View live Demo</button></Link>
            </div>

          </div>
          </div>

          <div className={style.next} onClick={nextObject}>
          <div className={style.innholder} >
              <MdSkipNext/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default projects
