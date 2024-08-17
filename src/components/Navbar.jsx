import logo from "../assets/ss2.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import React from 'react'

const Navbar = () => {
  return <nav className="  mb-20 flex items-center justify-between py-6 ">
    <div className= "flex flex-shrink-0 items-center">
        <img className="mx-2 w-40" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/siddharth-srivastava1000/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Prabhu6392">
        <FaGithub/>
      </a>
      <a href="https://x.com/Prax1000">
        <FaSquareXTwitter/>
      </a>
      <a href="https://www.instagram.com/prax1000/">
        <FaInstagram/>
      </a>
    </div>
  </nav>
}

export default Navbar