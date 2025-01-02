import React, { useState } from "react";
import CourseCard from "../Components/Gems-Books/CourseCard";

import AdvanceAstrologyByPratapSheel from '../assets/Course/Advance-Astrology-by-pratap-sheel.jpg';
import SixthHouseWorkshop from '../assets/Course/6th-houseworkshop.jpg';
import EighthHouseWorkshop from '../assets/Course/8th-house-workshop.jpg';
import TwelfthHouseWorkshop from '../assets/Course/12th-house-workshop.jpg';
import AdvanceLalKitab from '../assets/Course/Advance-Lal-Kitab-(grammer+varshfal+remedies).jpg';
import AdvanceNumerology from '../assets/Course/Advance-Numerology.jpg';
import ArtOfPrediction from '../assets/Course/Art-Of-Prediction.jpg';
import ArtOfPredictionAdvance from '../assets/Course/Advance-Art-Of-Prediction.jpg';
import BasicAstrologyCourse from '../assets/Course/Basic-Astrology-Course.jpg';
import BasicAstrologyUrmiGupta from '../assets/Course/Basic-Astrology-urmi-gupta.jpg';
import BasicNumerology from '../assets/Course/Basic-Numerology.jpg';
import CareerAstrologyByNadiAstrology from '../assets/Course/Career-astrology-By-Nadi-Astrology.jpg';
import ChildBirthByNadiAstrology from '../assets/Course/Child-Birth-By-Nadi-Astrology.jpg';
import DivisionalCharts from '../assets/Course/Divisional-Charts.jpg';
import EducationAndStudyByNadiAstrology from '../assets/Course/Education-&-Study-by-Nadi-Astrology.jpg';
import EkadashBhaav from '../assets/Course/Ekadash-Bhaav.jpg';
import HealthAndLongevityByNadiAstrologyBasic from '../assets/Course/Health-&-Longevity-by-Nadi-Astrology-Basic.jpg';
import KaalSarpDosha from '../assets/Course/kaal-sarp-Dosha.jpg';
import KundliniTantra from '../assets/Course/Kundlini-Tantra.jpg';
import Lagnadahaya from '../assets/Course/Lagnadahaya.jpg';
import BasicLalKitab from '../assets/Course/Basic-Lal-Kitab.jpg';
import LalKitabGrammarFaladesh from '../assets/Course/Lal-Kitab-grammar&faladesh.jpg';
import LalKitabPredictiveTechnique from '../assets/Course/lal-kitab-predictive-technique-with-case-study.jpg';
import LandAndPropertyByNadiAstrologer from '../assets/Course/Land-&-Property-By-Nadi-Astrologer.jpg';
import AyurvedaAstrology from '../assets/Course/Ayurveda-Astrology.jpg';
import LitigationsByNadiAstrology from '../assets/Course/Litigations-by-Nadi-Astrology.jpg';
import LoveMarriageAndRelationship from '../assets/Course/love-marriage-and-relationship.jpg';
import MantraAstrology from '../assets/Course/Mantra-Astrology.jpg';
import MarriageAstrology from '../assets/Course/marriage-astrology.jpg';
import PanchangJyotishAndKundliMilan from '../assets/Course/Panchang-Jyotish&kundli-milan.jpg';
import PitraDosha from '../assets/Course/Pitra-Dosha.jpg';
import PowerTrinesByPratapSheel from '../assets/Course/Power-of-trines-by-prataap-sheel.jpg';
import PracticalPalmistryCourse from '../assets/Course/Practical-Palmistry-Course.jpg';
import PrashnaKundali from '../assets/Course/Prashna-Kundali.jpg';
import PredictiveAstrologyByPratapSheel from '../assets/Course/Predictive-Astrology-by-Pratap-Sheel.jpg';
import RinBandhanWorkshop from '../assets/Course/Rin-Bandhan-Workshop.jpg';
import TravelByNadiAstrology from '../assets/Course/Travel-By-Nadi-Astrology.jpg';
import WealthFinanceAstrology from '../assets/Course/Wealth-&-Finance-Astrology.jpg';
import WealthFinanceWorkshop from '../assets/Course/Wealth&Finance-Workshop.jpg';
import TarotCard from '../assets/Course/Tarot-Card.jpg';
import BasicVastu from '../assets/Course/Basic-Vastu.jpg';
import KpAstrologyBasic from '../assets/Course/Kp-Astrology-Basic.jpg';
import MiracleVastuAdvanceCourse from '../assets/Course/Miracle-Vastu-Advance-Course.jpg';
import KpAstrologyAdvance from '../assets/Course/Kp-Astrology-Basic-advance.jpg';
import HealthLongevityByNadiAstrologyAdvance from '../assets/Course/Health-&-Longevity-by-Nadi-Astrology-advance.jpg';
import AdvanceLalKitabRemedies from '../assets/Course/Advance-Lal-Kitab-remedies.jpg';


function Courses() {
  const courses = [
    
    { id: 1, image: SixthHouseWorkshop, title: "6th house workshop", originalPrice: "120", discountedPrice: "1,100", route: "https://app.astropathshala.com/courses/415237?filterId=1&sortId=7" },
    { id: 2, image: EighthHouseWorkshop, title: "8th house workshop", originalPrice: "150", discountedPrice: "1,140", route: "https://app.astropathshala.com/courses/453975?filterId=1&sortId=7" },
    { id: 3, image: TwelfthHouseWorkshop, title: "12th house workshop", originalPrice: "180", discountedPrice: "1,140", route: "https://app.astropathshala.com/courses/437539?filterId=1&sortId=7" },
    { id: 4, image: AdvanceAstrologyByPratapSheel, title: "Advance Astrology by Pratap Sheel", originalPrice: "200", discountedPrice: "6,791", route: "https://app.astropathshala.com/courses/593513?filterId=1&sortId=7" },
    { id: 5, image: AdvanceLalKitab, title: "Advance Lal Kitab (Grammer + Varshfal + Remedies)", originalPrice: "100", discountedPrice: "21,589", route: "https://app.astropathshala.com/courses/377074?filterId=1&sortId=7" },
    { id: 6, image: AdvanceNumerology, title: "Advance Numerology", originalPrice: "140", discountedPrice: "2,168", route: "https://app.astropathshala.com/courses/199278?filterId=1&sortId=7" },
    { id: 7, image: ArtOfPrediction, title: "Art Of Prediction", originalPrice: "300", discountedPrice: "5,044", route: "https://app.astropathshala.com/courses/162012?filterId=1&sortId=7" },
    { id: 8, image: ArtOfPredictionAdvance, title: "Art Of Prediction Advance", originalPrice: "130", discountedPrice: "7,716", route: "https://app.astropathshala.com/courses/380280?filterId=1&sortId=7" },
    { id: 9, image: BasicAstrologyCourse, title: "Basic Astrology Course", originalPrice: "200", discountedPrice: "524", route: "https://app.astropathshala.com/courses/163157?filterId=1&sortId=7" },
    { id: 10, image: BasicAstrologyUrmiGupta, title: "Basic Astrology Urmi Gupta", originalPrice: "160", discountedPrice: "133", route: "https://app.astropathshala.com/courses/392619?filterId=1&sortId=7" },
    { id: 11, image: BasicNumerology, title: "Basic Numerology Course", originalPrice: "220", discountedPrice: "1,140", route: "https://app.astropathshala.com/courses/181656?filterId=1&sortId=7" },
    { id: 12, image: CareerAstrologyByNadiAstrology, title: "Career Astrology By Nadi Astrology", originalPrice: "180", discountedPrice: "4,325", route: "https://app.astropathshala.com/courses/239566?filterId=1&sortId=7" },
    { id: 13, image: ChildBirthByNadiAstrology, title: "Child Birth By Nadi Astrology", originalPrice: "250", discountedPrice: "2,476", route: "https://app.astropathshala.com/courses/241488?filterId=1&sortId=7" },
    { id: 14, image: DivisionalCharts, title: "Divisional Charts", originalPrice: "190", discountedPrice: "12,339", route: "https://app.astropathshala.com/courses/538712?filterId=1&sortId=7" },
    { id: 15, image: EducationAndStudyByNadiAstrology, title: "Education & Study by Nadi Astrology", originalPrice: "200", discountedPrice: "3,092", route: "https://app.astropathshala.com/courses/241681?filterId=1&sortId=7" },
      { id: 16, image: EkadashBhaav, title: "Ekadash Bhaav", originalPrice: "210", discountedPrice: "1,140", route: "https://app.astropathshala.com/courses/470898?filterId=1&sortId=7" },
      { id: 17, image: HealthAndLongevityByNadiAstrologyBasic , title: "Health & Longevity by Nadi Astrology Basic", originalPrice: "260", discountedPrice: "3,606", route: "https://app.astropathshala.com/courses/241660?filterId=1&sortId=7" },
      { id: 18, image: KaalSarpDosha, title: "Kaal Sarp Dosha", originalPrice: "100", discountedPrice: "1,140", route: "https://app.astropathshala.com/courses/518718?filterId=1&sortId=7" },
      { id: 19, image: KundliniTantra, title: "Kundlini Tantra", originalPrice: "140", discountedPrice: "1,140", route: "https://app.astropathshala.com/courses/163538?filterId=1&sortId=7" },
      { id: 20, image: Lagnadahaya , title: "Lagnadahaya", originalPrice: "300", discountedPrice: "3,709", route: "https://app.astropathshala.com/courses/290217?filterId=1&sortId=7" },
      { id: 21, image: BasicLalKitab, title: "Basic Lal Kitab Course", originalPrice: "240", discountedPrice: "5,044", route: "https://app.astropathshala.com/courses/267307?filterId=1&sortId=7" },
      { id: 22, image: LalKitabGrammarFaladesh, title: "Lal Kitab Grammar & Faladesh", originalPrice: "150", discountedPrice: "12,339", route: "https://app.astropathshala.com/courses/470903?filterId=1&sortId=7" },
      { id: 23, image: LalKitabPredictiveTechnique, title: "Lal Kitab Predictive Technique With Case Study", originalPrice: "290", discountedPrice: "2,168", route: "https://app.astropathshala.com/courses/518719?filterId=1&sortId=7" },
      { id: 24, image: LandAndPropertyByNadiAstrologer, title: "Land & Property By Nadi Astrologer", originalPrice: "150", discountedPrice: "1,757", route: "https://app.astropathshala.com/courses/239680?filterId=1&sortId=7" },
      { id: 25, image: AyurvedaAstrology, title: "Ayurveda Astrology", originalPrice: "160", discountedPrice: "3,091", route: "https://app.astropathshala.com/courses/163557?filterId=1&sortId=7" },
      { id: 26, image: LitigationsByNadiAstrology, title: "Litigations by Nadi Astrology", originalPrice: "230", discountedPrice: "1,243", route: "https://app.astropathshala.com/courses/241329?filterId=1&sortId=7" },
      { id: 27, image: LoveMarriageAndRelationship, title: "Love, Marriage, and Relationship", originalPrice: "200", discountedPrice: "5,044", route: "https://app.astropathshala.com/courses/163540?filterId=1&sortId=7" },
      { id: 28, image: MantraAstrology, title: "Mantra Astrology", originalPrice: "250", discountedPrice: "3,092", route: "https://app.astropathshala.com/courses/168570?filterId=1&sortId=7" },
      { id: 29, image: MarriageAstrology, title: "Marriage Astrology", originalPrice: "180", discountedPrice: "5,044", route: "https://app.astropathshala.com/courses/415220?filterId=1&sortId=7" },
      { id: 30, image: "Panchang-Jyotish&kundli-milan", title: "Panchang Jyotish & Kundli Milan", originalPrice: "190", discountedPrice: "5,147", route: "https://app.astropathshala.com/courses/276866?filterId=1&sortId=7" },
      { id: 31, image: PanchangJyotishAndKundliMilan, title: "Panchang Jyotish & Kundli Milan", originalPrice: "190", discountedPrice: "5,147", route: "https://app.astropathshala.com/courses/276866?filterId=1&sortId=7" },
      { id: 32, image: PitraDosha, title: "Pitra Dosha", originalPrice: "210", discountedPrice: "318", route: "https://app.astropathshala.com/courses/168567?filterId=1&sortId=7" },
      { id: 33, image: PowerTrinesByPratapSheel, title: "Power of trines by prataap sheel", originalPrice: "230", discountedPrice: "1,551", route: "https://app.astropathshala.com/courses/593312?filterId=1&sortId=7" },
      { id: 34, image: PracticalPalmistryCourse, title: "Practical Palmistry Course", originalPrice: "300", discountedPrice: "4,633", route: "https://app.astropathshala.com/courses/162388?filterId=1&sortId=7" },
      { id: 35, image: PrashnaKundali, title: "Prashna Kundali", originalPrice: "270", discountedPrice: "3,709", route: "https://app.astropathshala.com/courses/164488?filterId=1&sortId=7" },
      { id: 36, image: PredictiveAstrologyByPratapSheel, title: "Predictive Astrology by Pratap Sheel", originalPrice: "200", discountedPrice: "4,325", route: "https://app.astropathshala.com/courses/454349?filterId=1&sortId=7" },
      { id: 37, image: RinBandhanWorkshop, title: "Rin Bandhan Workshop", originalPrice: "150", discountedPrice: "935", route: "https://app.astropathshala.com/courses/360641?filterId=1&sortId=7" },
      { id: 38, image: TravelByNadiAstrology, title: "Travel By Nadi Astrology", originalPrice: "180", discountedPrice: "1,551", route: "https://app.astropathshala.com/courses/241378?filterId=1&sortId=7" },
      { id: 39, image: WealthFinanceAstrology, title: "Wealth & Finance Astrology", originalPrice: "220", discountedPrice: "3,092", route: "https://app.astropathshala.com/courses/163541?filterId=1&sortId=7" },
      { id: 40, image: WealthFinanceWorkshop, title: "Wealth & Finance Workshop", originalPrice: "120", discountedPrice: "1,140", route: "https://app.astropathshala.com/courses/376928?filterId=1&sortId=7" },
      { id: 41, image: TarotCard, title: "Tarot Card", originalPrice: "150", discountedPrice: "9,257", route: "https://app.astropathshala.com/courses/599768?filterId=1&sortId=7" },
      { id: 42, image: BasicVastu, title: "Basic Vastu", originalPrice: "130", discountedPrice: "1,550", route: "https://app.astropathshala.com/courses/224561?filterId=1&sortId=7" },
      { id: 43, image: KpAstrologyBasic, title: "KP Astrology Basic", originalPrice: "140", discountedPrice: "5,100", route: "https://app.astropathshala.com/courses/227773?filterId=1&sortId=7" },
      { id: 44, image: MiracleVastuAdvanceCourse, title: "Miracle Vastu Advance Course", originalPrice: "220", discountedPrice: "3092", route: "https://app.astropathshala.com/courses/224571?filterId=1&sortId=7" },
      { id: 45, image: KpAstrologyAdvance, title: "KP Astrology Advance", originalPrice: "200", discountedPrice: "9,257", route: "https://app.astropathshala.com/courses/227776?filterId=1&sortId=7" },
      { id: 46, image:HealthLongevityByNadiAstrologyAdvance , title: "Health & Longevity by Nadi Astrology Basic", originalPrice: "230", discountedPrice: "2,579", route: "https://app.astropathshala.com/courses/241662?filterId=1&sortId=7" },
      { id: 47, image: AdvanceLalKitabRemedies, title: "Advance-Lal-Kitab-remedies", originalPrice: "230", discountedPrice: "14,000", route: "https://app.astropathshala.com/courses/344237?filterId=1&sortId=7" },
 
  // { id: 48, image: DivisionalCharts, title: "Divisional Charts", originalPrice: "230", discountedPrice: "200", route :"" }
     ];
 
  
 
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {courses.map((course) => (
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
  );
}

export default Courses;
