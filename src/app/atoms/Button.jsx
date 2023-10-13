import React from 'react'
import styled from 'styled-components';

const Button = ({innertext}) => {
  return (
    <ButtonStyle>
        <button>{innertext}</button>
    </ButtonStyle>
  )
}

export default Button;

export const ButtonStyle = styled.div`
    button{
        background-color: var(--primary);
        color: var(--plain);
    transition: all 0.5s ease-out;
    background-position: right bottom;
    border: 1px solid var(--primary);
    text-align: center;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    font-weight: 500;
    font-size: 1rem;
  }

  button:hover {
    background-color: var(--secondaryFun);
    border: 1px solid var(--secondaryFun);
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }
`