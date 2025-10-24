import { useState } from "react";
import Toast from "./components/Toast";
import { TOAST_TYPES } from "./constants/constants";
import "./App.css";

function App() {
  const [toastToShow, setToastToShow] = useState<string | null>(null);
  const onClose = () => {
    console.log("Toast closed");
  };
  const showToast = (type: string) => {
    setToastToShow(type);
  };
  return (
    <>
      <h1>Toast Notification system</h1>
      <div>
        <button onClick={() => showToast(TOAST_TYPES.ERROR)}>Error</button>
        <button onClick={() => showToast(TOAST_TYPES.WARNING)}>Warning</button>
        <button onClick={() => showToast(TOAST_TYPES.INFO)}>Information</button>
      </div>
      <div>
        {toastToShow && (
          <Toast
            message={`This is a ${toastToShow} message`}
            type={toastToShow}
            onClose={onClose}
          />
        )}
      </div>
    </>
  );
}

export default App;
