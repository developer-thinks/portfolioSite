import React from "react";
import "./Contact.css";
import Form from '../../Components/ContactForm/Form'
import Icon from "../../Components/Icon/Icon";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

export default function Contact() {
  return (
    <div className="section" id="Contact" style={{ textAlign: "center", backgroundColor: "#e0e0e0" }}>
      <div className="container">

        <SectionTitle title="CONTACT ME " quotes="" quotesAuthor=""></SectionTitle>

        <Form></Form>

        <div className="row">

          <div className="col-sm-6">
            <Icon myClassName="linkedin" myHref="https://www.linkedin.com/in/sammed-sankonatti"></Icon>
            <Icon myClassName="github" myHref="https://github.com/sammed-sankonatti"></Icon>
          </div>

          <div className="col-sm-6">
            <Icon myClassName="mail" myHref="mailto:sammed.sankonatti45@gmail.com"></Icon>
            <Icon myClassName="phone" myHref="tel:+918317379314"></Icon>
          </div>

        </div>

        <h6 className="info">sammed.sankonatti45@gmail.com</h6>
        <h6 className="info">+91 831-737-9314</h6>

        <button onClick={() => window.open("")} type="button" className="btn btn-outline-danger">View full CV</button>

        <hr></hr>

      </div>
    </div >
  );
}


