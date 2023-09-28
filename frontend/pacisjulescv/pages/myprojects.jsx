
import React, { useState } from "react";
import Head from 'next/head'
import style from './App.module.css';
import Link from 'next/link'
import Typewriter from 'typewriter-effect';



const myprojects = () => {

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
                <title>My projects </title>
                <meta name='keywords' content='web pro' />
            </Head>

            <div className={style.Maintainer}>
                <div className={style.M_right}>
                    <div className={style.My_infos} >
                        <h1 className='text-gradient bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-500'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('my projects')
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
                        <h2 style={{ opacity: op }}><span style={{ fontWeight: 'bolder' }}>As</span> Software engineer <span style={{ fontSize: "25px" }}>✨</span></h2>
        
                    </div>
                    
                    <div className={style.skills}>
                        
                        <div className={style.in_skills}>
                            <section>
                                <p>HR System management at Newlife ministries.</p>
                            </section>

                            <section>
                                <p>Selleasep POS Application at Shamigo.</p>
                            </section>

                            <section>
                                <p>Ilead Web and App Attendance System.</p>
                            </section>


                            <section>
                                <p>HashMe App</p>
                            </section>

                            <section>
                                <p>WasMe Chat App</p>
                            </section>

                            <section>
                                <p>And more than....</p>
                            </section>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default myprojects