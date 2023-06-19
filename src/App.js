import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Footer from "./componenets/Footer";
import SubNav from "./componenets/SubNav";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <Hero />
      <Footer />
    </div>
  );
}
