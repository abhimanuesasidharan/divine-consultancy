import React, { useState } from "react";

function BaCourses() {
  const initialVisibleCourses = 6;
  const [visibleCourses, setVisibleCourses] = useState(initialVisibleCourses);
  const [showAll, setShowAll] = useState(false);
  const allCourses = [
    "Bachelor of Arts (Economics, Sociology)",
    "Bachelor of Arts (Media and Journalism)",
    "B.A. (History, Political Science)",
    "Bachelor of Arts (Music-Western Classical, Creative Media)",
    "BA (Economics, Political Science)",
    "B.A. in Theatre Studies"
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
      <h2 className="text-xl font-semibold text-gray-800 text-center">BA Courses</h2>
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

export default BaCourses;
