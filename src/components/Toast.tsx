type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
  onClose: (id: string) => void;
  id: string;
};
const Toast = ({ message, type, onClose, id }: ToastProps) => {
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
    <div className={`${getBackgroundColor()} toast-container`}>
      <div className="notification-details">
        <span className="flex-1">{message}</span>
      </div>
      <button
        onClick={(e) =>
          onClose((e.target as HTMLButtonElement).id.split("-")[1])
        }
        id={`button-${id}`}
      >
        X
      </button>
    </div>
  );
};

export default Toast;
