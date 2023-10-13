import React from "react";
import { HausaIntroStyles } from "./hausaIntro.styles";
import Image from "next/image";
import HausaHero from "../../../../assets/Images/HausaHero.png";

const HausaIntro = () => {
  return (
    <HausaIntroStyles>
      <div>
        <div className="hero_component_outter">
          <div className="img_container">
            <Image
              src={HausaHero}
              alt="LangPal Hero"
              className="hero_img"
              fill
              sizes="(max-width: 900px) 100vw, 700px"
              priority
            />
          </div>
          <div className="section_content_outter">
            <div className="section_content">
              <h1 className="title">Fun Way to Learn Nigeria's Languages</h1>
              <p className="description">
                With LangPal, you'll learn everything from greetings and
                shopping to travel and stories in Igbo, Yoruba, Hausa and more.
              </p>
              <p className="description">
                How? Through interactive games, viral videos, and conversations
                with real people.
              </p>
              <p className="description">
                Stop snoozing through textbooks. Start speaking like a local
                with LangPal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HausaIntroStyles>
  );
};

export default HausaIntro;
