import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const GetStartedWaitlistBtn = ({innertext}) => {
  // const router = useRouter();
  // const WaitListCompoRoute = ()  => {
  //   router.push("/#WaitListForm")
  // }
  const WaitListCompoRoute = () => {
    const element = document.getElementById('WaitListForm');
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <ButtonStyle>
        <button onClick={WaitListCompoRoute}>{innertext}</button>
    </ButtonStyle>
  )
}

export default GetStartedWaitlistBtn;

export const ButtonStyle = styled.div`
 button{
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
  }

  button:hover {
    background-color: var(--secondaryFun);
    border: 1px solid var(--secondaryFun);
    border-bottom: 5px solid var(--primary);
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px){
    button{
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
`