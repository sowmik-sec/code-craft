import { useState } from "react";

function Course({ course, handleSelectCourse }) {
  const [showDetails, setShowDetails] = useState(false);
  const { course_name, cover_img, credit, price, details } = course;
  const handleDetails = (state) => {
    setShowDetails(state);
  };
  return (
    <div className="p-4 space-y-5">
      <img className="w-full h-80 rounded-lg" src={cover_img} alt="" />
      <h3 className="text-lg font-semibold">{course_name}</h3>
      <p>
        {!showDetails ? (
          <div>
            {details.slice(0, 30)}...
            <span
              className="cursor-pointer text-violet-600"
              onClick={() => handleDetails(true)}
            >
              See Details
            </span>
          </div>
        ) : (
          <div>
            {details}{" "}
            <span
              className="cursor-pointer text-violet-600"
              onClick={() => handleDetails(false)}
            >
              See Less
            </span>
          </div>
        )}
      </p>
      <div className="flex justify-between">
        <p>$ Price: ${price}</p>
        <p>Credit: {credit}hr</p>
      </div>
      <button
        onClick={() => handleSelectCourse(course)}
        className="btn bg-cyan-400 text-white w-full"
      >
        Select
      </button>
    </div>
  );
}

export default Course;
