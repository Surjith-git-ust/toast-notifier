const Toast = ({ message, type, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green";
      case "error":
        return "bg-red";
      case "info":
        return "bg-blue";
      default:
        return "bg-gray";
    }
  };
  return (
    <div className={`${getBackgroundColor()}`}>
      <div className="notification-details">
        <span className="flex-1">{message}</span>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Toast;
