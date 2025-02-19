import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastifyProps {
  position:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
}

export default function Toastify({
  position,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
}: ToastifyProps) {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      closeOnClick={closeOnClick}
      pauseOnHover={pauseOnHover}
    />
  );
}
