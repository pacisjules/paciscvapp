import React, { useState } from "react";
import Head from "next/head";
import style from './App.module.css';
import Link from 'next/link'
import Typewriter from 'typewriter-effect';


import {RiInstagramFill, RiWhatsappFill, RiLinkedinFill,RiGithubFill} from 'react-icons/ri'

const Startup = () => {

  const [time, settime] = useState(1);
  const [op, setOp] = useState(0);

  const interval = setInterval(() => {
    settime(time + 1)

    if(time == 2){
      setOp(1)
    }
  }, 1000)

  if (time == 5) {
    clearInterval(interval);
  }

  return (
    <div>
      <Head>
        <title>(CV) My start</title>
        <meta name='keywords' content='web pro' />
      </Head>
      <div className={style.Maintainer}>
        <div className={style.M_left}>
          <div className={style.profileImage}>
            <div className={style.proimg}>
            <img src="./images/cvImage.jpg" alt="" style={{opacity:op}} />
            </div>
          
          </div>
          <div className={style.profileEmail}>
          <span style={{ color: "#214277" }}>Contact me through <br/> My email: <a href="mailto: pacisjules@gmail.com" style={{ color: "#00C797" }}>pacisjules@gmail.com</a></span>
          </div>
          <div className={style.profileSocial}>
          <ul>
            <li><Link href={"https://www.instagram.com/shamigo250/"} target="_blank"><RiInstagramFill/></Link></li>
            <li><Link href={"https://wa.me/250788224590"} target="_blank"><RiWhatsappFill/></Link></li>
            <li><Link href={"https://www.linkedin.com/in/pacis-jules-ishimwe-b54578117?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTnTt6hwJRt2BWUgvdSicVQ%3D%3D"} target="_blank"><RiLinkedinFill/></Link></li>
            <li><Link href={"https://github.com/pacisjules"} target="_blank"><RiGithubFill/></Link></li>
          </ul>
          </div>
        </div>

        <div className={style.M_right}>
          <div className={style.My_infos}>
            <h1 className='text-gradient bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-500'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('MY NAME IS')
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
            <h2 style={{opacity:op}}><span style={{fontWeight:'bolder'}}>ISHIMWE</span> Jules Pacis <span style={{ fontSize: "25px" }}>👌</span></h2>
            <p>I’m Software Developer, I have experience on different parts of the flow, 
I have excellent
design & coding skills, as well as ability to convert client requirements into exciting
online applications.</p> <br/>

<p>To advance to the highest level of my career through hard work, determination, professional,
integrity and benefiting the community in general as well. Learning by doing to gain more knowledge and experience by using the skills, I have to contribute to the attainment of organizational
goals.</p><br/>
          </div>
          <div className={style.My_infosDetails}>
            <section style={{ flex:"1" }}>
              <h2>Home</h2>
              <p>Kigali, Rwanda</p>
            </section>
            <section style={{ flex:"1" }}>
              <h2>Schools</h2>
              <p>Computer Science</p>
              <p>ULK (University)</p>
            </section>

            <section style={{ flex:"3" }}>
              <h2>Main Skills</h2>
              <p>Web Development, Desktop, UI UX Design, Full Stack,
RestApi, Mobile Development and Graphic design
</p>
            </section>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Startup
