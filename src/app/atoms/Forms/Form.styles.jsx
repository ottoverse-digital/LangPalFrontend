import styled from "styled-components";

export const WaitlistModalStyles = styled.div`
      .waitlist_form_container {
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 70/45;
    background-color: var(--lightPrimary);
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 32px;
    border: 1px solid var(--lightPrimary);
  }

  .form_description {
    font-size: 16px;
    margin-bottom: 0.5rem;
    color: var(--gray);
    border-radius: 8px;
    text-align: center;
  }

  .client-contact-detail label {
    font-size: 16px;
    display: block;
    margin-bottom: 0.3rem;
    color: var(--gray);
    font-weight: 900;
  }

  .input_form {
    font-size: 16px;
    color: var(--neutral);
    height: 3rem;
    margin-bottom: 1.5rem;
    width: 100%;
    height: 3rem;
    border-radius: 8px;
    border: 1px solid var(--stroke);
    background-color: var(--plain);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1rem;
  }

  .info-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.7rem;
  }

  .client-contact-detail input:focus {
    outline: none;
  }

  .client-contact-detail input::placeholder {
    color: var(--stroke);
  }

  /* Form validation UI */
  .invalid input{
    border-color: var(--lightRed);
  }

  .error-msg {
    color: var(--darkRed);
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  button.submit_btn {
    background-color: var(--primary);
    color: var(--plain);
    transition: all 0.5s ease-out;
    background-position: right bottom;
    border: 1px solid var(--primary);
    border-bottom: 5px solid var(--coolAmber);
    text-align: center;
    padding: 0.5rem 1.5rem;
    border-radius: 14px;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.1rem;
  }

  button.submit_btn:hover {
    background-color: var(--secondaryFun);
    border: 1px solid var(--secondaryFun);
    border-bottom: 5px solid var(--primary);
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  button.submit_btn:disabled,
  button.submit_btn:disabled:hover,
  button.submit_btn:disabled:active {
    cursor: not-allowed;
    background-color: var(--stroke);
    border: 1px solid var(--stroke);
    border-bottom: 5px solid var(--primary);
    border-radius: 14px;
    color: var(--neutral);
  }

  @media only screen and (max-width: 1500px) {
    .form_description {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 1150px) {
    .form_description {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 900px) {
    .waitlist_form_container {
      height: 430px;
    }

    .form_description {
      font-size: 15px;
    }

    button.submit_btn {
      padding: 0.5rem 1.5rem;
      width: 97.5%;
      border-radius: 8px;
      margin-top: 0rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .waitlist_form_container {
      height: 400px;
    }

    button.submit_btn {
      width: 100%;
    }
    
  }


  @media only screen and (max-width: 550px) {
    .waitlist_form_container {
      padding: 1rem;
      height: 420px;
    }

  }

      @media (max-width: 345px) {
        .form_description, .client-contact-detail label, .input_form, .error-msg{
    font-size: 13px;
  }

  .sub_title{
    font-size: 10px;
  }


    }


`

export const WaitlistStyles = styled.div`
  .waitlist_form_container {
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 70/45;
    background-color: var(--lightSuccess);
    padding: 2rem 3rem;
    border-radius: 32px;
    border: 1px solid var(--lightSuccess);
  }

  .form_description {
    font-size: 22px;
    margin-bottom: 1.5rem;
    color: var(--gray);
    border-radius: 8px;
  }

  .client-contact-detail label {
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

  .info-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.7rem;
  }

  .client-contact-detail input:focus {
    outline: none;
  }

  .client-contact-detail input::placeholder {
    color: var(--stroke);
  }

  /* Form validation UI */
  .invalid input,
  .invalid textarea {
    border-color: var(--lightRed);
  }

  .error-msg {
    color: var(--darkRed);
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  button.submit_btn {
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
  button.submit_btn:disabled:active {
    cursor: not-allowed;
    background-color: var(--stroke);
    border: 1px solid var(--stroke);
    border-bottom: 5px solid var(--leafy);
    border-radius: 14px;
    color: var(--neutral);
  }

  @media only screen and (max-width: 1500px) {
    .form_description {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 1150px) {
    .form_description {
      font-size: 17px;
    }
  }

  @media only screen and (max-width: 900px) {
    .waitlist_form_container {
      height: 430px;
    }

    .form_description {
      font-size: 16.87px;
      margin-bottom: 1rem;
    }

    button.submit_btn {
      padding: 0.5rem 1.5rem;
      width: 97.5%;
      border-radius: 8px;
      margin-top: 0rem;
    }
  }

  @media only screen and (max-width: 500px) {
    .waitlist_form_container {
      padding: 1rem;
    }
  }
`;
