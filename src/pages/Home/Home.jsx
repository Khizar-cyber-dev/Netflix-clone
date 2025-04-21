import React from 'react';
import Navbar from '../../components/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../components/TitleCard';
import Footer from '../../components/Footer';

const Home = ({ names }) => {
    console.log(names)
  return (
    <div className="home">
    {/* Navbar */}
    <Navbar names={names} /> {/* Hero Section */}
    <div className="hero relative">
        {/* Background Image */}
        <img src={hero_banner} alt="Hero Banner" className="banner-image w-full object-cover h-[500px] sm:h-[500px] md:h-[500px] lg:h-[90vh]" /> {/* Hero Caption */}
        <div className="hero-caption absolute w-full px-4 sm:px-6 md:pl-[6%] bottom-4 sm:bottom-6 text-white z-10">
            {/* Hero Title Image */}
            <img src={hero_title} alt="Hero Title" className="caption-img w-[80%] sm:w-[70%] md:w-[60%] max-w-[400px] mb-4" /> {/* Headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            Discover Your Next Favorite Show
          </h2> {/* Description */}
            <p className="max-w-[90%] sm:max-w-[700px] text-sm sm:text-md md:text-lg">
                Explore a wide variety of movies, TV shows, and original content on our platform.
            </p>
            <p className="max-w-[90%] sm:max-w-[700px] text-sm sm:text-md md:text-lg mb-4">
                Stream anytime, anywhere, and enjoy endless entertainment. Start your free trial today and dive into the world of Netflix-like content!
            </p>

            {/* Buttons */}
            <div className="hero_btn flex flex-col sm:flex-row gap-4 mb-6">
                <button className="btn-primary border-0 outline-0 py-2 px-4 sm:py-3 sm:px-6 inline-flex items-center gap-2 text-sm sm:text-md bg-white rounded cursor-pointer text-black hover:bg-[#ffffffbf]">
                    <img src={play_icon} alt="Play" className="w-5 sm:w-6" /> Play
                </button>
                <button className="btn-primary border-0 outline-0 py-2 px-4 sm:py-3 sm:px-6 inline-flex items-center gap-2 text-sm sm:text-md bg-[#6d6d6eb3] rounded cursor-pointer hover:bg-[#6d6d6e66]">
                    <img src={info_icon} alt="More Info" className="w-5 sm:w-6" /> More Info
                </button>
            </div>
        </div>
    </div>

    {/* More Cards Section */}
    <div className="more-card px-4 sm:px-6 md:pl-[6%] py-6">
        <TitleCard title="Now Playing" category="now_playing" />
        <TitleCard title="Upcoming" category="upcoming" />
        <TitleCard title="Top Rated" category="top_rated" />
        <TitleCard category={ "popular"} className="hidden" />
    </div>

    {/* Footer */}
    <Footer />
</div>
  );
};

export default Home;