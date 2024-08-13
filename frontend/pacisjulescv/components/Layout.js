import React from 'react';
import NavBar from './NavBar'
import Switchlight from './Switchlight'
import Downloadcv from './Downloadcv'
import Head from "next/head";
const Layout = ({ children }) => {
    return (
        
        <div>
            <Head>
            <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5df3ac3643be710e1d21fa17/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
            </Head>
            <Downloadcv/>
            <Switchlight/>
            <NavBar/>
            {children}
        </div>
    );
}

export default Layout;
