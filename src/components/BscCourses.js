import React, { useState } from "react";

function BscCourses() {
  const initialVisibleCourses = 6;
  const [visibleCourses, setVisibleCourses] = useState(initialVisibleCourses);
  const [showAll, setShowAll] = useState(false);
  const allCourses = [
    "B.Sc.Nursing",
    "B.Sc. (Hons) in Biotechnology, Chemistry",
    "B.Sc emergency medicine technology",
    "Bsc blood banking technology",
    "Bsc integrated clinical nutrition and dietetics",
    "Bsc respiratory care technology",
    "Bsc cardiac care technology",
    "Bsc cardiac perfusion technology",
    "Bsc medical laboratory technology",
    "Bsc medical imaging technology ( Radiology)",
    "Bsc optometry technology",
    "Bsc clinical psychology",
    "Bsc anesthesia and operations theatre technology",
    "Bsc renal dialysis technology",
    "Bsc radiotherapy technology",
    "Bachelor in audiology and speech language pathology ( BASLP)",
    "bachelor in physiotherapy ( Bpt)",
    "B.Sc. (Economics, Mathematics, Statistics)",
    "B.Sc. (Hons.) in Psychology",
    "Bachelor of Science (Hons) in Computer Science, Mathematics",
    "B.Sc. in Economics and Analytics",
    "B.Sc. (Hons.) in Psychology"
  ];

  const handleSeeMore = () => {
    setVisibleCourses(allCourses.length);
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setVisibleCourses(initialVisibleCourses);
    setShowAll(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-800 text-center">BSc Courses</h2>
      {allCourses.slice(0, visibleCourses).map((course, index) => (
        <p key={index} className="text-gray-600 mt-2">
          {course}
        </p>
      ))}
      {!showAll && allCourses.length > initialVisibleCourses && (
        <button
          onClick={handleSeeMore}
          className="rounded-md text-blue-400 px-4 py-2 mt-2 mx-auto block"
        >
          See More..
        </button>
      )} {/* Closing parenthesis was missing here */}
      {showAll && (
        <button
          onClick={handleSeeLess}
          className="rounded-md text-blue-400 px-4 py-2 mt-2 mx-auto block"
        >
          See Less..
        </button>
      )}
    </div>
  );
}

export default BscCourses;
