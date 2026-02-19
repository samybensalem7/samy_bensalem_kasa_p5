import logo_footer from "../../assets/logo_footer.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer__content">
      <img
        src={logo_footer}
        alt="logo du kasa en blanc"
        className="footer__logo"
      />
      <p className="footer__text"> © 2020 KASA.  All rights reserved </p>
    </footer>
  );
}

export default Footer;
