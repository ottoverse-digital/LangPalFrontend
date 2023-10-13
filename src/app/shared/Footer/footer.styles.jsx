import styled from "styled-components";

export const FooterStyle = styled.div`
  margin: 4rem 0 0 0;
  background-color: var(--primary);
  padding: 4rem 25% 8rem 25%;

  a{
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  li:hover{
    cursor: pointer;
    color: var(--neutral);
  }

  .footer_content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .menu_title{
    color: var(--amber);
    font-weight: 900;
    font-size: 20px;
    padding-bottom: 0.5rem;
  }

  .menu_item{
    color: var(--amber);
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 0.5rem;
  }

  @media only screen and (max-width: 1500px) {
    margin: 2rem 0 0 0;
    padding: 3rem 15% 4rem 15%;
  }

  @media only screen and (max-width: 960px) {
    margin: 2rem 0 0 0;
  padding: 3rem 10% 4rem 10%;

  .menu_title{
    font-size: 16px;
  }

  .menu_item{
    font-size: 14px;
    padding-bottom: 0.25rem;
  }

  }

  @media only screen and (max-width: 768px) {
    margin: 2rem 0 0 0;
  padding: 2rem 5% 3rem 5%;

  }

  @media only screen and (max-width: 550px) {
    .footer_content{
        display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem; 
  padding: 0 1rem; 
  box-sizing: border-box;    
  }


  }

  @media only screen and (max-width: 375px) {
    padding: 2rem 2% 3rem 2%;

  }
`