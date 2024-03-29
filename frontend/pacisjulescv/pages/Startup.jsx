import React, { useState } from "react";
import Head from "next/head";
import style from './App.module.css';
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import {HiOutlineMail} from 'react-icons/hi';
import { RiInstagramFill, RiWhatsappFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri'

const Startup = () => {

  const [time, settime] = useState(1);
  const [op, setOp] = useState(0);

  const [profile, setProfile] = useState('/images/cvImage.jpg');
  const [profileActive, setProfileActive] = useState(true);

  const interval = setInterval(() => {
    settime(time + 1)

    if (time == 2) {
      setOp(1)
    }
  }, 1000)

  if (time == 5) {
    clearInterval(interval);
  }


  const changeProfileAdd = ()=>{
    setProfile('/images/cvImage2.jpeg');
  }


  const changeProfileRemove = ()=>{
    setProfile('/images/cvImage.jpg');
  }

  return (
    <div>
      <Head>
        <title>(CV) My start</title>
        <meta name='keywords' content='web pro' />
      </Head>
      <div className={style.Maintainer}>
        <div className={style.M_left}>
          <div className={style.profileImage} style={{
            opacity: op
          }}>

            <div className={style.proimg}>

              <img
                src={profile}
                alt=""
                width={100}
                height={100}
                style={{ opacity: op }}
                onMouseMove={changeProfileAdd}
                onMouseLeave={changeProfileRemove}
                onMouseOut={changeProfileRemove}
              />

            </div>

          </div>
          <div className={style.profileEmail}>
            <span style={{ opacity: op }}>Please feel free to reach out to me via <br /></span>
            <p style={{
              opacity: op,
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}><HiOutlineMail style={{
              fontSize:22,
              marginRight:3,
              color: "#00C797"
            }}/><a href="mailto: pacisjules@gmail.com" style={{ color: "#00C797" }}>pacisjules@gmail.com</a></p>
          </div>
          <div className={style.profileSocial} style={{
            opacity: op
          }}>
            <ul>
              <li><Link href={"https://www.instagram.com/shamigo250/"} target="_blank"><RiInstagramFill /></Link></li>
              <li><Link href={"https://wa.me/250788224590"} target="_blank"><RiWhatsappFill /></Link></li>
              <li><Link href={"https://www.linkedin.com/in/pacis-jules-ishimwe-b54578117?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTnTt6hwJRt2BWUgvdSicVQ%3D%3D"} target="_blank"><RiLinkedinFill /></Link></li>
              <li><Link href={"https://github.com/pacisjules"} target="_blank"><RiGithubFill /></Link></li>
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
            <h2 style={{ opacity: op }}><span style={{ fontWeight: 'bolder' }}>ISHIMWE</span> Jules Pacis <span style={{ fontSize: "25px" }}>👌</span></h2>
            <p>{"I am a Software Engineer with experience in various aspects of the development process. I possess exceptional design and coding skills, along with the ability to transform client requirements into captivating online applications."}</p> <br />

            <p>{"My goal is to elevate my career to its highest level through unwavering dedication, hard work, professional integrity, and a commitment to benefit the broader community. I believe in the principle of 'learning by doing' to continually expand my knowledge and expertise, leveraging my skills to contribute to the achievement of organizational objectives."}</p><br />
          </div>
          <div className={style.My_infosDetails}>
            <section style={{ flex: "1" }}>
              <h2>Home</h2>
              <p>Gasabo-Kigali, Rwanda</p>
            </section>
            <section style={{ flex: "1" }}>
              <h2>Schools</h2>
              <p>Computer Science</p>
              <p>ULK (University)</p>
            </section>

            <section style={{ flex: "3" }}>
              <h2>Main Skills</h2>
              <p>Web Development, Desktop, UI UX Design, Full Stack,
                RestApi, Databases, Mobile Development and Graphic design
              </p>
            </section>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Startup
