import styled from "styled-components";

export const TeamStyles = styled.div`
  margin: 4rem 3rem 6rem 3rem;
  padding: 3rem;
  border-radius: 32px;

  .hero_component_outter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1rem;
  }

  .section_content_outter{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .member_container_outter {
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .content {
    text-align: center;
    padding: 0 25%;
  }

  .title {
    font-size: 64px;
    color: var(--neutral);
    margin-bottom: 1rem;
  }

  .description {
    font-size: 22px;
    margin-bottom: 1rem;
    color: var(--gray);
  }

  .photo_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    padding: 2rem 0 5rem 0;
  }

  .photo_container2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    padding: 0rem 0 5rem 0;
  }

  .img_holder {
    position: relative;
    width: 100%;
    max-width: 300px;
    height: 280px;
    aspect-ratio: 70/45;
  }
  .member_photo {
    /* filter: grayscale(1); */
    animation: photoAnimation 1s ease-in;
    animation-iteration-count: 1;
    background-position: right bottom;
    transition: all 0.3s ease-in-out;
  }

  @keyframes photoAnimation {
    0% {
      transform: scale(0, 0.25);
    }
    50% {
      transform: scale(1, 0.25);
    }
  }

  .member_photo:hover {
    transform: scale(1.05);
    /* filter: grayscale(0); */
    cursor: pointer;
  }

  .member_info {
    padding-top: 1rem;
  }

  .member_name {
    color: var(--neutral);
    font-size: 24px;
  }

  .role {
    color: var(--gray);
    font-size: 16px;
  }

  @media only screen and (max-width: 1500px) {
    .content {
    text-align: center;
    padding: 0 15%;
  }

    .title {
      font-size: 45px;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 20px;
    }
    

  }

  @media only screen and (max-width: 1250px) {
    margin: 6.5rem 3rem 5rem 3rem;

    .title {
      font-size: 45px;
    }

    .description {
      font-size: 17px;
    }
  }

  @media only screen and (max-width: 1150px) {
    margin: 6.5rem 2rem 5rem 2rem;

    .photo_container {
    grid-gap: 2rem;
  }

  .photo_container2 {
    grid-gap: 2rem;
  }

    .title {
      font-size: 30px;
      margin-bottom: 0.5rem;
    }

    .description {
      font-size: 15px;
      margin-bottom: 0.5rem;
    }

    .img_holder {
    max-width: 260px;
    height: 250px;
  }

    .member_name {
    font-size: 20px;
  }

  .role {
    font-size: 14px;
  }


  }

  @media only screen and (max-width: 900px) {
    margin: 4rem 1rem 3rem 1rem;

    .title {
      font-size: 31.74px;
    }

    .description {
      font-size: 16.87px;
    }

    .img_holder {
    max-width: 220px;
    height: 210px;
  }

  }

  @media only screen and (max-width: 768px) {
    .content {
    padding: 0 3%;
  }

    .img_holder {
    max-width: 380px;
    height: 350px;
  }

    .photo_container {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
    padding: 2rem 0 1.5rem 0;
  }

  .photo_container2 {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
  }

  .member_info {
    padding-top: 0.5rem;
  }


  }

  @media only screen and (max-width: 500px) {
    .title {
      font-size: 22px;
      margin-top: -0.5rem;
    }

    .description {
      font-size: 13px;
      margin-bottom: 0.5rem;
    }
  }


  @media only screen and (max-width: 425px) {
    .content {
    padding: 0;
  }

    .img_holder {
    max-width: 290px;
    height: 270px;
  }

  }


  
`;
