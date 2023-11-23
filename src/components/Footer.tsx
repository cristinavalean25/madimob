import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../translations/GlobalContext";

function Footer() {
  const { locale, messages } = useGlobalContext();
  return (
    <div>
      <div className="text-container">
        <h3 className="text-white">{messages[locale].footer.text}</h3>
        <div className="footer-icons">
          <Link
            to="https://www.facebook.com/MADimob.ro"
            target="blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </Link>
          <Link to="/">
            <Instagram />
          </Link>
          <Link
            to="https://wa.me/+40740850331"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp />
          </Link>
        </div>
      </div>
      <div className="container-footer"></div>
    </div>
  );
}

export default Footer;
