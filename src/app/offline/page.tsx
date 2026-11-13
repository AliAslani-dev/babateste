// src/app/offline/page.tsx
"use client";

export default function OfflinePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 24,
        textAlign: "center",
        gap: 20,
        background: "#FCFDFF",
      }}
    >
      {/* آیکون */}
      <div style={{ fontSize: 80, lineHeight: 1 }}>📡</div>

      {/* عنوان */}
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          margin: 0,
          color: "#1a1a1a",
        }}
      >
        اتصال اینترنت قطع است
      </h1>

      {/* توضیح */}
      <p
        style={{
          fontSize: 15,
          color: "#666",
          maxWidth: 400,
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        لطفاً اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید.
      </p>

      {/* دکمه تلاش مجدد */}
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: 8,
          padding: "12px 32px",
          background: "#1976D2",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        تلاش مجدد
      </button>
    </div>
  );
}