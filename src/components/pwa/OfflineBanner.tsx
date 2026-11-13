// src/components/OfflineBanner.tsx
"use client";

import { useEffect, useState } from "react";

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // چک اولیه
    setIsOffline(!navigator.onLine);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "#f59e0b",
        color: "#fff",
        padding: "8px 16px",
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        zIndex: 99999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      ⚠️ اتصال اینترنت قطع است
    </div>
  );
}