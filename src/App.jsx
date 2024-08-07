import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import Text from "./Component/Text/Text";

function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Text/>
      <Products/>
      <Footer />
    </>
  );
}

export default App;
