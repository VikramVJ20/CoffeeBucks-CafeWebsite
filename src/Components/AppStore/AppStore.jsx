import React from "react";
import AppStore_img from "../../assets/App-store-img.png";
import playStore_img from "../../assets/Play-store-img.png";
import BgPng from "../../assets/Coffee-bean-img.jpg";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                <div data-aos="fade-up"  className="space-y-6 max-w-xl mx-auto">
                    {/* Text-Content */}
                    <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">Coffee Bucks is now available for Android and IOS</h1>
                    {/* Logo-Content */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center">
                        <a href="#">
                            <img src={AppStore_img} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                        </a>
                        <a href="#">
                            <img src={playStore_img} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
