import { toast } from "react-toastify";

interface ToastOptions {
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
}

const DEFAULT_OPTIONS: ToastOptions = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
};

export function showSuccessToast(message: string, options: ToastOptions = {}) {
  toast.success(message, { ...DEFAULT_OPTIONS, ...options });
}

export function showErrorToast(message: string, options: ToastOptions = {}) {
  toast.error(message, { ...DEFAULT_OPTIONS, ...options });
}
