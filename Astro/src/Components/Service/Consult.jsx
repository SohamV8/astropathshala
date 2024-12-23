import React from "react";
import CourseCard from "../Gems-Books/CourseCard"; // Ensure the path is correct for your project

function Consult() {
  const whatsappLink = "https://wa.me/919871130487";

  // Define an array for main consultation services
  const mainConsultationServices = [
    {
      title: "Consultation Face to Face",
      image: "/images/consult4.jpg", // Replace with your actual image path
      originalPrice: "₹5000",
      discountedPrice: "₹4000",
    },
    {
      title: "Family Pack Consultation",
      image: "/images/familyPack.jpg",
      originalPrice: "₹8000",
      discountedPrice: "₹6500",
    },
    {
      title: "Personal Consultation",
      image: "/images/personal.jpg",
      originalPrice: "₹2000",
      discountedPrice: "₹1500",
    },
  ];

  // Define an array for other consultation services
  const otherConsultationServices = [
    {
      title: "Vastu Consultancy by Map",
      image: "/images/vastu.jpg",
      originalPrice: "₹3000",
      discountedPrice: "₹2500",
    },
    {
      title: "Vastu Visit",
      image: "/images/vastu.jpg",
      originalPrice: "₹3000",
      discountedPrice: "₹2500",
    },
    {
      title: "Numerology Consultation",
      image: "/images/numerology.jpg",
      originalPrice: "₹2500",
      discountedPrice: "₹2000",
    },
    {
      title: "Tarot Consultation",
      image: "/images/tarot.jpg",
      originalPrice: "₹2200",
      discountedPrice: "₹1800",
    },
    {
      title: "Palmistry Consultation",
      image: "/images/palmistry.jpg",
      originalPrice: "₹2200",
      discountedPrice: "₹1800",
    },
  ];

  return (
    <div className="py-12 px-6 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Consultation Services
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Get expert guidance tailored to your needs. Reassure your mind and find clarity with our professional services.
      </p>

      {/* Main Consultation Cards */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Main Consultation Services
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {mainConsultationServices.map((service, index) => (
            <CourseCard
              key={index}
              image={service.image}
              title={service.title}
              originalPrice={service.originalPrice}
              discountedPrice={service.discountedPrice}
              onAddToCart={() => window.open(whatsappLink, "_blank")}
            />
          ))}
        </div>
      </div>

      {/* Other Consultation Services */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Other Consultation Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Explore additional services that can help guide you in various aspects of life, from vastu to numerology and tarot.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {otherConsultationServices.map((service, index) => (
            <CourseCard
              key={index}
              image={service.image}
              title={service.title}
              originalPrice={service.originalPrice}
              discountedPrice={service.discountedPrice}
              onAddToCart={() => window.open(whatsappLink, "_blank")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consult;
