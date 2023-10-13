import React from "react";
import { TeamStyles } from "./Team.styles";
import LangPalTeamInfo from "../../../../LangPalData.json";
import Image from "next/image";

const Team = () => {
  return (
    <TeamStyles>
      <div>
        <div className="langpal_team">
          <div className="section_content_outter">
            <div className="content">
              <h1 className="title">The team</h1>
              <p className="description">
                Meet the Brains Behind LangPal<br></br>
                LangPal was created by a team of educators, technologists and
                thinkers obsessed with language learning.
              </p>
            </div>
          </div>
          <div className="member_container_outter">
          <div className="photo_container">
          {LangPalTeamInfo.TeamMembers1.map((member) => {
            return (
              <div key={member.id}>
                <div className="img_holder">
                <Image
                  src={member.imgUrl}
                  className="member_photo"
                  alt="member photo"
                  fill
                  sizes="(max-width: 900px) 100vw, 700px"
                  quality={100}
                />
                </div>
                <div className="member_info">
                <h2 className="member_name">{member.name}</h2>
                <p className="role">{member.role}</p>
                </div>
              </div>
            );
          })}
          </div>
          </div>
          <div className="member_container_outter">
          <div className="photo_container2">
        {LangPalTeamInfo.TeamMembers2.map((member) => {
            return (
              <div key={member.id}>
                <div className="img_holder">
                <Image
                  src={member.imgUrl}
                  className="member_photo"
                  alt="member photo"
                  fill
                  sizes="(max-width: 900px) 100vw, 700px"
                  quality={100}
                />
                </div>
                <div className="member_info">
                <h2 className="member_name">{member.name}</h2>
                <p className="role">{member.role}</p>
                </div>
              </div>
            );
          })}
           </div>
              </div>
        </div>
      </div>
    </TeamStyles>
  );
};

export default Team;
