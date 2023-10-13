import React from 'react';
import ReactDom from 'react-dom';
import styled from "styled-components";
import {AiFillCloseCircle} from "react-icons/ai";
import {MdOutlineClose} from "react-icons/md";

const Modal = ({onClose, children, title}) => {
    const closeModalHandler = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
          <ModalStyle>
            <div className="modal_overlay">
            <div className="interior_container">
            <div className="modal_interior">
                <div className="modal">
                    <div className="modal_header">
                        <div className="cancel_icon show_mobile" onClick={closeModalHandler}><MdOutlineClose/></div>
                        </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal_body">{children}</div>
                </div>
            </div>
            <div className="modal_close">
            <div className="cancel_icon show_desktop" onClick={closeModalHandler}><AiFillCloseCircle/></div>
            </div>
            </div>
        </div>
          </ModalStyle>
    )

  return ReactDom.createPortal (
    modalContent,
    document.getElementById("modal_root")
  );
};

export default Modal

export const ModalStyle = styled.div`
.modal_overlay {
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #888888;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./assets/images/cardmapr-nl-s8F8yglbpjo-unsplash.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-position: right bottom;
    transition: all 0.5s ease;

}

.interior_container{
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
}

.modal_interior {
  background-color: #ffffff;
    background-position: right bottom;
    transition: all 0.5s ease;
    padding: 20px 5px;
    margin: auto;
    border-radius: 1rem; 
    border: 1px solid #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 500px;
    height: 650px;
}

.modal {
  background: var(--plain);
  height:100%;
  width:100%;
  border-radius: 15px;
  padding: 15px;
}

.modal-body {
  padding-top: 10px;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
}

.sub_title{
    text-align: center;
  }

.cancel_icon{
    float: right;
    color: var(--plain);
    font-weight: 900;
    font-size: 2rem;
  }

  .show_mobile{
    display: none;
  }

  .cancel_icon:hover{
    cursor: pointer;
    opacity: 0.9;
    
  }


.title{
  text-align: center;
  color: var(--primary);
}


  @media screen and (max-width: 768px){
    .modal_interior {
    /* padding: 20px; */
    width: 500px;
    height: 630px;
}

.interior_container{
    display: block;
    /* column-gap: 0rem; */
}

    .show_mobile{
    display: block;
    color: var(--neutral);
  }

  .show_desktop{
    display: none;
  }

  .title{
font-size: 25px;
}

  }

@media screen and (max-width: 550px){
  .modal_interior {
    /* padding: 2% 1%; */
    margin: auto;
    width: 90vw;
    height: 680px;
}

.modal {
  padding: 5px 10px;
}
}

@media (max-width: 345px) {
  .modal_interior {
    /* width: 95%; */
    height: 650px;
}

.title{
font-size: 15px;
}

.sub_title{
  font-size: 14px;
}

.description{
  font-size: 10px;
}


}
`
