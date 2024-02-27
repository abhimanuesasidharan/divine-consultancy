import React, { useState } from "react";

function BtechCourses() {
  const initialVisibleCourses = 6;
  const [visibleCourses, setVisibleCourses] = useState(initialVisibleCourses);
  const [showAll, setShowAll] = useState(false);
  const allCourses = [
    "Bachelor of Engineering [BE]",
    "Bachelor of Engineering [BE] (Computer Science and Engineering)",
    "Bachelor of Engineering [BE] (Artificial Intelligence & Machine Learning)",
    "Bachelor of Engineering [BE] (Electronics & Communication Engineering)",
    "Bachelor of Engineering [BE] (Information Science & Engineering)",
    "Bachelor of Engineering [BE] (Biotechnology)",
    "Bachelor of Engineering [BE] (Mechanical Engineering)",
    "Bachelor of Engineering [BE] (Electrical and Electronics Engineering)",
    "Bachelor of Engineering [BE] (Industrial Engineering & Management)",
    "Bachelor of Engineering [BE] (Chemical Engineering)",
    "Bachelor of Engineering [BE] (Civil Engineering)",
    "Bachelor of Engineering [BE] (Cyber Security)",
    "Bachelor of Engineering [BE] (Electronics & Telecommunication Engineering)",
    "Bachelor of Engineering [BE] Computer Science and Engineering (Artificial Intelligence and Machine)",
    "Bachelor of Engineering [BE] (Telecommunication Engineering)",
    "Bachelor of Engineering [BE] (Electronics and Instrumentation Engineering)"
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
      <h2 className="text-xl font-semibold text-gray-800 text-center">B.Tech Courses</h2>
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
          See More
        </button>
      )}
      {showAll && (
        <button
          onClick={handleSeeLess}
          className="rounded-md text-blue-400 px-4 py-2 mt-2 mx-auto block"
        >
          See Less
        </button>
      )}
    </div>
  );
}

export default BtechCourses;
