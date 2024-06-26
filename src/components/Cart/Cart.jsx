function Cart({ cartObj }) {
  const { selectedCourses, creditHourRemaining, totalCreditHour, totalPrice } =
    cartObj;
  return (
    <div className="md:w-2/12 p-6 space-y-5">
      <h4 className="text-2xl font-bold text-cyan-400">
        Credit Hour Remaining {creditHourRemaining} hr
      </h4>
      <hr />
      <div>
        <h5 className="text-xl font-bold">Course Name</h5>
        <ol className="list-decimal">
          {selectedCourses.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ol>
      </div>
      <hr />
      <p>Total Credit Hour: {totalCreditHour}</p>
      <hr />
      <h5>Total Price: {totalPrice} USD</h5>
    </div>
  );
}

export default Cart;
