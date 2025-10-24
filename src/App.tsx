import { useState } from "react";
import Toast from "./components/Toast";
import { TOAST_TYPES } from "./constants/constants";
import "./App.css";

type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
type ToastMessageType = {
  type: ToastType;
  id: string;
};

function App() {
  const [toasts, setToasts] = useState<ToastMessageType[]>([]);

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const addToast = (type: ToastType) => {
    const id = Date.now().toString();
    setToasts((prevToasts) => [...prevToasts, { type, id }]);
  };

  return (
    <>
      <h1>Toast Notification system</h1>
      <div className="button-group">
        {Object.values(TOAST_TYPES).map((type) => (
          <button key={type} onClick={() => addToast(type)}>
            Show {type} Toast
          </button>
        ))}
      </div>
      <div>
        {toasts.map((toast) => {
          return (
            <Toast
              message={`This is a ${toast.type} message`}
              type={toast.type}
              onClose={removeToast}
              id={toast.id}
              toastShowTime={3000}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
