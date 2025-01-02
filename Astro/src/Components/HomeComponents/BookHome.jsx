import React from "react";
import Book from "../../assets/Book.png";
import Check from "../../assets/check.png";
import Detail from "../../assets/detail.png";
import MyButton from "../Mybutton";

function BookHome() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-10 p-8 lg:p-16 gap-12 min-h-screen">
      {/* Left Section - Text */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 font-soria">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-BKANT">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          placeat reprehenderit ut cupiditate a veniam voluptate consectetur
          ipsa repudiandae mollitia?
        </p>

        {/* Feature Section */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <img src={Check} alt="Check Icon" className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 font-soria">
                Easy to Understand
              </h3>
              <p className="text-gray-600 font-BKANT">
                Clear explanations and concepts to grasp astrology easily.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <img
              src={Detail}
              alt="Detail Icon"
              className="w-8 h-8 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 font-soria">
                Detailed Book on Astrology
              </h3>
              <p className="text-gray-600 font-BKANT">
                Comprehensive insights into various aspects of astrology.
              </p>
            </div>
          </div>
        </div>
        <div className="button-book my-9">
        <MyButton text="Buy Now"/>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={Book}
          alt="Book"
          className="w-full max-w-md mx-auto transition-transform duration-300 hover:rotate-6 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default BookHome;
