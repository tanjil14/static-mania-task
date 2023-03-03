import ArticleCard from "../components/ArticleCard";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bitcoin from "../img/articles/bitcoins.png";
import gadgets from "../img/articles/gadgets.png";
import article_mask from "../img/article_mask.png";
import audioTrack from "../img/Audio track.png";
import img2 from "../img/episode/man.png";
import img1 from "../img/episode/peoples.png";
import img3 from "../img/episode/women.png";
import applePodcasts from "../img/podcasts/Apple Podcast.png";
import googlePodcasts from "../img/podcasts/Google Podcast.png";
import soundCloud from "../img/podcasts/Sound Cloud.png";
import spotify from "../img/podcasts/Spotify.png";
const episodes = [
  {
    img: img1,
    title: "Ep 1: How to build a world-class business brand",
  },
  {
    img: img2,
    title: "Ep 2: Getting the first 100 customers for your business",
  },
  {
    img: img3,
    title: "Ep 3: Should I raise money for my startup, or not?",
  },
];
const articles = [
  {
    img: bitcoin,
    title: "Getting the first 100 customers for your business",
  },
  {
    img: gadgets,
    title: "Apparently we had reached a great height in atmosphere",
  },
];
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="px-8 md:px-16">
        {/* hero section  */}
        <section>
          <div className="px-10 py-10 flex flex-1 flex-col gap-6 md:flex-row">
            <div className="basis-1/2 p-4">
              <h1 className="text-Black font-bold text-4xl my-4">
                Become The Hero Of Your Own Story
              </h1>
              <p className="my-8 text-base text-Black font-normal">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </p>
              <div className="flex flex-col w-full md:flex-row">
                <input
                  type="text"
                  placeholder="Enter your email Id"
                  className="block p-2 text-sm text-gray-900 focus:outline-none bg-gray-200 w-full"
                />
                <button className="bg-Blue cursor-pointer py-1 px-4 text-[#F4F2FF] text-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="basis-1/2 p-4 ml-3">
              <img className="" src={audioTrack} alt="" />
            </div>
          </div>
        </section>
        {/* podcasts section  */}
        <section>
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-8 mb-12 gap-6 sm:gap-3">
            <div>
              <h3 className="text-Black font-semibold text-xl">
                Podcast Available On
              </h3>
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
          </div>
        </section>
        {/* All Episodes */}
        <section>
          <div className="mt-8 mb-12">
            {/* episode desc */}
            <h3 className="text-Black text-[32px] font-bold mb-4">
              Recent Episodes
            </h3>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
              <div className="basis-1/2">
                <p className="font-normal text-base text-Black leading-[150%]">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black.
                </p>
              </div>
              <div>
                <button className="bg-Blue cursor-pointer py-2 px-7 text-[#F4F2FF] text-base font-medium">
                  See All Episodes{" "}
                </button>
              </div>
            </div>
            {/* all Episodes */}
            <div className="my-10 flex flex-col sm:flex-row gap-4 md:gap-1">
              {/* card  */}
              {episodes.map((episode, i) => (
                <CardItem img={episode.img} title={episode.title} key={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Article section  */}
        <section>
          <div className="mt-8 mb-12 flex flex-col md:flex-row gap-5">
            <div className="w-full sm:w-1/2 md:w-1/3 bg-[#F4F2FF]">
              <div className="p-5">
                <h2 className="font-bold text-3xl mb-3 text-Black">
                  Read our <br /> articles & news
                </h2>
                <span className="text-base text-Blue font-semibold cursor-pointer">
                  See More
                </span>
              </div>
              <div className="mt-10">
                <img src={article_mask} className="h-full" alt="" />
              </div>
            </div>
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                img={article.img}
                title={article.title}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
