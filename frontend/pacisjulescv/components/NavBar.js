import React, {useState} from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { SiAboutdotme, SiTorproject, SiGooglechat } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import classes from "../pages/App.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
const NavBar = () => {

    const [show, SetShow]=useState(false);
  return (
    <>
      <div className={classes.leftsidebar}>
        <ul className={classes.sidebaricon}>
          <li>
            <Link
              href={"/Startup"}
              class="relative before:z-10 before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-gray-900 before:px-3 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute  after:-right-[0.8rem] after:top-1/2 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-gray-700 after:border-l-transparent after:border-b-transparent after:border-t-transparent after:invisible hover:before:visible hover:after:visible "
              data-tip="Start to ready &#128588;"
            >
              <CgProfile />
            </Link>
          </li>
          <li>
            <Link
              href={"about"}
              class="relative before:z-10 before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-gray-900 before:px-3 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute  after:-right-[0.8rem] after:top-1/2 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-gray-700 after:border-l-transparent after:border-b-transparent after:border-t-transparent after:invisible hover:before:visible hover:after:visible "
              data-tip="About me &#128526;"
            >
              <SiAboutdotme />
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              class="relative before:z-10 before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-gray-900 before:px-3 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute  after:-right-[0.8rem] after:top-1/2 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-gray-700 after:border-l-transparent after:border-b-transparent after:border-t-transparent after:invisible hover:before:visible hover:after:visible"
              data-tip="My projects &#128642;"
            >
              <SiTorproject />
            </Link>
          </li>
          <li>
            <Link
              href={"/chat"}
              class="relative before:z-10 before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-gray-900 before:px-3 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute  after:-right-[0.8rem] after:top-1/2 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-gray-700 after:border-l-transparent after:border-b-transparent after:border-t-transparent after:invisible hover:before:visible hover:after:visible"
              data-tip="Message me &#128238;"
            >
              <SiGooglechat />
            </Link>
          </li>
          <li>
            <Link
              href={"/Contactme"}
              class="relative before:z-10 before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-gray-900 before:px-3 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute  after:-right-[0.8rem] after:top-1/2 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-gray-700 after:border-l-transparent after:border-b-transparent after:border-t-transparent after:invisible hover:before:visible hover:after:visible"
              data-tip="Contact me &#9742;"
            >
              <IoCall />
            </Link>
          </li>
        </ul>
        <br />
      </div>

      <div className={classes.smenu} onClick={()=>SetShow(true)}>
        <BiMenu />
      </div>




      <div className={classes.smenushow} style={{
        display:show?"flex":"none"
      }}>


        <div className={classes.menuBox}>
          <div className={classes.up}>
            <h1>Menu</h1>
            <AiOutlineClose
            onClick={()=>SetShow(false)}
              style={{
                color: "white",
                fontSize: 22,
              }}
            />
          </div>
          <ul className={classes.sidebaricon}>
            <li onClick={()=>SetShow(false)}>
              <Link href={"/Startup"} data-tip="Start to ready &#128588;">
                <CgProfile /> <p>Profile</p>
              </Link>
            </li>
            <li onClick={()=>SetShow(false)}>
              <Link href={"about"} data-tip="About me &#128526;">
                <SiAboutdotme /> <p>About me</p>
              </Link>
            </li>
            <li onClick={()=>SetShow(false)}>
              <Link href={"/myprojects"} data-tip="My projects &#128642;">
                <SiTorproject /> <p>My projects</p>
              </Link>
            </li>
            <li onClick={()=>SetShow(false)}> 
              <Link href={"/chat"} data-tip="Message me &#128238;">
                <SiGooglechat /> <p>Message</p>
              </Link>
            </li>
            <li onClick={()=>SetShow(false)}>
              <Link href={"/Contactme"} data-tip="Contact me &#9742;">
                <IoCall /> <p>Contact</p>
              </Link>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </>
  );
};

export default NavBar;
