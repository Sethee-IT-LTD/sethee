import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </>
  );
}

export default Layout;
