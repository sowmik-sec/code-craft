function Course({ course }) {
  const { course_name, cover_img, credit, price, details } = course;
  return (
    <div className="p-4 space-y-5">
      <img className="w-full h-80 rounded-lg" src={cover_img} alt="" />
      <h3 className="text-lg font-semibold">{course_name}</h3>
      <p>
        {details.slice(0, 40)}...
        <span className="cursor-pointer text-violet-700">See Details</span>
      </p>
      <div className="flex justify-between">
        <p>$ Price: ${price}</p>
        <p>Credit: {credit}hr</p>
      </div>
      <button className="btn bg-cyan-400 text-white w-full">Select</button>
    </div>
  );
}

export default Course;
