import React, { useState } from "react";
import Head from "next/head";
import style from './App.module.css';
import Typewriter from 'typewriter-effect';
import axios from 'axios';

const Contactme = () => {
  const [time, settime] = useState(1);
  const [op, setOp] = useState(0);




  const interval = setInterval(() => {
    settime(time + 1)

    if (time == 2) {
      setOp(1)
    }
  }, 800)

  if (time == 5) {
    clearInterval(interval);
  }

  return (
    <div>
      <Head>
        <title>(CV) My Contacts</title>
        <meta name='keywords' content='web pro' />
      </Head>
      <div className={style.Maintainer} style={{ width: '90%', marginTop: "-10px" }}>

        <div className={style.M_right}>
          <div className={style.My_infos} style={{ width: '75%' }}>
            <h1 className='text-gradient bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-500'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('VISIT ME')
                    .callFunction(() => {
                    })
                    .pauseFor(2500)
                    //.deleteAll()
                    .callFunction(() => {
                    })
                    .start();
                }}
              />
            </h1>
            <h2 style={{ opacity: op, fontSize: '20px' }}><span style={{ fontWeight: 'bolder' }}>Visit my social media accounts</span> by following me and share them for support me <span style={{ fontSize: "25px" }}>😊</span></h2>
            <br />
            <div className={style.socials}>
                <button>Go with Instagram feed</button>
                <button>Go with facebook</button>
                <button>Go with Twitter</button>
                <button>Go with Linkedin </button>
            </div>

            <div className={style.export}>

            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Contactme;



/* export const myinstagram = async ()=>{
  
  try {
    const res = await axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXOU5QYUlacXRmUkZA4aW5uRmZANd1FSMHMzaGZAYN1p5Wk9ZAR196U2h5cHdNbEpSYzdlZAHhBR0ZAkM3BPNXJkYTVuNVhIbjhwVzcwMkRublN3MHNqaXlOMDBUUFBHUjhkSkRKSFpYckFHTlpfMThTNwZDZD');
    const getter = res.data;
    return {
      props:{
        getter,
      },
    };
  } catch (error) {
    return {error};
  }
}; */


