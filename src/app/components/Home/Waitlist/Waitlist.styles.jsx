import styled from "styled-components";

export const WaitlistStyles = styled.div`
  margin: 4rem 3rem 6rem 3rem;
  background-color: var(--plain);
  padding: 3rem;
  border-radius: 32px;

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
    width: 45vw;
    margin-bottom: 1rem;
  }

  .sub_title{
    width: 30vw;
    font-size: 22px;
    color: var(--gray);
    margin-bottom: 1.5rem;
  }

  .waitlist_benefits{
    color: var(--success);
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 1rem;
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
  }

  .waitlist_form_container{
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 70/45;
    background-color: var(--lightSuccess);
    padding: 2rem 3rem;
    border-radius: 32px;
    border: 1px solid var(--lightSuccess);
  }


  .form_description{
    font-size: 22px;
    margin-bottom: 1.5rem;
    color: var(--gray);
    border-radius: 8px;

  }

  .client-contact-detail label{
    font-size: 16px;
    display: block;
    margin-bottom: 0.3rem;
    color: var(--success);
    font-weight: 900;
  }

.input_form {
    font-size: 16px;
    color: var(--neutral);
    height: 3rem;
    margin-bottom: 1.5rem;
    width: 97.8%;
    height: 3rem;
    border-radius: 8px;
    border: 1px solid var(--stroke);
    background-color: var(--plain);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1rem;
  }


  .info-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.7rem;
  }

  .client-contact-detail input:focus{
    outline: none;
  }

  .client-contact-detail input::placeholder {
    color: var(--stroke);
  }

   /* Form validation UI */
   .invalid input, .invalid textarea{
    border-color: var(--lightRed);
  }

  .error-msg{
    color: var(--darkRed);
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  button.submit_btn{
        background-color: var(--success);
        color: var(--plain);
    transition: all 0.5s ease-out;
    background-position: right bottom;
    border: 1px solid var(--success);
    border-bottom: 5px solid var(--leafy);
    text-align: center;
    padding: 0.5rem 1.5rem;
    border-radius: 14px;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  button.submit_btn:hover {
    background-color: var(--darkSuccess);
    border: 1px solid var(--darkSuccess);
    border-bottom: 5px solid var(--success);
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  button.submit_btn:disabled,
  button.submit_btn:disabled:hover,
  button.submit_btn:disabled:active{
    cursor: not-allowed;
    background-color: var(--stroke);
    border: 1px solid var(--stroke);
    border-bottom: 5px solid var(--leafy);
    border-radius: 14px;
    color: var(--neutral);
  }

  @media only screen and (max-width: 1500px) {
    .title {
      font-size: 45px;
      width: 35vw;
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

    .form_description{
        font-size: 20px;
    }

  }

  @media only screen and (max-width: 1250px) {
    margin: 6.5rem 2rem 5rem 2rem;

    .title {
      font-size: 45px;
      width: 45vw;
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
      width: 33vw;
    }

    .sub_title {
      width: 35vw;
      font-size: 17px;
    }

    .description {
      width: 33vw;
      font-size: 15px;
    }

    .form_description{
        font-size: 17px;
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

    .section_content_outter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      font-size: 31.74px;
      width: 90vw;
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

    .waitlist_form_container{
    height: 430px;
  }

    .form_description{
        font-size: 16.87px;
        margin-bottom: 1rem;
    }

    button.submit_btn{
        padding: 0.5rem 1.5rem;
    width: 97.5%;
    border-radius: 8px;
    margin-top: 0rem;

  }



  }

  @media only screen and (max-width: 500px) {
    .title {
      font-size: 22px;
      margin-top: -0.5rem;
    }

    .sub_title, .description {
      font-size: 15px;
      margin-bottom: 0.5rem;
    }

    .waitlist_form_container{
    padding: 1rem;
  }

  }
`;
