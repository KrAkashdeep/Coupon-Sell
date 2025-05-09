import Faq from "../components/Home/Faq";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import HowWork from "../components/Home/HowWork";
import Navbar from "../components/Home/Navbar";
import Popular from "../components/Home/Popular";
import Scroll from "../components/Home/Scroll";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Scroll />
      <Popular />
      <HowWork />
      <Faq />
      <Footer />
    </>
  );
}
export default Home;
