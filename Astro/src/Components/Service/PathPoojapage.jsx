import React from "react";
import CustomCarousel from "../HomeComponents/Carousel";
import CourseCard from "../Gems-Books/CourseCard";
import trycar from "../../assets/trycar.png";
import underline from '../../assets/underline1.png';

function PathPoojapage() {
  const whatsappLink = "https://wa.me/919871130487";

  // Data for the nine planets' poojas
  const NavgrahPooja = [
    {
      image: "/images/sun-pooja.jpg",
      title: "Surya (Sun) Pooja",
      originalPrice: "₹4,000",
      discountedPrice: "₹3,500",
    },
    {
      image: "/images/moon-pooja.jpg",
      title: "Chandra (Moon) Pooja",
      originalPrice: "₹3,500",
      discountedPrice: "₹2,999",
    },
    {
      image: "/images/mars-pooja.jpg",
      title: "Mangal (Mars) Pooja",
      originalPrice: "₹4,500",
      discountedPrice: "₹3,800",
    },
    {
      image: "/images/mercury-pooja.jpg",
      title: "Budh (Mercury) Pooja",
      originalPrice: "₹3,000",
      discountedPrice: "₹2,700",
    },
    {
      image: "/images/jupiter-pooja.jpg",
      title: "Guru (Jupiter) Pooja",
      originalPrice: "₹5,000",
      discountedPrice: "₹4,200",
    },
    {
      image: "/images/venus-pooja.jpg",
      title: "Shukra (Venus) Pooja",
      originalPrice: "₹4,000",
      discountedPrice: "₹3,500",
    },
    {
      image: "/images/saturn-pooja.jpg",
      title: "Shani (Saturn) Pooja",
      originalPrice: "₹5,500",
      discountedPrice: "₹4,800",
    },
    {
      image: "/images/rahu-pooja.jpg",
      title: "Rahu Pooja",
      originalPrice: "₹4,500",
      discountedPrice: "₹3,900",
    },
    {
      image: "/images/ketu-pooja.jpg",
      title: "Ketu Pooja",
      originalPrice: "₹4,500",
      discountedPrice: "₹3,900",
    },
  ];

  const Havan = [
    {
      image: "/images/navagraha-shanti-havan.jpg",
      title: "Navagraha Shanti Havan",
      originalPrice: "₹6,000",
      discountedPrice: "₹5,500",
    },
    {
      image: "/images/mahamrityunjaya-havan.jpg",
      title: "Mahamrityunjaya Havan",
      originalPrice: "₹7,000",
      discountedPrice: "₹6,300",
    },
    {
      image: "/images/durga-havan.jpg",
      title: "Durga Havan",
      originalPrice: "₹5,000",
      discountedPrice: "₹4,500",
    },
    {
      image: "/images/ganapati-havan.jpg",
      title: "Ganapati Havan",
      originalPrice: "₹4,500",
      discountedPrice: "₹4,000",
    },
    {
      image: "/images/lakshmi-narayan-havan.jpg",
      title: "Lakshmi Narayan Havan",
      originalPrice: "₹6,000",
      discountedPrice: "₹5,400",
    },
    {
      image: "/images/gayatri-havan.jpg",
      title: "Gayatri Havan",
      originalPrice: "₹4,000",
      discountedPrice: "₹3,600",
    },
    {
      image: "/images/sundarkand-path-havan.jpg",
      title: "Sundarkand Path Havan",
      originalPrice: "₹5,000",
      discountedPrice: "₹4,500",
    },
    {
      image: "/images/chandi-path-havan.jpg",
      title: "Chandi Path Havan",
      originalPrice: "₹7,000",
      discountedPrice: "₹6,500",
    },
    {
      image: "/images/pitru-dosh-nivaran-havan.jpg",
      title: "Pitru Dosh Nivaran Havan",
      originalPrice: "₹6,500",
      discountedPrice: "₹5,800",
    },
    {
      image: "/images/saraswati-havan.jpg",
      title: "Saraswati Havan",
      originalPrice: "₹4,500",
      discountedPrice: "₹4,000",
    },
    {
      image: "/images/kaal-sarp-dosh-havan.jpg",
      title: "Kaal Sarp Dosh Nivaran Havan",
      originalPrice: "₹6,000",
      discountedPrice: "₹5,500",
    },
    {
      image: "/images/vastu-shanti-havan.jpg",
      title: "Vastu Shanti Havan",
      originalPrice: "₹5,000",
      discountedPrice: "₹4,500",
    },
    {
      image: "/images/rudra-havan.jpg",
      title: "Rudra Havan",
      originalPrice: "₹7,500",
      discountedPrice: "₹6,800",
    },
    {
      image: "/images/satyanarayan-havan.jpg",
      title: "Satyanarayan Havan",
      originalPrice: "₹4,000",
      discountedPrice: "₹3,500",
    },
    {
      image: "/images/ayush-havan.jpg",
      title: "Ayush Havan",
      originalPrice: "₹5,500",
      discountedPrice: "₹4,900",
    },
  ];

  return (
    <>
      <CustomCarousel images={[trycar, trycar, trycar]} interval={4000} />
      <div className="min-h-screen py-12 flex flex-col items-center">
  {/* Navgrah Pooja Section */}
  <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
    Navgrah Pooja
  </h1>
  <img src={underline} alt="underline" className="mx-auto mt-1 w-27" />
  <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl">
    The Navgrah Pooja is a unique ritual that is performed to please the nine planets of the solar system. It helps remove negative planetary effects and brings peace, prosperity, and good fortune. Performed by expert priests, this pooja involves chanting sacred mantras and offering prayers on significant occasions like birthdays, anniversaries, or other special events.
  </p>

  {/* CourseCard Section */}
  <div className="mb-16">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
      Explore Navgrah Poojas
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
      {/* Map through NavgrahPooja array */}
      {NavgrahPooja.map((pooja, index) => (
        <div key={index} className="w-full max-w-xs">
          <CourseCard
            image={pooja.image}
            title={pooja.title}
            originalPrice={pooja.originalPrice}
            discountedPrice={pooja.discountedPrice}
            onAddToCart={() => window.open(whatsappLink, "_blank")}
            whatsappLink={whatsappLink}
            buttonText="Contact Us"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Havan Section */}
  <div className="mb-16">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
      Explore Havan
    </h2>
    <img src={underline} alt="underline" className="mx-auto mt-1 w-27" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
      {/* Map through Havan array */}
      {Havan.map((pooja, index) => (
        <div key={index} className="w-full max-w-xs">
          <CourseCard
            image={pooja.image}
            title={pooja.title}
            originalPrice={pooja.originalPrice}
            discountedPrice={pooja.discountedPrice}
            onAddToCart={() => window.open(whatsappLink, "_blank")}
            whatsappLink={whatsappLink}
            buttonText="Contact Us"
          />
        </div>
      ))}
    </div>
  </div>
</div>


    </>
  );
}

export default PathPoojapage;
