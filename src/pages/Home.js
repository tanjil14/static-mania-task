import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import audioTrack from "../img/Audio track.png"
import applePodcasts from "../img/podcasts/Apple Podcast.png"
import soundCloud from "../img/podcasts/Sound Cloud.png"
import googlePodcasts from "../img/podcasts/Google Podcast.png"
import spotify from "../img/podcasts/Spotify.png"
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="px-8 md:px-16">
      {/* hero section  */}
      <section className="flex px-10 py-10 flex-1 flex-col gap-6 md:flex-row">
       <div className="basis-1/2 p-4">
         <h1 className="text-Black font-bold text-4xl my-4">Become The Hero Of Your Own Story</h1>
         <p className="my-8 text-base text-Black font-normal">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
         <div className="flex flex-col w-full md:flex-row">
            <input type="text" placeholder="Enter your email Id" className="block p-2 text-sm text-gray-900 focus:outline-none bg-gray-200 w-full"/>
            <button className="bg-Blue cursor-pointer py-1 px-4 text-[#F4F2FF] text-lg font-medium">Subscribe</button>
         </div>
       </div>
       <div className="basis-1/2 p-4 ml-3">
         <img className="" src={audioTrack} alt="" />
       </div>
      </section>
      {/* podcasts section  */}
      <section className="flex flex-col sm:flex-row items-center sm:justify-between mt-8 mb-12 gap-6 sm:gap-3">
        <div className="">
          <h3 className="text-Black font-semibold text-xl">Podcast Available On</h3>
        </div>
        <div className="">
          <img src={applePodcasts} className="w-full sm:w-[85%]" alt="" />
        </div>
        <div className="">
          <img src={soundCloud} className="w-full sm:w-[85%]" alt="" />
        </div>
        <div className="">
          <img src={googlePodcasts} className="w-full sm:w-[85%]" alt="" />
        </div>
        <div className="">
          <img src={spotify} className="w-full sm:w-[85%]" alt="" />
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
