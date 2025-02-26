/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";

type ToastHandler = (message: string, options?: ToastOptions) => void;

interface ToastContextType {
  showError: ToastHandler;
  showSuccess: ToastHandler;
}

const ToastContext = createContext<ToastContextType>({
  showError: () => {},
  showSuccess: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const defaultOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  };

  function showError(message: string, options?: ToastOptions) {
    toast.error(message, { ...defaultOptions, ...options });
  }

  function showSuccess(message: string, options?: ToastOptions) {
    toast.success(message, { ...defaultOptions, ...options });
  }

  return (
    <ToastContext.Provider value={{ showError, showSuccess }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
