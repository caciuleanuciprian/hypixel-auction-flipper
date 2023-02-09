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
        <a className="social" href="">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a className="social" href="">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
