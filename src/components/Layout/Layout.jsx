import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx'
import "./Layout.scss"


export default function Layout({ children }) {
  return (
    <div className="layout-wrapper"> {/* ← wrapper principal */}  
      <Header />
      <main>{children}</main>
      <Footer />
      </div>
  );
}
