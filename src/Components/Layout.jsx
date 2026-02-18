import { Footer } from "./Footer";
import { Container } from "./Layout.styles";
import { Navbar } from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
      
    </>
  );
}
export { Layout };
