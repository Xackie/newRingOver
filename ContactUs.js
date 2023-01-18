import React from "react";
import background from "../contactus.jpg";
import fbicon from "../Images/icons/facebook.svg";
import instaicon from "../Images/icons/insta.svg";
import twittericon from "../Images/icons/twitter.svg";

function ContactUs() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="contact">
          <h3
            style={{
              fontWeight: "500",
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            REACH US AT
          </h3>
          <div className="contact_item">
            <h3>support@kicksup.com</h3>
            <span>for any technical support</span>
          </div>
          <div className="contact_item">
            <h3>info@kicksup.com</h3>
            <span>for more information</span>
          </div>
          <div className="contact_item">
            <h3>feedback@kicksup.com</h3>
            <span>to send your feedback</span>
          </div>
          <div className="contact_item">
            <h3>jobs@kicksup.com</h3>
            <span>to work wit us</span>
          </div>
        </div>
        <div className="socialMedia">
          <span>stay in touch</span>
          <div className="socialMedia-icons">
            <img src={twittericon} alt="fb" />
            <img src={instaicon} alt="fb" />
            <img src={fbicon} alt="fb" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
