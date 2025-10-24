import { useEffect } from "react";
import { TOAST_TYPES } from "../constants/constants";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info" | "warning";
  onClose: (id: string) => void;
  id: string;
  toastShowTime: number;
};
const Toast = ({ message, type, onClose, id, toastShowTime }: ToastProps) => {
  useEffect(() => {
    setTimeout(() => {
      onClose(id);
    }, toastShowTime);
  }, []);

  const getBackgroundColor = () => {
    switch (type) {
      case TOAST_TYPES.SUCCESS:
        return "bg-green";
      case TOAST_TYPES.ERROR:
        return "bg-red";
      case TOAST_TYPES.INFO:
        return "bg-blue";
      case TOAST_TYPES.WARNING:
        return "bg-purple";
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
