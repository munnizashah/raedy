import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./footer.css";

const readyIcon = "assets/icons/ready-cropped.png";
const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/" },
  { name: "Gallery", link: "/" },
  { name: "Shop", link: "/" },
];

const moreItems = [
  { name: "Careers", link: "/" },
  { name: "Our Partners", link: "/" },
];

const raedyCampItems = [
  { name: "Summer 2021", link: "/" },
  { name: "3x3 Streetball Tournament", link: "/" },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="raedyFooterIcon">
          <img src={readyIcon} alt="logo" />
        </div>
        <div className="col">
          <h3>
            Menu{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
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
            {moreItems.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <h3>
            Raedy Camp
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            {raedyCampItems.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="socialIcons">
          <BsFacebook size={30} color="white" />
          <BsTwitter size={30} color="white" />
          <BsInstagram size={30} color="white" />
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2023 RAEDY GROUP</p>
    </div>
  );
}

export default Footer;
