import styled from "styled-components";

export const AppStoreStyles = styled.div`
  margin: 5rem 3rem 6rem 3rem;
  padding: 3rem;
  border-radius: 32px;

  .hero_component_outter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 2rem;
  }

  .section_content_outter {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 25%;
  }

  .title {
    font-size: 40px;
    color: var(--neutral);
    margin-bottom: 1rem;
  }

  .description {
    font-size: 22px;
    color: var(--gray);
    margin-bottom: 2rem;
  }

  .store_btn_container {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
  }

  .store_btn_outter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .app_intro {
    text-transform: uppercase;
    font-size: 0.7rem;
    text-align: left;
  }

  .app_name {
    text-transform: capitalize;
    text-align: left;
  }

  .store_option {
    display: flex;
    flex-direction: row;
    column-gap: 0.2rem;
    background-color: var(--lightFun);
    color: var(--neutral);
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    border-radius: 50px;
  }

  .store_option:hover {
    background-color: var(--primary);
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  .store_icon_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .store_icon {
    font-size: 2rem;
  }

  .app_demo_section {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    margin: 0 2rem;
    justify-content: center;
    align-items: center;
  }

  .img_container {
    position: relative;
    width: 100%;
    max-width: 350px;
    height: 600px;
    aspect-ratio: 70/45;
  }

  .img_wrap {
    background-color: var(--lightFun);
    padding: 3vh 5vw 0 5vw;
    /* padding: 3rem 5rem 0 5rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    position: relative;
    z-index: 2;
  }

  .img_container_outter:nth-of-type(2) {
    margin-top: 8rem;
  }

  .app_demo:hover {
    opacity: 0.9;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  .app_content {
    background-color: var(--plain);
    z-index: 1;
    margin-top: -0.8rem;
    padding: 2rem 1rem;
    position: relative;
    border-radius: 0 0 16px 16px;
  }

  .app_title {
    color: var(--neutral);
    font-weight: 900;
    font-size: 24px;
  }

  .app_subtitle {
    color: var(--blackboard);
    font-size: 16px;
  }

  @media only screen and (max-width: 1700px){
  .img_wrap {
    padding: 2vh 3vw 0 3vw;
  }
  }

  @media only screen and (max-width: 1500px) {
    .section_content_outter {
      padding: 0 15%;
    }

    .title {
      font-size: 40px;
      margin-bottom: 1rem;
    }

    .description {
      margin-bottom: 2rem;
    }

    .img_wrap {
    padding: 2vh 3vw 0 3vw;
  }

  .img_container {
    max-width: 300px;
    height: 500px;
  }

  .img_container_outter:nth-of-type(2) {
    margin-top: 6rem;
  }

  .app_content {
    padding: 2rem 1rem;
  }

  .app_title {
    color: var(--neutral);
    font-weight: 900;
    font-size: 20px;
  }

  .app_subtitle {
    color: var(--blackboard);
    font-size: 14px;
  }


  }

  @media only screen and (max-width: 1250px) {
    margin: 5rem 2rem 5rem 2rem;
    padding: 2rem;

    .title {
      font-size: 40px;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 20px;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 1150px) {
    margin: 4rem 2rem 5rem 2rem;
    padding: 2rem;

    .section_content_outter {
      padding: 0 5%;
    }

    .title {
      font-size: 40px;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 17px;
      margin-bottom: 1rem;
    }

    .img_wrap {
    padding: 1.7vh 3vw 0 3vw;
  }

  .img_container {
    max-width: 250px;
    height: 430px;
  }

  }

  @media only screen and (max-width: 960px) {
    .app_demo_section {
    column-gap: 1.5%;
  }

    .img_wrap {
    padding: 1.5vh 2vw 0 2vw;
  }

  .img_container {
    max-width: 250px;
    height: 430px;
  }

  }

  @media only screen and (max-width: 900px) {
    margin: 4rem 1rem 3rem 1rem;
    padding: 0rem;

    .section_content_outter {
      padding: 0%;
    }

    .hero_component_outter {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hero_img:hover {
      opacity: 1;
    }

    .img_container_mobile {
      display: block;
      margin-bottom: 1rem;
    }

    .img_container_desktop,
    .img_container_tablet {
      display: none;
    }

    .section_content_outter {
      display: block;
    }

    .title {
      font-size: 31.74px;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 16.87px;
      margin-bottom: 1rem;
    }

    .store_option {
    margin-bottom: 2rem;
  }

    .app_demo_section {
    flex-direction: column;
    row-gap: 1rem;
    margin: 0 2rem;
  }

  .img_container {
    max-width: 350px;
    height: 600px;
  }

  .img_wrap {
    padding: 3vh 5vw 0 5vw;
  }

  .img_container_outter:nth-of-type(2) {
    margin-top: 0rem;
  }

  .app_content {
    padding: 1.8rem 1rem;
  }

  .app_title {
    font-size: 20px;
  }

  .app_subtitle {
    font-size: 15px;
  }
  }

  @media only screen and (max-width: 500px) {
    .store_btn_container {
      flex-direction: column;
      row-gap: 0.8rem;
    }

    .store_option {
      width: 95vw;
      justify-content: center;
      align-items: center;
      margin-bottom: 0rem;
    }

    .apple_store {
    margin-bottom: 1.5rem;
  }

    .app_title {
    font-size: 18px;
  }
  

  }

  @media only screen and (max-width: 425px) {
    .title {
      font-size: 22px;
      margin-bottom: 0.5rem;
    }

    .description {
      font-size: 15px;
    }

    .app_demo_section {
    margin: 0 2%;
  }

  .img_container {
    max-width: 270px;
    height: 470px;
  }

  .img_wrap {
    padding: 3vh 5vw 0 5vw;
  }

  }
`;
