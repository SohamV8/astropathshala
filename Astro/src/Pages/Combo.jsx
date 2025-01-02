import React from "react";
import Pack from "../Components/HomeComponents/Pack";
import underline from '../assets/underline1.png';

import combo1 from "../assets/Combo/combo1.jpg";
import combo2 from "../assets/Combo/combo2.jpg";
import combo3 from "../assets/Combo/combo3.jpg";
import combo4 from "../assets/Combo/combo4.jpg";
import combo5 from "../assets/Combo/combo5.jpg";
import combo6 from "../assets/Combo/combo6.jpg";
import combo7 from "../assets/Combo/combo7.jpg";
import combo8 from "../assets/Combo/combo8.jpg";
import combo9 from "../assets/Combo/combo9.jpg";
import combo10 from "../assets/Combo/combo10.jpg";
import combo11 from "../assets/Combo/combo11.jpg";
import combo12 from "../assets/Combo/combo12.jpg";
import combo13 from "../assets/Combo/combo13.jpg";
import combo14 from "../assets/Combo/combo14.jpg";
import combo15 from "../assets/Combo/combo15.jpg";
import combo16 from "../assets/Combo/combo16.jpg";
import combo17 from "../assets/Combo/combo17.jpg";


import CourseCard from "../Components/Gems-Books/CourseCard";

function Combo() {
  const combo = [
    { id: 1, title: "All Nadi Astrology Course", image: combo9, originalPrice: "100", discountedPrice: "11000", route: "https://app.astropathshala.com/courses/388228?filterId=1&sortId=7" },
    { id: 2, title: "K.P Astrology + Advance K.P Astrology", image: combo8, originalPrice: "120", discountedPrice: "9000", route: "https://app.astropathshala.com/courses/388227?filterId=33&sortId=7" },
    { id: 3, title: "Love Marriage Astrology + panchang & kundli milan", image: combo10, originalPrice: "150", discountedPrice: "6000", route: "https://app.astropathshala.com/courses/388231?filterId=33&sortId=7" },
    { id: 4, title: "Love, marriage astrology + Prashna kundli + Ayurveda", image: combo7, originalPrice: "110", discountedPrice: "6000", route: "https://app.astropathshala.com/courses/388221?filterId=33&sortId=7" },
    { id: 5, title: "Art of prediction + mantra astrology", image: combo14, originalPrice: "90", discountedPrice: "5000", route: "https://app.astropathshala.com/courses/411195?filterId=33&sortId=7" },
    { id: 6, title: "Mantra astrology + Kundalini tantra + Ayurveda astrology", image: combo6, originalPrice: "130", discountedPrice: "5000", route: "https://app.astropathshala.com/courses/388214?filterId=33&sortId=7" },
    { id: 7, title: "Prashna kundli + Advance art of prediction + Marriage astrology", image: combo15, originalPrice: "140", discountedPrice: "12500", route: "https://app.astropathshala.com/courses/526899?filterId=1&sortId=7" },
    { id: 8, title: "Palmistry + Lal Kitab", image: combo12, originalPrice: "100", discountedPrice: "7000", route: "https://app.astropathshala.com/courses/388240?filterId=33&sortId=7" },
    { id: 9, title: "Palmistry + Advance Lal kitab", image: combo13, originalPrice: "200", discountedPrice: "14000", route: "https://app.astropathshala.com/courses/388242?filterId=1&sortId=7" },
    { id: 10, title: "Rin bandhan + wealth astrology + pitradosh ", image: combo4, originalPrice: "3000", discountedPrice: "1500", route: "https://app.astropathshala.com/courses/388204?filterId=1&sortId=7" },
    { id: 11, title: "Basic astrology + Art of Prediction", image: combo1, originalPrice: "250", discountedPrice: "2000", route: "https://app.astropathshala.com/courses/388179?filterId=1&sortId=7" },
    { id: 12, title: "Basic astrology + Advance art of prediction", image: combo2, originalPrice: "210", discountedPrice: "4000", route: "https://app.astropathshala.com/courses/388195?filterId=33&sortId=7" },
    { id: 13, title: "Basic astrology + Art Of Prediction + Advance Art Of Prediction", image: combo3, originalPrice: "270", discountedPrice: "6000", route: "https://app.astropathshala.com/courses/388200?filterId=33&sortId=7" },
    { id: 14, title: "Basic Numerology + Advance Numerology + Basic Vastu + Advance vastu", image: combo5, originalPrice: "190", discountedPrice: "6000", route: "https://app.astropathshala.com/courses/388209?filterId=33&sortId=7" },
    { id: 15, title: "Lal Kitab + Varshfal + Grammer + predictive technique with case study", image: combo16, originalPrice: "240", discountedPrice: "33000", route: "https://app.astropathshala.com/courses/593893?filterId=33&sortId=7" },
    { id: 16, title: "Wealth astrology + wealth Workshop", image: combo11, originalPrice: "80", discountedPrice: "1000", route: "https://app.astropathshala.com/courses/388238?filterId=33&sortId=7" },
    { id: 17, title: "Vedic Astrology Course Bundled", image: combo17, originalPrice: "300", discountedPrice: "46000", route: "https://app.astropathshala.com/courses/594492?filterId=33&sortId=7" },
  ];  

  const popularComboIds = [17, 15, 1, 15, 14];

  return (
<div>
  <Pack />
  <div className="py-14 px-8">
    {/* Popular Combo Courses Section */}
    <div className="flex flex-col items-center mb-14">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Popular Combo Courses</h1>
      <img src={underline} alt="underline" className="mx-auto mt-1 w-27" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {combo
          .filter((course) => popularComboIds.includes(course.id))
          .map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              originalPrice={`₹${course.originalPrice}`}
              discountedPrice={`₹${course.discountedPrice}`}
              route={course.route}
            />
          ))}
      </div>
    </div>

    {/* All Combo Courses Section */}
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Combo Courses</h1>
      <img src={underline} alt="underline" className="mx-auto mt-1 w-27" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {combo.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            originalPrice={`₹${course.originalPrice}`}
            discountedPrice={`₹${course.discountedPrice}`}
            route={course.route}
          />
        ))}
      </div>
    </div>
  </div>
</div>
  );
}

export default Combo;
