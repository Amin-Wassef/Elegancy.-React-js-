import { Text } from "@chakra-ui/react";
import GooglePlay from "../Assets/GooglePlay.png";
import AppStore from "../Assets/AppStore.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="flex1">
        <Text
          id="logo"
          fontSize={"5xl"}
          as={"b"}
          color={"white"}
          style={{ paddingTop: "3%" }}
        >
          Eleg<span style={{ color: "#1E90FF" }}>@</span>ncy
          <span style={{ color: "#1E90FF" }}>.</span>
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <a
            href="https://twitter.com"
            class="fa fa-twitter"
            style={{ background: "#55ACEE", color: "white" }}
          ></a>
          <a
            href="https://github.com"
            class="fa fa-github"
            style={{ background: "white", color: "#1F2328" }}
          ></a>
          <a
            href="https://linkedin.com"
            class="fa fa-linkedin"
            style={{ background: "#007bb5", color: "white" }}
          ></a>
          <a
            href="http://instagram.com"
            class="fa fa-instagram"
            style={{ background: "#125688", color: "white" }}
          ></a>
          <a
            href="http://facebook.com"
            class="fa fa-facebook"
            style={{ background: "#3B5998", color: "white" }}
          ></a>
        </div>
      </div>

      <div id="flex-global">
        <div id="flex2" style={{ flexGrow: 2.3 }}>
          <p>
            <h3 className="footer-title">Title 1</h3>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
          </p>

          <p>
            <h3 className="footer-title">Title 2</h3>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
          </p>

          <p>
            <h3 className="footer-title">Title 3</h3>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
            <div>ItemItemItem</div>
          </p>
        </div>

        <div style={{ flexGrow: 1, paddingLeft: "2%" }}>
          <div style={{ marginBottom: "50px" }}>
            <a href="https://play.google.com/store/games?hl=en&gl=US">
              <img className="footer-logos" src={GooglePlay} alt="GooglePlay" />
            </a>
          </div>

          <div style={{ marginTop: "50px" }}>
            <a href="https://www.apple.com/app-store/">
              <img className="footer-logos" src={AppStore} alt="AppStore" />
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div id="copyright">
        <span class="material-symbols-outlined">
          <sup>copyright</sup>
        </span>
        Copyright 2024 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
