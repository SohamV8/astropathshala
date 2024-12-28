import React, { useState } from "react";
import CourseCard from "../Components/Gems-Books/CourseCard";
import EducationStudyNadiAstrology from '../assets/Course/Education-&-Study-by-Nadi-Astrology.jpg';
import FalitKarnaSeekhe from '../assets/Course/Falit-krna-seekhe.jpg';
import HealthLongevityNadiAstrology from '../assets/Course/Health-&-Longevity-by-Nadi-Astrology.jpg';
import JaiminiAstrology from '../assets/Course/Jaimini-Astrology.jpg';
import KaalSarpYog from '../assets/Course/kaal-sarp-yog.jpg';
import KPBasic from '../assets/Course/Kp-Astrology-Basic.jpg';
import KundaliniTantra from '../assets/Course/Kundlini-Tantra.jpg';
import LagnaDhay from '../assets/Course/Lagnadhay.jpg';
import LalKitabAppThumbnail from '../assets/Course/Lal-Kitab-App-Thumbnail.jpg';
import LalKitabPracticeSession from '../assets/Course/lal-kitab-practice-session.jpg';
import LandPropertyNadiAstrology from '../assets/Course/Land-&-Property-By-Nadi-Astrologer.jpg';
import LitigationsNadiAstrology from '../assets/Course/Litigations-by-Nadi-Astrology.jpg';
import LoveMarriageRelationship from '../assets/Course/love-marriage-and-relationship.jpg';
import MantraAstrology from '../assets/Course/Mantra-Astrology.jpg';
import MarriageAstrology from '../assets/Course/marriage-astrology.jpg';
import MedicalAstrology from '../assets/Course/medical-astrology.jpg';
import MiracleVastuAdvance from '../assets/Course/Miracle-Vastu-Advance-Course.jpg';
import PanchangApp from '../assets/Course/Panchang-app.jpg';
import PitraDosh from '../assets/Course/Pitra-Dosh.jpg';
import PowerOfTrines from '../assets/Course/Power-of-trines-by-prataap-sheel.jpg';
import PracticalPalmistry from '../assets/Course/Practical-Palmistry-Course.jpg';
import PrashnaKundali from '../assets/Course/Prashna-Kundali.jpg';
import PredictiveAstrology from '../assets/Course/Predictive-Astrology-by-Pratap-Sheel.jpg';
import RinBandhanApp from '../assets/Course/Rin-Bandhan-App-Banner.jpg';
import TravelByNadiAstrology from '../assets/Course/Travel-By-Nadi-Astrology.jpg';
import WealthFinance from '../assets/Course/Wealth-&-Finance.jpg';
import WealthWorkshop from '../assets/Course/Wealth-Workshop.jpg';
import EkadashBhav from '../assets/Course/Ekadash-Bhaav.jpg';
import LalKitabNaamsaar from '../assets/Course/Lal-Kitab-grammar-faladesh.jpg';
import SixthHouse from '../assets/Course/6th-house.jpg';
import EighthHouseWorkshop from '../assets/Course/8th-house-workshop.jpg';
import TwelfthHouseWorkshop from '../assets/Course/12th-house-workshop.jpg';
import AdvanceAstrologyPratap from '../assets/Course/Advance-Astrology-by-pratap-sheel.jpg';
import AdvanceLalKitab from '../assets/Course/Advance-Lal-Kitab-App-Thumbnail.jpg';
import AdvanceNumerology from '../assets/Course/Advance-Numerology-Course.jpg';
import ArtOfPrediction from '../assets/Course/Art-Of-Prediction.jpg';
import ArtOfPredictionAdvance from '../assets/Course/Art-Of-Prediction-Advance.jpg';
import AyurvedaAstrology from '../assets/Course/Ayurveda-Astrology.jpg';
import BasicAstrologyCourse from '../assets/Course/Basic-Astrology-Course.jpg';
import BasicAstrologyUrmiGupta from '../assets/Course/Basic-Astrology-urmi-gupta.jpg';
import BasicNumerology from '../assets/Course/Basic-Numerology.jpg';
import BasicVastu from '../assets/Course/Basic-Vastu.jpg';
import CareerByNadiAstrology from '../assets/Course/Career-By-Nadi-Astrology.jpg';
import ChildBirthByNadiAstrology from '../assets/Course/Child-Birth-by-Nadi-Astrology.jpg';
import DivisionalCharts from '../assets/Course/Divisional-Charts.jpg';

function Courses() {
  const [cartItems, setCartItems] = useState([]);

  const courses = [
    
    { id: 2, image: EducationStudyNadiAstrology, title: "Education & Study by Nadi Astrology", originalPrice: "120", discountedPrice: "90" },
    { id: 3, image: FalitKarnaSeekhe, title: "Falit Karna Seekhe", originalPrice: "150", discountedPrice: "120" },
    { id: 4, image: HealthLongevityNadiAstrology, title: "Health & Longevity by Nadi Astrology", originalPrice: "180", discountedPrice: "150" },
    { id: 5, image: JaiminiAstrology, title: "Jaimini Astrology", originalPrice: "200", discountedPrice: "170" },
    { id: 6, image: KaalSarpYog, title: "Kaal Sarp Yog", originalPrice: "100", discountedPrice: "80" },
    { id: 7, image: KPBasic, title: "KP Astrology Basic", originalPrice: "140", discountedPrice: "110" },
    { id: 8, image: KundaliniTantra, title: "Kundalini Tantra", originalPrice: "300", discountedPrice: "250" },
    { id: 9, image: LagnaDhay, title: "Lagna Dhay", originalPrice: "130", discountedPrice: "100" },
    { id: 10, image: LalKitabAppThumbnail, title: "Lal Kitab App Thumbnail", originalPrice: "200", discountedPrice: "170" },
    { id: 11, image: LalKitabPracticeSession, title: "Lal Kitab Practice Session", originalPrice: "160", discountedPrice: "130" },
    { id: 12, image: LandPropertyNadiAstrology, title: "Land & Property by Nadi Astrology", originalPrice: "220", discountedPrice: "190" },
    { id: 13, image: LitigationsNadiAstrology, title: "Litigations by Nadi Astrology", originalPrice: "180", discountedPrice: "150" },
    { id: 14, image: LoveMarriageRelationship, title: "Love, Marriage, and Relationship", originalPrice: "250", discountedPrice: "220" },
    { id: 15, image: MantraAstrology, title: "Mantra Astrology", originalPrice: "190", discountedPrice: "160" },
    { id: 16, image: MarriageAstrology, title: "Marriage Astrology", originalPrice: "200", discountedPrice: "170" },
    { id: 17, image: MedicalAstrology, title: "Medical Astrology", originalPrice: "210", discountedPrice: "180" },
    { id: 18, image: MiracleVastuAdvance, title: "Miracle Vastu Advance Course", originalPrice: "260", discountedPrice: "230" },
    { id: 19, image: PanchangApp, title: "Panchang App", originalPrice: "100", discountedPrice: "80" },
    { id: 20, image: PitraDosh, title: "Pitra Dosh", originalPrice: "140", discountedPrice: "110" },
    { id: 21, image: PowerOfTrines, title: "Power of Trines", originalPrice: "300", discountedPrice: "270" },
    { id: 22, image: PracticalPalmistry, title: "Practical Palmistry", originalPrice: "240", discountedPrice: "200" },
    { id: 23, image: PrashnaKundali, title: "Prashna Kundali", originalPrice: "150", discountedPrice: "120" },
    { id: 24, image: PredictiveAstrology, title: "Predictive Astrology by Pratap Sheel", originalPrice: "290", discountedPrice: "260" },
    { id: 25, image: RinBandhanApp, title: "Rin Bandhan App", originalPrice: "150", discountedPrice: "120" },
    { id: 26, image: TravelByNadiAstrology, title: "Travel by Nadi Astrology", originalPrice: "160", discountedPrice: "130" },
    { id: 27, image: WealthFinance, title: "Wealth & Finance", originalPrice: "230", discountedPrice: "200" },
    { id: 28, image: WealthWorkshop, title: "Wealth Workshop", originalPrice: "200", discountedPrice: "170" },
    { id: 29, image: EkadashBhav, title: "Ekadash Bhav", originalPrice: "250", discountedPrice: "220" },
    { id: 30, image: LalKitabNaamsaar, title: "Lal Kitab Naamsaar", originalPrice: "180", discountedPrice: "150" },
    { id: 31, image: SixthHouse, title: "Sixth House", originalPrice: "190", discountedPrice: "160" },
    { id: 32, image: EighthHouseWorkshop, title: "Eighth House Workshop", originalPrice: "210", discountedPrice: "180" },
    { id: 33, image: TwelfthHouseWorkshop, title: "Twelfth House Workshop", originalPrice: "230", discountedPrice: "200" },
    { id: 34, image: AdvanceAstrologyPratap, title: "Advance Astrology by Pratap Sheel", originalPrice: "300", discountedPrice: "270" },
    { id: 35, image: AdvanceLalKitab, title: "Advance Lal Kitab App", originalPrice: "270", discountedPrice: "240" },
    { id: 36, image: AdvanceNumerology, title: "Advance Numerology Course", originalPrice: "200", discountedPrice: "170" },
    { id: 37, image: ArtOfPrediction, title: "Art of Prediction", originalPrice: "150", discountedPrice: "120" },
    { id: 38, image: ArtOfPredictionAdvance, title: "Art of Prediction Advance", originalPrice: "180", discountedPrice: "150" },
    { id: 39, image: AyurvedaAstrology, title: "Ayurveda Astrology", originalPrice: "220", discountedPrice: "190" },
    { id: 40, image: BasicAstrologyCourse, title: "Basic Astrology Course", originalPrice: "120", discountedPrice: "100" },
    { id: 41, image: BasicAstrologyUrmiGupta, title: "Basic Astrology by Urmi Gupta", originalPrice: "150", discountedPrice: "120" },
    { id: 42, image: BasicNumerology, title: "Basic Numerology", originalPrice: "130", discountedPrice: "110" },
    { id: 43, image: BasicVastu, title: "Basic Vastu", originalPrice: "140", discountedPrice: "120" },
    { id: 44, image: CareerByNadiAstrology, title: "Career by Nadi Astrology", originalPrice: "220", discountedPrice: "190" },
    { id: 45, image: ChildBirthByNadiAstrology, title: "Child Birth by Nadi Astrology", originalPrice: "200", discountedPrice: "170" },
    { id: 46, image: DivisionalCharts, title: "Divisional Charts", originalPrice: "230", discountedPrice: "200" }
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
      />
      ))}
    </div>
  );
}

export default Courses;
