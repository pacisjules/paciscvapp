import React, { useState } from "react";
import Head from "next/head";
import style from './App.module.css';
import Typewriter from 'typewriter-effect';
import { RiSendPlane2Fill } from 'react-icons/ri'
import { ImFilePicture } from 'react-icons/im'
import { BsEmojiWink } from 'react-icons/bs'
const chat = () => {

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
        <title>(CV) Message me</title>
        <meta name='keywords' content='web pro' />
      </Head>
      <div className={style.Maintainer} style={{ width: '90%', marginTop: "-10px" }}>

        <div className={style.M_right}>
          <div className={style.My_infos} style={{ width: '75%' }}>
            <h1 className='text-gradient bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-500'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('CONNECT ME NOW')
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
            <h2 style={{ opacity: op }}><span style={{ fontWeight: 'bolder' }}>Any project</span> Tell me i can work <span style={{ fontSize: "25px" }}>😊</span></h2>
            <p>If you want me contact me through my email: <span style={{ fontWeight: 'bolder', color: "#22c55e" }}><a href="mailto: pacisjules@gmail.com">pacisjules@gmail.com</a> </span><br /></p>

            <div className={style.chattapp}>
              <div className={style.msgside}>

                <div className={style.rec}>
                  
                  <div className={style.leftmsg}>
                    <div className={style.inside}>
                      <p style={{
                        fontSize: "13px", color: "white"
                      }}>Yes we can help you
                        by build what you need </p>
                    </div>
                    <div className={style.infoss}>
                      <p style={{
                        fontSize: "10px", color: "white"
                      }}>Tuesday, 21Th November 2022</p>
                    </div>
                  </div>
                  
                </div>





                <div className={style.send}>

                  <div className={style.rightmsg}>
                    <div className={style.inside}>
                      <p style={{
                        fontSize: "13px", color: "white"
                      }}>Hi Pacis i am here to ask you if you can do for us
                        the mobile app with it’s desktop
                        So tell if is poaasible</p>
                    </div>
                    <div className={style.infoss}>
                      <p style={{
                        fontSize: "10px", color: "white"
                      }}>Tuesday, 21Th November 2022 <span style={{
                        color: "#00FC65"
                      }}>Sent.</span></p>
                    </div>
                  </div>

                </div>

                <div className={style.rec}>
                  
                  <div className={style.leftmsg}>
                    <div className={style.inside}>
                      <p style={{
                        fontSize: "13px", color: "white"
                      }}>Yes we can help you
                        by build what you need </p>
                    </div>
                    <div className={style.infoss}>
                      <p style={{
                        fontSize: "10px", color: "white"
                      }}>Tuesday, 21Th November 2022</p>
                    </div>
                  </div>
                  
                </div>
                




                


              </div>

              <div className={style.chatside}>
                <div className={style.aside}>
                  <button><BsEmojiWink style={{ fontSize: "18px" }} /></button>
                  <button><ImFilePicture style={{ fontSize: "18px" }} /></button>
                  <input type="text" name="" />
                </div>

                <div className={style.bside}>
                  <button>
                    <RiSendPlane2Fill />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>


  )
}

export default chat