import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sponsor from "../components/Sponsor";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="px-8 md:px-16">
        <section>
          <div className="w-full md:w-2/5">
            <h1 className="text-Black font-bold text-2xl md:text-5xl my-8">About Finsweet Podcast</h1>
            <p className="text-justify mb-8 text-base font-normal text-Black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <button className="bg-Blue cursor-pointer py-2 px-4 text-[#F4F2FF] text-base font-medium">
              Subscribe Now!
            </button>
          </div>
        </section>
        <Sponsor />
      </main>
      <Footer />
    </>
  );
};

export default About;
