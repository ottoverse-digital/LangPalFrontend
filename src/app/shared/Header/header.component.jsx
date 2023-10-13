import React from 'react';
import {HeaderStyle} from "./header.styles.jsx";
import Image from 'next/image';
import Logo from "../../../assets/Images/Logo.svg";
import GetStartedBtn from '@/app/atoms/GetStartedBtn.jsx';
import { useRouter } from 'next/router.js';

const Header = () => {
  const router = useRouter();
  const homeRoute = () => {
    router.push("/");
  }
  return (
    <HeaderStyle>
      <div>
        <div className="header_container">
        <div className="logo_container" onClick={homeRoute}>
        <Image src={Logo} width={100} height={70} alt='LangPal Logo' className='logo'/>
        </div>
        <div className="btn_container">
        <GetStartedBtn/>
        </div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header;