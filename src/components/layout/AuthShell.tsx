// src/components/layout/AuthShell.tsx
"use client";

import { Box } from "@mui/material";

interface AuthShellProps {
  children: React.ReactNode;
}

export default function AuthShell({ children }: AuthShellProps) {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        bgcolor: { xs: "background.default", sm: "#EDEDED" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "var(--app-max-width)",
          height: "100%",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
          boxShadow: {
            xs: "none",
            sm: "0 0 30px rgba(0,0,0,0.08)",
          },
          overflow: "hidden",
        }}
      >
        <Box
          component="main"
          className="app-scroll"
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}