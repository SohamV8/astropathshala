import React from "react";

function Problems() {
  // JSON data for problems
  const problemsData = [
    {
      image: "/images/relationship.jpg",
      title: "Relationship Issues",
      description: "Struggling with conflicts or lack of harmony in your relationships? Astrology can help.",
    },
    {
      image: "/images/career.jpg",
      title: "Career Challenges",
      description: "Facing obstacles in your career path? Discover astrological guidance for success.",
    },
    {
      image: "/images/health.jpg",
      title: "Health Problems",
      description: "Recurring health issues affecting your peace? Find remedies based on your stars.",
    },
    {
      image: "/images/finance.jpg",
      title: "Financial Struggles",
      description: "Unstable finances or debts? Learn how astrology can guide you to prosperity.",
    },
    {
      image: "/images/stress.jpg",
      title: "Mental Stress",
      description: "Overwhelmed by stress or anxiety? Seek insights for mental clarity and balance.",
    },
    {
      image: "/images/marriage.jpg",
      title: "Marriage Problems",
      description: "Experiencing delays or problems in marriage? Get astrological solutions for love and union.",
    },
  ];

  return (
    <div className="py-12 px-6 w-full bg-[#FBFBE2] min-h-screen h-full flex flex-col items-center z-20">

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-[#767522] mb-6 text-center">
        If You Are Facing These Problems, Consult Our Expert
      </h1>
      <p className="text-lg text-[#767522] text-center mb-10 max-w-2xl">
        Astrology offers profound solutions to life's challenges. Explore the possibilities today!
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {problemsData.map((problem, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="h-24 w-full bg-gray-200">
              <img
                src={problem.image}
                alt={problem.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {problem.title}
              </h2>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;
