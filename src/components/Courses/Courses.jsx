import Course from "../Course/Course";

function Courses({ courses, handleSelectCourse }) {
  return (
    <div className="md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelectCourse={handleSelectCourse}
        />
      ))}
    </div>
  );
}

export default Courses;
