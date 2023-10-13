import styled from "styled-components";

export const HeaderStyle = styled.div`
  border-bottom: 1px solid var(--outline);
  background-color: var(--primaryBg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 999;
  transition: height 0.3s ease;
  padding: 0 5rem;

  .header_container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo:hover{
    opacity: 0.7;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  .btn_container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 768px){
    .header_container{
    display: block;
  }
    .logo_container{
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .btn_container{
        display: none;
    }

    .logo:hover{
    opacity: 0.9;
  }
  }
`;
