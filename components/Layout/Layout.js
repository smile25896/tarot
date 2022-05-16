import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const Layout = ({ showFooter, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {showFooter ? <Footer /> : null}
    </>
  );
};
export default Layout;
