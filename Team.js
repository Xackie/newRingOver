import React from "react";
import Zidane from "../Images/People/zidane.jpg";
import Toni from "../Images/People/tonikroos.jpg";
import Iker from "../Images/People/ikercasillas.jpg";
import James from "../Images/People/james.jpg";
import Christiano from "../Images/People/christiano.jpg";
import LinkedinIcon from "../Images/icons/linkedin.png";
import MediumIcon from "../Images/icons/medium.png";
import NbaIcon from "../Images/icons/nba.png";
import FacebookIcon from "../Images/icons/facebook.svg";
import BeIcon from "../Images/icons/Be.png";

function Team() {
  return (
    <div>
      <h3
        style={{
          fontWeight: 500,
          fontSize: "larger",
          textAlign: "center",
          marginTop: "10vh",
        }}
      >
        Without bonding and coordination, every project is a failure. Look at
        who makes KICKSUP great. ;)
      </h3>
      <div className="people">
        <div className="peopleCard">
          <img src={Zidane} alt="Na" />
          <h3>Zidane</h3>
          <span>Leadership & management</span>
          <div className="peopleCard_medias">
            <img src={LinkedinIcon} alt="NA" />
            <img src={MediumIcon} alt="NA" />
            <img src={FacebookIcon} alt="NA" />
          </div>
        </div>
        <div className="peopleCard">
          <img src={Toni} alt="Na" />
          <h3>Toni Kroos</h3>
          <span>Product developer</span>
          <div className="peopleCard_medias">
            <img src={LinkedinIcon} alt="NA" />
            <img src={MediumIcon} alt="NA" />
          </div>
        </div>

        <div className="peopleCard">
          <img src={Iker} alt="Na" />
          <h3>Iker Casillas</h3>
          <span>Marketing strategy</span>
          <div className="peopleCard_medias">
            <img src={MediumIcon} alt="NA" />
          </div>
        </div>

        <div className="peopleCard">
          <img src={James} alt="Na" />
          <h3>James</h3>
          <span>Prduct designer</span>
          <div className="peopleCard_medias">
            <img src={MediumIcon} alt="NA" />
            <img src={NbaIcon} alt="NA" />
            <img src={BeIcon} alt="NA" />
          </div>
        </div>

        <div className="peopleCard">
          <img src={Christiano} alt="Na" />
          <h3>Christiano</h3>
          <span>Financial operations</span>

          <div className="peopleCard_medias">
            <img src={LinkedinIcon} alt="NA" />
            <img src={FacebookIcon} alt="NA" />
          </div>
        </div>
      </div>
      <span
        style={{
          
          fontWeight: 400,
          fontSize: "28px",
          position:"relative",
          top:0,
          left:"46%",
        }}
      >
        and You! ;)
      </span>
    </div>
  );
}

export default Team;
