"use client";

import { useToast } from "@/context/ToastContext";

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            marginBottom: "10px",
            padding: "10px 20px",
            background: toast.type === "error" ? "#f56565" : "#48bb78",
            color: "#fff",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
