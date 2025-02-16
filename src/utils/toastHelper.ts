"use client";
import { useToast } from "@/context/ToastContext";

type ToastHelperInitializerType = () => {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
};

const ToastHelperInitializer: ToastHelperInitializerType = () => {
  const { addToast } = useToast();

  const toast = {
    success: (message: string) => addToast(message, "success"),
    error: (message: string) => addToast(message, "error"),
    info: (message: string) => addToast(message, "info"),
  };

  return toast;
};
export default ToastHelperInitializer;
