import styled from "styled-components";

export const HeroStyle = styled.div`
  margin: 7.5rem 3rem 6rem 3rem;
  background-color: var(--plain);
  padding: 3rem;
  border-radius: 32px;

  .img_container_mobile, .img_container_tablet {
    display: none;
  }

  .hero_component_outter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 2rem;
  }

  .img_container_desktop, .img_container_mobile{
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 70/45;
    /* margin: 0rem auto; */
  }

  .section_content_outter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 72px;
    color: var(--primary);
    width: 45vw;
    margin-bottom: 2rem;
  }

  .description {
    width: 30vw;
    font-size: 22px;
    color: var(--gray);
    margin-bottom: 2rem;
  }

  .hero_img:hover {
    opacity: 0.9;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }
  @media only screen and (min-width: 2700px) {
    /* background-color: green; */
    margin: 7.5rem 10vw 6rem 10vw;
    /* padding: 5rem; */

  }


  @media only screen and (max-width: 1500px) {
    .title {
      font-size: 55px;
      width: 35vw;
      margin-bottom: 1rem;
    }

    .description {
      width: 30vw;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 1250px) {
    margin: 6.5rem 2rem 5rem 2rem;
    padding: 2rem;

    .title {
      font-size: 55px;
      width: 35vw;
      margin-bottom: 1rem;
    }

    .description {
      width: 30vw;
      font-size: 20px;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 1150px) {
    margin: 6.5rem 2rem 5rem 2rem;
    padding: 2rem;

    .title {
      font-size: 50px;
      width: 35vw;
      margin-bottom: 1rem;
    }

    .description {
      width: 35vw;
      font-size: 17px;
      margin-bottom: 1rem;
    }

  }

  @media only screen and (max-width: 900px) {
    margin: 5.5rem 1rem 3rem 1rem;
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

    .img_container_desktop,
    .img_container_tablet {
      display: none;
    }

    .section_content_outter {
      display: block;
    }

    .title {
      font-size: 31.74px;
      width: 90vw;
      margin-bottom: 1rem;
      text-align: center;
    }

    .description {
      width: 90vw;
      font-size: 16.87px;
      margin-bottom: 1rem;
      text-align: center;
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
  }
`;
