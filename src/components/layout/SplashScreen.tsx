// src/components/layout/SplashScreen.tsx
"use client";

import { semanticColors } from "@/theme";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  children: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = window.setTimeout(() => setShowSplash(false), 1600);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {children}

      {showSplash && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            // color: "#fff",
            color:semanticColors.background.default,
            px: 3,
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 400ms ease",
            pointerEvents: fadeOut ? "none" : "auto",
          }}
        >
          <Box
            sx={{
              width: 88,
              height: 88,
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // bgcolor: "#fff",
              bgcolor:semanticColors.background.default,
              color: "primary.main",
              fontSize: 24,
              fontWeight: 800,
              mb: 3,
            }}
          >
            APP
          </Box>

          <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
            اپلیکیشن من
          </Typography>

          {/* <CircularProgress size={24} thickness={4} sx={{ color: "#fff" }} /> */}
          <CircularProgress size={24} thickness={4} sx={{ color: semanticColors.background.default }} /> 
        </Box>
      )}
    </>
  );
}