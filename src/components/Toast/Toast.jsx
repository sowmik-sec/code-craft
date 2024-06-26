function Toast({ text }) {
  return (
    <div className="toast toast-center toast-middle">
      <div className="alert alert-info">
        <span>{text} </span>
      </div>
    </div>
  );
}

export default Toast;
