import React from "react";
import { AppStoreStyles } from "./appStore.styles";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import Image from "next/image";
import LangPalMobileDemo from "../../../../../LangPalData.json";

const AppStore = () => {
  return (
    <AppStoreStyles>
      <div>
        <div className="section_content_outter">
          <div className="section_content">
            <h1 className="title">Coming to your App Stores</h1>
            <p className="description">
              With LangPal, you'll learn to introduce yourself, chat about
              family and food, get directions, and build storytelling skills.
              All while playing fun games and conversing with native speakers.
            </p>
            <div className="store_btn_outter">
              <div className="store_btn_container">
                <div className="google_container">
                  <div>
                    <div className="store_option google_store">
                      <div className="store_icon_container">
                        <div>
                          <IoLogoGooglePlaystore className="store_icon" />
                        </div>
                      </div>
                      <div>
                        <p className="app_intro">get it on</p>
                        <h3 className="app_name">google play</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="apple_container">
                  <div className="store_option apple_store">
                    <div className="store_icon_container">
                      <div>
                        <IoLogoAppleAppstore className="store_icon" />
                      </div>
                    </div>
                    <div>
                      <p className="app_intro">download on the</p>
                      <h3 className="app_name">app store</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app_demo_section">
            {LangPalMobileDemo.AppDemo.map((mobile) => {
              return (
                <div className="img_container_outter" key={mobile.key}>
                    <div>
                    <div className="img_wrap">
                    <div className="img_container">
                  <Image
                    src={mobile.imgUrl}
                    alt="LangPal mobile"
                    className="app_demo"
                    fill
                    sizes="(max-width: 900px) 100vw, 700px"
                    priority
                    quality={100}
                  />
                </div>
                    </div>
                  <div className="app_content">
                  <p className="app_title">{mobile.title}</p>
                  <p className="app_subtitle">{mobile.content}</p>
                  </div>
                    </div>
                </div>
              );
            })}
          </div>
      </div>
    </AppStoreStyles>
  );
};

export default AppStore;
