import PropTypes from "prop-types";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const Layout = ({ showFooter, showMenu = true, children }) => {
  return (
    <>
      <Header showMenu={showMenu} />
      <main>{children}</main>
      {showFooter ? <Footer /> : null}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  showFooter: PropTypes.bool.isRequired,
  showMenu: PropTypes.bool,
};
export default Layout;
