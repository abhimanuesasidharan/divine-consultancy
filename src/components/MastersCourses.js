import React, { useState } from "react";

function MastersCourses() {
  const initialVisibleCourses = 2; // Initial number of visible courses
  const [visibleCourses, setVisibleCourses] = useState(initialVisibleCourses);
  const [showAll, setShowAll] = useState(false); // State to track whether all courses are shown

  const allCourses = [
    "Msc.Nursing",
    "Post B.Sc nursing"
    // Add more courses here if needed
  ];

  // Function to handle "See More" button click
  const handleSeeMore = () => {
    setVisibleCourses(allCourses.length); // Show all courses
    setShowAll(true); // Set showAll to true
  };

  // Function to handle "See Less" button click
  const handleSeeLess = () => {
    setVisibleCourses(initialVisibleCourses); // Show initial number of courses
    setShowAll(false); // Set showAll to false
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-800 text-center">Masters</h2>
      {allCourses.slice(0, visibleCourses).map((course, index) => (
        <p key={index} className="text-gray-600 mt-2">
          {course}
        </p>
      ))}
      {/* Conditionally render "See More" button if not all courses are shown */}
      {!showAll && allCourses.length > initialVisibleCourses && (
        <button
          onClick={handleSeeMore}
          className="rounded-md text-blue-400 px-4 py-2 mt-2 mx-auto block"
        >
          See More
        </button>
      )}
      {/* Conditionally render "See Less" button if all courses are shown */}
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

export default MastersCourses;
