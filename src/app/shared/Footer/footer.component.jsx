import React from 'react';
import { FooterStyle } from './footer.styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const teamRouteHandler = () => {
    router.push("Team");
  }
  return (
    <FooterStyle>
        <div>
            <div className="footer_content">
            <ul className="about_us">
              <li className='menu_title'>About us</li>
              <Link href={""} className='item_link'><li className='menu_item'>Our mission</li></Link>  
              <li onClick={teamRouteHandler} className='menu_item'>Team</li>
              {/* <Link href={""} className='item_link'><li className='menu_item'>Team</li></Link> */}
              <Link href={""} className='item_link'><li className='menu_item'>Contact us</li></Link> 
              <Link href={""} className='item_link'><li className='menu_item'>FAQ</li></Link>
            </ul>
            <ul className="apps_store">
              <li className='menu_title'>Apps</li>
              <Link href={""} className='item_link'><li className='menu_item'>LangPal for Android</li></Link>  
              <Link href={""} className='item_link'><li className='menu_item'>LangPal for iOS</li></Link>
            </ul>
            <ul className="privacy_and_terms">
              <li className='menu_title'>Privacy and terms</li>
              <Link href={""} className='item_link'><li className='menu_item'>Terms</li></Link>  
              <Link href={""} className='item_link'><li className='menu_item'>Privacy</li></Link>
            </ul>
            <ul className="social">
              <li className='menu_title'>Social</li>
              <a target='blank' href={"https://www.instagram.com/langpalng/"} className='item_link'><li className='menu_item'>Instagram</li></a>
              <a target='blank' href={"https://twitter.com/LangPalNG"} className='item_link'><li className='menu_item'>Twitter</li></a>
              <a target='blank' href={"https://linkedin.com/company/langpal"} className='item_link'><li className='menu_item'>LinkedIn</li></a>
              {/* <a target='blank' href={""} className='item_link'><li className='menu_item'>Blog</li></a>   */}
              {/* <a target='blank' href={""} className='item_link'><li className='menu_item'>Facebook</li></a>  */}
              {/* <a target='blank' href={""} className='item_link'><li className='menu_item'>YouTube</li></a> */}
            </ul>
            </div>
        </div>
    </FooterStyle>
  )
}

export default Footer