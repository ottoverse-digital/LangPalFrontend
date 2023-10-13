import styled from "styled-components";

export const HausaIntroStyles = styled.div`
  margin: 4rem 3rem 6rem 3rem;
  background-color: transparent;
  padding: 3rem;
  border-radius: 32px;

  .hero_component_outter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 10%;
  }

  .section_content_outter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img_container{
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 70/45;
  }

  .title {
    font-size: 50px;
    color: var(--secondary);
    width: 45vw;
    margin-bottom: 2rem;
  }

  .description {
    width: 38vw;
    font-size: 22px;
    margin-bottom: 2rem;
    background-color: var(--lightSecondary);
    color: var(--secondary);
    padding: 1rem;
    border-radius: 8px;
  }

  .hero_img:hover {
    opacity: 0.9;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  @media only screen and (max-width: 1500px) {
    padding: 0rem;

    .hero_component_outter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.5%;
  }

  .img_container{
    position: relative;
    width: 100%;
    max-width: 700px;
    aspect-ratio: 70/45;
  }

    .title {
      font-size: 40px;
      width: 30vw;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 20px;
      width: 40vw;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 1250px) {
    margin: 6.5rem 2rem 5rem 2rem;

    .title {
      font-size: 45px;
      width: 45vw;
      margin-bottom: 1rem;
    }

    .description {
      width: 45vw;
      font-size: 17px;
      margin-bottom: 2rem;
    }

  }

  @media only screen and (max-width: 1150px) {
    margin: 6.5rem 2rem 5rem 2rem;

    .img_container{
    max-width: 450px;
  }

    .title {
      font-size: 27px;
      width: 43vw;
      margin-bottom: 1rem;
    }

    .description {
      width: 40vw;
      font-size: 15px;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
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

    .img_container{
      margin-bottom: 1rem;
      max-width: 900px;
    }

    .hero_img:hover {
      opacity: 1;
    }

    .section_content_outter {
      display: block;
      margin-left: auto;
      margin-right: auto;
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
      padding: 1rem;
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
