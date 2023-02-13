import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">© 2023 FlipsGoBrr. All rights reserved.</p>
      <div className="socialMedia">
        {/* <a className="socialText" href="">
          Privacy Policy
        </a>
        <a className="socialText" href="">
          Terms & Conditions
        </a> */}
        <a href="https://www.buymeacoffee.com/caciuleanuS">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=caciuleanuS&button_colour=7a63ef&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00" />
        </a>
        <a className="social" href="https://discord.gg/Tn6MvBjsX3">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a className="social" href="https://github.com/caciuleanuciprian">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
