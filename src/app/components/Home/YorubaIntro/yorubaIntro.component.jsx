import React from "react";
import { YorubaIntroStyles } from "./yorubaIntro.styles";
import Image from "next/image";
import YorubaHero from "../../../../assets/Images/YorubaHero.png";
import PlayData from '../../../../../LangPalData.json';
import {BiSolidCheckCircle} from "react-icons/bi";

const YorubaIntro = () => {
  return (
    <YorubaIntroStyles>
      <div>
        <div className="hero_component_outter">
        <div className="img_container_mobile">
          <Image
              src={YorubaHero}
              alt="LangPal Hero"
              className="hero_img"
              fill
              sizes="(max-width: 900px) 100vw, 700px"
              priority
          />
        </div>
        <div className="section_content_outter">
        <div className="section_content">
          <h1 className="title">Learn Through Play</h1>
          <p className="sub_title">
          LangPal makes mastering a language feel like playing instead of studying. Some of the games you'll find inside:
          </p>
          {PlayData.LearnThroughPlay.map((list) => {
            return(
                <div className="list_container" key={list.id}>
                    <BiSolidCheckCircle className="check_icon"/>
                    <p className="description">
                        <span className="section_span">{list.title}</span>
                        {list.content}
                    </p>
                </div>
            )
          })}
        </div>
        </div>
        <div className="img_container_desktop">
              <Image
              src={YorubaHero}
              alt="LangPal Hero"
              className="hero_img"
              fill
              sizes="(max-width: 900px) 100vw, 700px"
              priority
            />
        </div>
        </div>
      </div>
    </YorubaIntroStyles>
  );
};

export default YorubaIntro;
