import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sponsor from "../components/Sponsor";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="px-8 md:px-16">
        <Sponsor />
      </main>
      <Footer />
    </>
  );
};

export default About;
