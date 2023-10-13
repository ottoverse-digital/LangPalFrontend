import React from "react";
import { HeroStyle } from "./hero.styles";
import Image from "next/image";
import HeroImg from "../../../../assets/Images/HeroImg.png";
import GetStartedWaitlistBtn from "@/app/atoms/GetStartedWaitlistBtn";

const Hero = () => {
  return (
    <HeroStyle>
      <div>
        <div className="hero_component_outter">
          <div className="img_container_mobile">
          <Image
              src={HeroImg}
              alt="LangPal Hero"
              className="hero_img"
              fill
              sizes="(max-width: 900px) 100vw, 700px"
              priority
          />
          </div>
          <div className="section_content_outter">
            <div className="section_content">
              <h1 className="title">Learn languages the fun way!</h1>
              <p className="description">
                Sick of boring old language lessons? Say hello to LangPal - the
                app that makes learning Nigerian languages crazy fun.
              </p>
              <div className="button_container">
                <GetStartedWaitlistBtn innertext={"Get started"}/>
              </div>
            </div>
          </div>
          <div className="img_container_desktop">
              <Image
              src={HeroImg}
              alt="LangPal Hero"
              className="hero_img"
              fill
              sizes="(max-width: 900px) 100vw, 700px"
              priority
            />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
