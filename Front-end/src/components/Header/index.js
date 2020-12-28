import React, { useEffect, useState } from "react";
import "./style.css";
import amazonLogo from "../../images/logo/amazonlogo.png";
//import goldenStar from "../../images/logo/golden-star.png";
import {
  IoIosArrowDown,
  IoIosCart,
  IoIosSearch,
  IoIosPerson,
} from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";

import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <MaterialInput
                type="text"
                label="Enter Email/Enter Mobile Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MaterialInput
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                //rightElement={<a href="#">Forgot?</a>}
              />
              <MaterialButton
                title="Login"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{ margin: "40px 0 20px 0" }}
                onClick={userLogin}
              />
              <p>OR</p>
              <MaterialButton
                title="Request OTP"
                bgColor="#ffffff"
                textColor="#2874f0"
                style={{ margin: "20px 0" }}
              />
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        {/*Logo*/}
        <div className="logo">
          <a href="">
            <img src={amazonLogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: "-10px" }}>
            {/*<span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
           <img src={goldenStar} className="goldenStar" alt="" />*/}
          </a>
        </div>
        {/*Logo ends*/}
        {/*Search component*/}
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for products, brands and more"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div>
        </div>
        {/*Search component ends here*/}

        {/*Right side menu*/}
        <div className="rightMenu">
          <DropdownMenu
            menu={
              <a className="loginButton" onClick={() => setLoginModal(true)}>
                Login
              </a>
            }
            menus={[
              { label: "My Profile", href: "", icon: <IoIosPerson /> },
              { label: "Flipkart Plus Zone", href: "", icon: null },
              { label: "Orders", href: "", icon: null },
              { label: "Wishlist", href: "", icon: null },
              { label: "Rewards", href: "", icon: null },
              { label: "Gift Cards", href: "", icon: null },
            ]}
            firstMenu={
              <div className="firstmenu">
                <span>New Customer?</span>
                <a style={{ color: "#2874f0" }}>Sign Up</a>
              </div>
            }
          />
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "Notification Preference", href: "", icon: null },
              { label: "Sell on flipkart", href: "", icon: null },
              { label: "24x7 Customer Care", href: "", icon: null },
              { label: "Advertise", href: "", icon: null },
              { label: "Download App", href: "", icon: null },
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
