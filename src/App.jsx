import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Courses from "./components/Courses/Courses";
import Toast from "./components/Toast/Toast";
import Cart from "./components/Cart/Cart";

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [creditHourRemaining, setCreditHourRemaining] = useState(20);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartObj, setCartObj] = useState({
    selectedCourses,
    creditHourRemaining,
    totalCreditHour,
    totalPrice,
  });
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelectCourse = (course) => {
    if (creditHourRemaining <= 0 || totalCreditHour + course.credit > 20) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setToastText("Your credit hour has exceeded");
      return;
    }
    console.log(course);
    if (selectedCourses.find((c) => c === course.course_name)) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setToastText("You have selected this course before");
      return;
    }
    // setSelectedCourses([...selectedCourses, course.course_name]);
    // setTotalCreditHour(totalCreditHour + parseInt(course.credit));
    // setTotalPrice(totalPrice + parseInt(course.price));
    // setCreditHourRemaining(20 - totalCreditHour);
    // setCartObj({
    //   selectedCourses,
    //   creditHourRemaining,
    //   totalCreditHour,
    //   totalPrice,
    // });
    setSelectedCourses((prevSelectedCourses) => {
      const newSelectedCourses = [...prevSelectedCourses, course.course_name];
      const newTotalCreditHour = totalCreditHour + parseInt(course.credit);
      const newTotalPrice = totalPrice + parseInt(course.price);
      const newCreditHourRemaining = 20 - newTotalCreditHour;

      setTotalCreditHour(newTotalCreditHour);
      setTotalPrice(newTotalPrice);
      setCreditHourRemaining(newCreditHourRemaining);

      setCartObj({
        selectedCourses: newSelectedCourses,
        creditHourRemaining: newCreditHourRemaining,
        totalCreditHour: newTotalCreditHour,
        totalPrice: newTotalPrice,
      });

      return newSelectedCourses;
    });
  };
  return (
    <>
      {showToast && <Toast text={toastText} />}
      <h2 className="text-3xl text-center my-10">Code Craft</h2>
      <main className="md:flex mx-[2%]">
        <Courses courses={courses} handleSelectCourse={handleSelectCourse} />
        <Cart cartObj={cartObj} />
      </main>
    </>
  );
}

export default App;
