import React from "react";
import Pack from "../Components/HomeComponents/Pack";

// Importing all the images from assets/Combo
import allNadiAstrologyCourse from "../assets/Combo/all-nadi-astrology-course.jpg";
import kpAdvanceKP from "../assets/Combo/kp+advance-kp.jpg";
import loveMarriageRelationshipPanchang from "../assets/Combo/love-marriage-and-relationship+Panchang.jpg";
import lovePrashnaAyurveda from "../assets/Combo/love-prashna-ayurveda.jpg";
import mantraAOP from "../assets/Combo/mantra-AOP.jpg";
import mantraKundaliniAyurveda from "../assets/Combo/mantra-kundalini-ayurveda.jpg";
import palmistryAdvanceLalKitab from "../assets/Combo/palmistry+Advance-lal-kitab.jpg";
import palmistryLalKitab from "../assets/Combo/palmistry+lal-kitab.jpg";
import pkAaopMa from "../assets/Combo/pk+aaop+ma.jpg";
import rinWealthPitra from "../assets/Combo/rin+wealth+pitra.jpg";
import basicAdvanceArtOfPrediction from "../assets/Combo/Basic-+-Advance-Art-of-Prediction.jpg";
import baAdvanceAop from "../assets/Combo/BA+Advance-Aop.jpg";
import baAopAdvanceAop from "../assets/Combo/BA+aop+Advance-Aop.jpg";
import baNumeroBAVastu from "../assets/Combo/BA-Numero-BA-Vastu.jpg";
import basicAstrologyCourseArtOfPrediction from "../assets/Combo/Basic-Astrology-Course-+-Art-of-prediction.jpg";
import blkAlkAikLk from "../assets/Combo/BLK-+-ALK-+AlK-+-LK.jpg";
import wealthWorkshop from "../assets/Combo/Wealth+wealth-workshop.jpg";
import vedicAstrologyCourseBundled from "../assets/Combo/Vedic-Astrology-Course-Bundled.jpg";
import CourseCard from "../Components/Gems-Books/CourseCard";

function Combo() {
  const combo = [
    { id: 1, title: "All Nadi Astrology Course", image: allNadiAstrologyCourse, originalPrice: "200", discountedPrice: "100" },
    { id: 2, title: "KP Advance KP", image: kpAdvanceKP, originalPrice: "250", discountedPrice: "120" },
    { id: 3, title: "Love Marriage & Relationship + Panchang", image: loveMarriageRelationshipPanchang, originalPrice: "300", discountedPrice: "150" },
    { id: 4, title: "Love Prashna Ayurveda", image: lovePrashnaAyurveda, originalPrice: "220", discountedPrice: "110" },
    { id: 5, title: "Mantra AOP", image: mantraAOP, originalPrice: "180", discountedPrice: "90" },
    { id: 6, title: "Mantra Kundalini Ayurveda", image: mantraKundaliniAyurveda, originalPrice: "260", discountedPrice: "130" },
    { id: 7, title: "Palmistry + Advance Lal Kitab", image: palmistryAdvanceLalKitab, originalPrice: "280", discountedPrice: "140" },
    { id: 8, title: "Palmistry + Lal Kitab", image: palmistryLalKitab, originalPrice: "200", discountedPrice: "100" },
    { id: 9, title: "PK + AAOP + MA", image: pkAaopMa, originalPrice: "400", discountedPrice: "200" },
    { id: 10, title: "Rin Wealth Pitra", image: rinWealthPitra, originalPrice: "360", discountedPrice: "180" },
    { id: 12, title: "Basic + Advance Art of Prediction", image: basicAdvanceArtOfPrediction, originalPrice: "500", discountedPrice: "250" },
    { id: 13, title: "BA + Advance AOP", image: baAdvanceAop, originalPrice: "420", discountedPrice: "210" },
    { id: 14, title: "BA + AOP + Advance AOP", image: baAopAdvanceAop, originalPrice: "540", discountedPrice: "270" },
    { id: 15, title: "BA Numero BA Vastu", image: baNumeroBAVastu, originalPrice: "380", discountedPrice: "190" },
    { id: 16, title: "Basic Astrology Course + Art of Prediction", image: basicAstrologyCourseArtOfPrediction, originalPrice: "300", discountedPrice: "150" },
    { id: 17, title: "BLK + ALK + AIK + LK", image: blkAlkAikLk, originalPrice: "480", discountedPrice: "240" },
    { id: 18, title: "Wealth Workshop", image: wealthWorkshop, originalPrice: "160", discountedPrice: "80" },
    { id: 19, title: "Vedic Astrology Course Bundled", image: vedicAstrologyCourseBundled, originalPrice: "600", discountedPrice: "300" },
  ];

  const popularComboIds = [19, 17, 1, 15, 14];

  return (
    <div>
  <Pack />
  <div className="py-10 px-6">
    {/* Popular Combo Courses Section */}
    <div className="flex flex-col items-center mb-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Popular Combo Courses</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {combo
          .filter((course) => popularComboIds.includes(course.id))
          .map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              originalPrice={`₹${course.originalPrice}`}
              discountedPrice={`₹${course.discountedPrice}`}
            />
          ))}
      </div>
    </div>
<br></br>
    {/* All Combo Courses Section */}
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Combo Courses</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {combo.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            originalPrice={`₹${course.originalPrice}`}
            discountedPrice={`₹${course.discountedPrice}`}
          />
        ))}
      </div>
    </div>
  </div>
</div>

  );
}

export default Combo;
