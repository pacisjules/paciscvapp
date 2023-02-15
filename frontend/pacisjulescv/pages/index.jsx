import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import classes from './App.module.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const router = useRouter();
  const [time, settime] = useState(11);


  const interval = setInterval(() => {
    settime(time - 1)
  }, 1000)


  if (time == 1) {
    clearInterval(interval);
    router.push('/Startup')
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>Welcome in Pacis Jules ISHIMWE CV</title>
        <meta name="keywords" content="web pro" />
      </Head>

      <div className={classes.container}>

        <div className={classes.sideLt}>
          <h2 style={{ fontSize: "35px" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Welcome')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
                typewriter.typeString('I love visitors')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
              }}
            />
          </h2>

          <p style={{ fontSize: "0.8em" }}>Nice meeting you, but I can’t stop thinking about you. Hope to meet you very soon.</p>
          <br />
          <p style={{ fontSize: "0.8em" }}>Thank you for visit me continue to enjoy my CV. &#128588;</p>


          <br />
          <div className={classes.objects}>
            <div className={classes.rect1}></div>
            <div className={classes.rect2}></div>
            <div className={classes.rect3}></div>
            <div className={classes.rect4}></div>
          </div>

          <br />
        </div>



        <div className={classes.sideRt}>
          <h1 style={{ fontSize: "120px" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('YOU !')
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
        </div>

      </div>
      <div className={classes.shape1} />
      <div className={classes.shape2} />
      <div className={classes.shape3} />


    </div>
  );
};

export default Home;
