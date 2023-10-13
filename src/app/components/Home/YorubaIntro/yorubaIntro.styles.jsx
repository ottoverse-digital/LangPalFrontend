import styled from "styled-components";

export const YorubaIntroStyles = styled.div`
  margin: 4rem 3rem 6rem 3rem;
  background-color: var(--plain);
  padding: 3rem;
  border-radius: 32px;

  .img_container_desktop, .img_container_mobile{
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 70/45;
  }

  .img_container_mobile {
    display: none;
  }

  .hero_component_outter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1rem;
  }

  .section_content_outter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 50px;
    color: var(--success);
    /* width: 45vw; */
    margin-bottom: 1rem;
  }

  .sub_title{
    width: 30vw;
    font-size: 22px;
    color: var(--gray);
    margin-bottom: 1.5rem;
  }

  .list_container{
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
  }

  .check_icon{
    color: var(--success);
    font-size: 22px;
    margin-top: 0.2rem;
  }

  .description {
    width: 38vw;
    font-size: 22px;
    margin-bottom: 1rem;
    color: var(--gray);
    border-radius: 8px;
  }

  .section_span{
    font-weight: 900;
}

  .hero_img:hover {
    opacity: 0.9;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  @media only screen and (max-width: 1500px) {
    .title {
      font-size: 45px;
      margin-bottom: 1rem;
    }

    .sub_title {
      width: 35vw;
      font-size: 20px;
    }

    .description {
      width: 35vw;
      font-size: 20px;
    }

  }

  @media only screen and (max-width: 1250px) {
    margin: 6.5rem 2rem 5rem 2rem;

    .title {
      font-size: 45px;
    }

    .sub_title {
      width: 45vw;
      font-size: 20px;
    }

    .description {
      width: 45vw;
      font-size: 17px;
    }


  }

  @media only screen and (max-width: 1150px) {
    margin: 6.5rem 2rem 5rem 2rem;

    .title {
      font-size: 30px;
    }

    .sub_title {
      width: 35vw;
      font-size: 17px;
    }

    .description {
      width: 33vw;
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 900px) {
    margin: 4rem 1rem 3rem 1rem;
    background-color: transparent;
    padding: 0rem;

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

    .img_container_desktop{
      display: none;
    }

    .section_content_outter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      font-size: 31.74px;
      margin-bottom: 0.5rem;
    }

    .sub_title {
      width: 95%;
      font-size: 16.87px;
      margin-bottom: 1rem;
    }

    .check_icon{
    font-size: 20px;
    margin-top: 0rem;
  }

    .description {
      width: 90%;
      font-size: 16.87px;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 425px) {
    .title {
      font-size: 22px;
      margin-top: -0.5rem;
    }

    .sub_title, .description {
      font-size: 15px;
      margin-bottom: 0.5rem;
    }

  }
`;
