import React from "react";
import "./MainCard.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";

export default function MainCard() {
    return (
        <div className="jumbotron main-card">
            <p className="name">SAMMED SANKONATTI</p>

            <hr className="line"></hr>
            <h4 className="status">🅲🅾🅼🅿🅴🆃🅰🆃🅸🆅🅴 🅲🅾🅳🅴🆁</h4>
            <h5 className="status1">Looking for my next challenge</h5>

            <Link
                activeClass="active"
                to="Profile"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <div className="scroll">
                    <h6 className="scrollText">Resume</h6>
                    <div className="scrollIcon">
                        <FaAngleDown size={40}></FaAngleDown>
                    </div>
                </div>
            </Link>
        </div>
    );
}
