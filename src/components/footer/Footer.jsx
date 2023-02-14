import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-bar">
        <div className="footer-content container">
          <div className="footer-txt">
            Nazwa firmy - wszelkie prawa zastrzeżone, 2022
          </div>
          <ul className="social">
            <li>
              <a className="ico" href="https://facebook.com/">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </a>
            </li>
            <li>
              <a className="ico" href="https://instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
