import React from "react";
import "./footer.css";
import readyIcon from "../../assets/icons/ready-cropped.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function FooterSection() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="raedyFooterIcon">
          <img src={readyIcon} />
        </div>
        <div className="col">
          <h3>
            Menu{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            More{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Our Partners</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Raedy Camp{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="">Summer 2021</a>
            </li>
            <li>
              <a href="">3x3 Streetball Tournament</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="socialIcons">
            <BsFacebook size={30} />
            <BsTwitter size={30} />
            <BsInstagram size={30} />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2023 RAEDY GROUP</p>
    </div>
  );
}

export default FooterSection;
