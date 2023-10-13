import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../molecules/Modal";
import WaitlistModalForm from "./Forms/WaitListModalForm.component";

const GetStartedBtn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ButtonStyle>
      <button onClick={() => setShowModal(true)}>Get started</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <div className="section_content_outter">
        <div className="section_content">
          <h1 className="title">Join the LangPal Waitlist</h1>
          <p className="sub_title">
          Thank you for your interest in LangPal! We are currently in private beta testing. 
            <br/><br/>
            If you'd like to be notified when LangPal opens up to new users, please join our waitlist below.
          </p>
        </div>
        </div>
        <WaitlistModalForm/>
        </Modal>
      )}
    </ButtonStyle>
  );
};

export default GetStartedBtn;

export const ButtonStyle = styled.div`
  button {
    background-color: var(--primary);
    color: var(--plain);
    transition: all 0.5s ease-out;
    background-position: right bottom;
    border: 1px solid var(--primary);
    border-bottom: 5px solid var(--coolAmber);
    text-align: center;
    padding: 0.45rem 1.5rem;
    border-radius: 14px;
    font-weight: 500;
    font-size: 1rem;
  }

  button:hover {
    background-color: var(--secondaryFun);
    border: 1px solid var(--secondaryFun);
    border-bottom: 5px solid var(--primary);
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 900px) {
    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      padding: 0.5rem 1.5rem;
      border-radius: 13.88px;
      font-weight: 500;
      font-size: 1rem;
      width: 100%;
    }

    
  }
`;
