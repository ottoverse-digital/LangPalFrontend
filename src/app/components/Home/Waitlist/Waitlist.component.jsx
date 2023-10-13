import React, { useRef } from "react";
import { WaitlistStyles } from "./Waitlist.styles";
import WaitList from '../../../../../LangPalData.json';
import useInputs from "../../../molecules/CustomHooks/useInputs";
import {BiSolidCheckCircle} from "react-icons/bi";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes('@');

const Waitlist = () => {
    const form = useRef();

     // Form validation with custom hooks
  const {
    value: nameValue, isValid: nameIsValid, hasError: nameHasError, valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, reset: nameReset
  } = useInputs(isNotEmpty);
  const {
    value: emailValue, isValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, reset: emailReset,
  } = useInputs(isEmail);

    // Form state jsx style classes
    const nameClasses = nameHasError ? "client-contact-detail invalid" : "client-contact-detail";
    const emailClasses = emailHasError ? "client-contact-detail invalid" : "client-contact-detail";

     // Form validation logic
  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  };

  const server = process.env.REACT_APP_URL;
  const formSubmithandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
// EmailJS Embedded
      // emailjs.sendForm('service_accf27k', 'template_fz9vrxt', form.current, 't1724dRvwPj-YHnEN')
      // .then((result) => {
      //     // console.log(result.text);
      //     Swal.fire({
      //       title: "Message sent successfully!",
      //       text: "Our contact person will respond to your message shortly. Thanks!",
      //       icon: 'success',
      //       confirmButtonText: 'OK',
      //       confirmButtonColor: '#8e5c1d',
      //       timer: 3000,
      //       position: 'center'
      //     })
      // }, (error) => {
      //     // console.log(error.text);
      //     Swal.fire({
      //       title: "Error sending message",
      //       text: "Try again later. You can reach us via direct phone call or through our social media channels. Thanks!",
      //       icon: 'error',
      //       timer: 3000,
      //       position: 'center'

      //     })
      // }
      // );

      // console.log(nameValue, emailValue, phoneValue, messageValue);
      nameReset();
      emailReset();
  };

  return (
    <WaitlistStyles>
      <div>
        <div className="hero_component_outter"  id="WaitListForm">
        <div className="section_content_outter">
        <div className="section_content">
          <h1 className="title">Join the LangPal Waitlist</h1>
          <p className="sub_title">
          Thank you for your interest in LangPal! We are currently in private beta testing. 
            <br/><br/>
            If you'd like to be notified when LangPal opens up to new users, please join our waitlist below.
          </p>
          <p className="waitlist_benefits">By signing up, you'll get:</p>
          {WaitList.WaitListBenefits.map((list) => {
            return(
                <div className="list_container" key={list.id}>
                    <BiSolidCheckCircle className="check_icon"/>
                    <p className="description">
                        <span className="section_span">{list.title}</span>
                        {list.content}
                    </p>
                </div>
            )
          })}
        </div>
        </div>
        <div className="waitlist_form_container">
            <p className="form_description">We can't wait to welcome you into the LangPal community. Thanks for your patience as we put the finishing touches on the app. Please reach out any time if you have questions.</p>
      <form ref={form} onSubmit={formSubmithandler}>
        <div className={nameClasses}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" placeholder="Ugochukwu Ogbonanya" 
            type="text"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
            className="input_form"
            />
          {nameHasError && <p className="error-msg info-error">Please enter a full name</p>}
        </div>
        <div className={emailClasses}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" placeholder="ugochukwu@email.com" 
            type="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
            className="input_form"
            />
          {emailHasError && <p className="error-msg info-error">Please enter a valid email</p>}
        </div>

        <button value="Send" disabled={!formIsValid} type="submit" className="submit_btn">Join Waitlist</button>
            </form>
        </div>
        </div>
      </div>
    </WaitlistStyles>
  );
};

export default Waitlist;
