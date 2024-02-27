import React, { useState } from "react";

function BcomCourses() {
  const initialVisibleCourses = 6;
  const [visibleCourses, setVisibleCourses] = useState(initialVisibleCourses);
  const [showAll, setShowAll] = useState(false);
  const allCourses = [
    "Bachelor of Commerce (B.Com.Hons.)",
    "B.Com. in Finance and Investment",
    "B.Com Hons. (Applied Finance and Analytics)",
    "B.Com. in International Finance",
    "B.Com. in Financial Analytics",
    "Bachelor of Commerce (B.Com. Professional)",
    "B.Com. Hons. (International Accountancy and Finance)",
    "Bachelor of Commerce (Accountancy and Taxation)",
    "B.Com (Accountancy and Auditing)"
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
      <h2 className="text-xl font-semibold text-gray-800 text-center">B.Com Courses</h2>
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
          className="rounded-md text-blue-400 px-4 py-2 mt-2 mx-auto bloc"
        >
          See Less
        </button>
      )}
    </div>
  );
}

export default BcomCourses;
